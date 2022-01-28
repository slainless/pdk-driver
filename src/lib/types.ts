export interface ParserResponse<T> {
  /** Data returned by the parser */
  data: T[]
  /** Total number of rows of data in the server */
  total: number
}

export type GetResults<T> = {
  data: T[]
  count: number
}

export type GetOptions = {
  /** Should method returns raw HTML string or processed and validated object? */
  raw?: boolean
  // TODO: add ability to change perPage!
  /** Navigate to page or by offset. Default: `page: 1` */
  // nav?: `page: ${number}` | `offset: ${number}`
  page?: number
  /**
   * How many should server returns per page. Will be used as factor for calculation in page nav.
   * Default: `15`
   */
  // perPage: number | 'all'
}
