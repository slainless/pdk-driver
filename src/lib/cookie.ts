import { strict as assert } from 'node:assert'
import { Headers } from 'node-fetch'

interface BrowserCookie {
  /** Name of the cookie. */
  name: string
  /** Value of the cookie. */
  value: string
  /** Expiration date of the cookie. */
  expires?: Date
  /** Max-Age of the Cookie. Max-Age must be an integer superior or equal to 0. */
  maxAge?: number
  /** Specifies those hosts to which the cookie will be sent. */
  domain?: string
  /** Indicates a URL path that must exist in the request. */
  path?: string
  /** Indicates if the cookie is made using SSL & HTTPS. */
  secure?: boolean
  /** Indicates that cookie is not accessible via JavaScript. */
  httpOnly?: boolean
  /**
   * Allows servers to assert that a cookie ought not to
   * be sent along with cross-site requests.
   */
  sameSite?: 'Strict' | 'Lax' | 'None'
  /** Additional key value pairs with the form "key=value" */
  unparsed?: string[]
}

type CookieValue = BrowserCookie[keyof BrowserCookie]
type CookieKey = keyof Omit<BrowserCookie, 'name' | 'value' | 'unparsed'>
const trueKey: Record<Uppercase<CookieKey>, CookieKey> = {
  EXPIRES: 'expires',
  DOMAIN: 'domain',
  HTTPONLY: 'httpOnly',
  MAXAGE: 'maxAge',
  PATH: 'path',
  SAMESITE: 'sameSite',
  SECURE: 'secure',
}

/**
 * Class implementation of Deno's Cookie.
 */
export class Cookie {
  constructor(
    /** key of the cookie */
    public name: string,
    /** value of the cookie */
    public value: string,
    /** other parameters of the cookie. (ie. `expires`, `domain`, `path`, etc.) */
    public params: Omit<BrowserCookie, 'name' | 'value'>
  ) {}

  /**
   * Returns full (as in the original) string of the Cookie
   */
  toFullString(): string {
    let base = this.toString()
    for (const key of Object.keys(this.params)) {
      const k = key as keyof typeof this.params
      switch (k) {
        case 'expires':
          base += `; ${k}=${this.params.expires?.toUTCString()}`
          break
        case 'httpOnly':
        case 'secure':
          if (this.params[k] == false) break
          base += `; ${k}`
          break
        default:
          base += `; ${k}=${this.params[k]}`
      }
    }

    return base
  }

  /**
   * Returns short string of the Cookie that contains
   * only the key (name) and the value.
   */
  toString(): string {
    return `${this.name}=${this.value}`
  }
}

export class PHPCookieJar extends Array<Cookie> {
  /**
   * `PHPSESSID` of the cookies
   */
  get sessionId() {
    return this.find((cookie) => cookie.name === 'PHPSESSID')
  }

  /** Cookies in short string format */
  get shortString() {
    return this.map((cookie) => cookie.toString()).join(', ')
  }

  /** Cookies in full string format */
  get fullString() {
    return this.map((cookie) => cookie.toFullString()).join(', ')
  }
}

/**
 * Parse cookies from the headers and returns `Cookie` object.
 * Cookies parsed from `set-cookie` in the headers
 *
 * Can (and mainly) be used to parse fetch response's cookies.
 *
 * Accept input from valid cookies string or `Headers`
 */
export function parseCookies(cookies: string): Cookie[]
export function parseCookies(headers: Headers): Cookie[]
export function parseCookies(input: Headers | string): Cookie[] {
  const cookies = input instanceof Headers ? input.get('set-cookie') : input
  if (input === '') return []
  assert(cookies != null, `Response didn't return cookies!`)

  // NOTE:
  // cookies cannot be split with (,) since expires has (,) containing
  // value so we need to split it with (;) instead. It's also time
  // consuming for me to think of regex-based splitter it so we approach
  // it the traditional way.
  //
  // but, there is a caveat to this, since last property of cookie is not
  // closed with a (;), it will lead to this:
  // ie. "; sameSite=Lax, _newCookie=newValue;" will be treated as one.
  // so, we need to hack it.
  const splitted = cookies.split(';')
  const parsedJar: Cookie[] = []

  /** DRY cookie pushing */
  const push = (c: Record<string, CookieValue>) => {
    const { name, value, ...rest } = c
    assert(typeof name === 'string', 'Name is not string!')
    assert(typeof value === 'string', 'Value is not string!')
    parsedJar.push(new Cookie(name as string, value as string, rest))
  }

  let cookie: Record<string, CookieValue> = {}
  /** DRY key/value parser */
  const assign = (kv: string) => {
    const [key, value] = kv.split('=')
    // normalize the inconsistencies of the key by transforming it to
    // uppercase then using `trueKey` to get the normalized key.
    const k = key.trim().toUpperCase() as Uppercase<CookieKey>
    const v = value as string | undefined
    switch (k) {
      case 'EXPIRES':
        cookie.expires = new Date(v!)
        break
      case 'MAXAGE':
        cookie.maxAge = Number.parseInt(v!)
        break
      case 'HTTPONLY':
      case 'SECURE':
        cookie[trueKey[k]] = v === 'true' || v === undefined ? true : false
        break
      case 'DOMAIN':
      case 'PATH':
      case 'SAMESITE':
        cookie[trueKey[k]] = value
        break

      // catch name & value
      default:
        cookie.name = key
        cookie.value = value
    }
  }

  // here is where we parse the cookies
  for (const [i, kv] of Object.entries(splitted)) {
    // the caveat of cookies (;)-splitting is that
    // 1. cookies are flattened
    // 2. there will be entries which are the boundary between old cookie
    //    and new cookie
    //    ie. `lastPropOfOldCookie=value, newCookie=newCookieValue`.
    //
    // to detect the boundary, we will split the entry with (=).
    // a boundary entry will return 3-length array when splitted with (=).
    // ie. `(1|lastPropOfOldCookie)=(2|value, newCookie)=(3|newCookieValue)`.
    if (kv.split('=').length === 3) {
      // after catching the boundary entry, this entry is splitted into
      // `lastPropOfOldCookie=value` and `newCookie=newCookieValue`
      const [lastPropOfOldCookie, newCookie] = kv.split(',')
      // assign the last prop of the old cookie to the old cookie
      assign(lastPropOfOldCookie)
      // push the old cookie as new Cookie(cookie) to the jar
      push(cookie)

      // refresh cookie
      cookie = {}
      // assign new prop to the new cookie
      assign(newCookie)
    }
    // this happens when not in new cookie boundary
    // just prop=value assigning process...
    else {
      assign(kv)
    }

    // if this is the last entry, then that means there is no more
    // entry left to be assigned to the current cookie.
    // push the cookie to the jar.
    if (+i === splitted.length - 1) push(cookie!)
  }

  return parsedJar
}
