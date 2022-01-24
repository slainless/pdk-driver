export interface ParserResponse<T> {
  /** Data returned by the parser */
  data: T[]
  /** Total number of rows of data in the server */
  total: number
}
