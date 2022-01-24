// !NOTE:
// prodeskel's url is sensitive to it's slash
// for example,
// POST-ing to http://prodeskel.binapemdes.kemendagri.go.id/app_login
// will returns 405 HTTP Error.
//
// The POST req must be send to /app_login/ instead of /app_login
// for the server to accept the request.

import { Cookie, PHPCookieJar, parseCookies } from './lib/cookie.js'
import fetch, { Headers, RequestInit, BodyInit } from 'node-fetch'
import { FormData } from 'formdata-polyfill/esm.min.js'

export type Credential = { username: string; password: string }
export interface ConnectionState {
  cookies: string
  isLoggedIn: boolean
}
export interface ConnectionOptions {
  /**
   * Initialize connection with `ConnectionState`.
   */
  initialState?: ConnectionState
  // TODO:
  // - change headers to `Headers`
  // - allow custom headers
  // headers: Headers

  /** Use preset credential to allow automatic relog-in and parameterless `login()` call  */
  useCredential?: Credential
}

/**
 * Class to handle cookies management, login, and fetching.
 * Other implementations including:
 * - on-demand login & cookies generation
 * - throttled & cached login
 * - expiring session check logic
 */
export default class Connection {
  static HOST = `prodeskel.binapemdes.kemendagri.go.id` as const
  static BASE_URL = (`http://` +
    Connection.HOST) as `http://${typeof Connection.HOST}`

  public headers = {
    ['User-Agent']:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
  }
  /** Return promise to prevent access race condition */
  public cookieJar: Promise<PHPCookieJar> = new Promise((res) =>
    res(new PHPCookieJar())
  )
  /** Return promise to prevent access race condition */
  private _isLoggedIn: Promise<boolean> = new Promise((res) => res(false))

  private credential?: Credential

  constructor(options?: ConnectionOptions) {
    if (options == null) return
    const { initialState, useCredential } = options

    if (initialState) {
      const jar = new PHPCookieJar()
      jar.push(...parseCookies(initialState.cookies))
      this.cookieJar = new Promise((res) => res(jar))
      this._isLoggedIn = new Promise((res) => res(initialState.isLoggedIn))
    }

    if (useCredential) this.credential = useCredential
  }

  /**
   * Generate cookies (mainly to get `PHPSESSID`) from the server
   * by touching `/app_login/`
   */
  async generateCookies(): Promise<void> {
    const reqControl = new AbortController()

    // we are returning promise to prevent race condition.
    // by doing this, we are making sure that only one cookie
    // generation process can exist at one time. the other
    // will have to wait until this fetch process complete.
    this.cookieJar = new Promise((res) => {
      fetch(Connection.BASE_URL + '/app_login/', {
        headers: this.headers,
        signal: reqControl.signal,
      }).then((r) => {
        const jar = new PHPCookieJar()
        jar.push(...parseCookies(r.headers))
        if (jar.find((c) => c.name === 'PHPSESSID') == null)
          throw new Error('PHPSESSID is not found in response set-cookies!')

        reqControl.abort()
        res(jar)
      })
    })
  }

  get isLoggedIn() {
    return this._isLoggedIn
  }

  /**
   * Logging in to prodeskel by `POST`-ing to `/app_login/`.
   * Requires cookies to be generated beforehand and `PHPSESSID` cookie exist.
   *
   * If `useCredential` is set up, input `credential` will be ignored.
   *
   * Will call `this.generateCookies()` when no cookies found.
   *
   * Will wait for `this.isLoggedIn`, to prevent multiple `login()` call overlap.
   *
   * Throw error on fail attempt.
   */
  async login(credential?: Credential) {
    // if state is loggedIn and session ID is not empty, then return true
    if ((await this.isLoggedIn) && (await this.cookieJar).sessionId != null)
      return

    if (credential == null && this.credential == null)
      throw new Error(
        'No credential is set. Make sure you are logged in manually or ' +
          'set up useCredential to auto-login and login parameterless call.'
      )

    const { username, password } = this.credential ?? credential ?? {}
    if (username == null || password == null)
      throw new Error(
        'Username or password is empty! if you are calling this method without parameter,' +
          'then make sure that you are setting `useCredential`.'
      )

    let jar = await this.cookieJar
    // if jar is empty, then generate cookies first
    if (jar.length === 0)
      // throw new Error(
      //   'Cookies must be generated first before attempting to login!'
      // )
      await this.generateCookies()

    jar = await this.cookieJar
    if (jar.length === 0)
      throw new Error('IMPLEMENTATION ERROR: NO_COOKIE_GENERATED')

    const sessionId = jar.sessionId
    if (sessionId == null) throw new Error('PHPSESSID is not found in cookies!')

    const cookiesString = jar.shortString
    const headers = {
      ...this.headers,
      // ['Content-Type']: 'application/x-www-form-urlencoded',
      ['Origin']: Connection.BASE_URL,
      ['Referer']: Connection.BASE_URL + '/app_login/',
      ['Upgrade-Insecure-Requests']: '1',
      ['Cookie']: cookiesString,
      ['Host']: Connection.HOST,
    }

    let body = new FormData()
    body.append('nm_form_submit', '1')
    body.append('nmgp_idioma_novo', '')
    body.append('nmgp_schema_f', '')
    body.append('nmgp_url_saida', '')
    body.append('bok', 'OK')
    body.append('nmgp_opcao', 'alterar')
    body.append('nmgp_ancora', '')
    body.append('nmgp_num_form', '')
    body.append('nmgp_parms', '')
    body.append('script_case_init', '1')
    body.append('script_case_session', sessionId.value)
    body.append('links', '')
    body.append('login', username)
    body.append('pswd', password)

    // NOTE:
    // $ sample failed login response text length: 125320
    // $ sample success login response text length: 1180
    // wrong credential will return a response with length ~120000 while
    // right credential will return a response with length ~1000
    // we can use it as an indicator for successful/failed login
    //
    // also, failed login will return a GET response instead.
    // # detail in postman.
    this._isLoggedIn = new Promise((res, rej) => {
      const reqControl = new AbortController()
      fetch(Connection.BASE_URL + '/app_login/', {
        headers,
        method: 'POST',
        body: body,
        signal: reqControl.signal,
      }).then((r) => {
        // cancel the request to minimize resource usage.
        // no need to fetch all the data, we just need the length to know
        // whether the login is successful or not.
        res(+(r.headers.get('Content-Length') ?? 0) < 100000)
        reqControl.abort()
      })
    })
    const result = await this._isLoggedIn
    if (result == false)
      throw new Error(
        `Login failed! It's probably because of wrong credential.`
      )

    return
  }

  /**
   * Wrapped `fetch` function that will make sure connection is logged in
   * before doing the request.
   *
   * Will auto-login if not already logged in, as long as `useCredential`
   * is set up, else throwing error.
   *
   * Auto login is throttled by `this.isLoggedIn`, will wait for ongoing
   * login call before calling own function.
   */
  async fetch(
    input: Parameters<typeof fetch>[0],
    init?: Omit<RequestInit, 'body'> & {
      body?: () => Promise<BodyInit | null> | BodyInit | null
    }
  ) {
    await this.login()
    const jar = await this.cookieJar
    const sessionId = jar.sessionId!

    let reqSignal = new AbortController()
    const { body, ...restInit } = init ?? {}
    const req = async (options?: RequestInit) => {
      return fetch(Connection.BASE_URL + input, {
        ...restInit,
        ...options,
        headers: {
          ['Cookie']: jar.shortString,
          ...this.headers,
          ...restInit?.headers,
          ...options?.headers,
        },
        body: await body?.(),
      })
    }

    let res = await req({
      signal: reqSignal.signal,
    })

    // NOTE:
    // @ credential failure example: look at `data/example_credential_fail.html`
    //
    // to determine whether the request is failed because of invalid session or
    // credential failure, we need to check the length of the response body.
    //
    // INITIALLY, response length will be *EXACTLY* 1496 without factoring
    // PHPSESSID value's byte length, which can be computed from
    // `data/example_credential_fail.html` + excluding the session id.
    // # PHPSESSID is stored in element named `script_case_session`
    //
    // using that information, we can determine if the response is a fail res
    // by checking if CONTENT_LENGTH === PHPSESSID_VALUE_LENGTH + 1496.
    //
    // this is a pretty hacky approach and the chance of legit response returning
    // length 1496 + PHPSESSID_VALUE_LENGTH is not zero.
    // the pros of this approach is that we can save resources by not parsing the
    // response everytime `fetch()` is called.

    const phpSessIdLength = new TextEncoder().encode(sessionId.value).length
    const contentLength = +(res!.headers!.get('Content-Length') ?? 0)
    if (contentLength === 1496 + phpSessIdLength) {
      // if `useCredential` is not set, then throw error
      if (this.credential == null)
        throw new Error(
          'Login session is expired. Manually relogin and retry the request'
        )
      // else, clear state, then
      // wait for session renewal.
      this.clearState()
      // this is where we throttle the login process
      // only one login process can run at one time
      await this.login()

      // throw error if login state is still not changed.
      if ((await this.isLoggedIn) == false)
        throw new Error('IMPLEMENTATION ERROR: LOGIN_FAILED')

      // cancel the ongoing request
      reqSignal.abort()

      // create new request
      reqSignal = new AbortController()
      res = await req({
        signal: reqSignal.signal,
      })
    }

    // TODO:
    // somehow return also the controller
    // or just make sure we also require the controller from
    // input in `init` parameter
    return res
  }

  /**
   * Dump the current state of the connections, which
   * contains the `cookies` and `isLoggedIn` property
   * of the connection
   */
  async dumpState(): Promise<ConnectionState> {
    return {
      cookies: (await this.cookieJar).fullString,
      isLoggedIn: await this.isLoggedIn,
    }
  }

  clearState() {
    this.cookieJar = new Promise((res) => res(new PHPCookieJar()))
    this._isLoggedIn = new Promise((res) => res(false))
    return this
  }
}
