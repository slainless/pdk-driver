// super naive & simple test

import sizeof from 'object-sizeof'

import { unified } from 'unified'
import rehypeParse from 'rehype-parse'

import * as cheerio from 'cheerio'
import { readFileSync } from 'fs'

const exampleA = /*html*/ `
<ul id="test" class="test" onclick="alert('hello')">
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>
`
const exampleB = readFileSync(
  'dev/data/example_grid_agtkeluarga_sc_grid_body.html',
  { encoding: 'utf-8' }
)

const uniparser = unified().use(rehypeParse, { fragment: true })

const uni = (v: string) => uniparser.parse(v)
const cio = (v: string) => cheerio.load(v, null, false)

let time: number
console.log('\n---\nShort example\n---')
time = Date.now()
console.log('Unist Size:', sizeof(uni(exampleA)))
console.log('Unist finished in', `${Date.now() - time}ms`)
time = Date.now()
console.log('Cheerio Size:', sizeof(cio(exampleA)('*')))
console.log('Cheerio finished in', `${Date.now() - time}ms`)

console.log('\n---\nLong example\n---')
time = Date.now()
console.log('Unist Size:', sizeof(uni(exampleB)))
console.log('Unist finished in', `${Date.now() - time}ms`)
time = Date.now()
console.log('Cheerio Size:', sizeof(cio(exampleB)('*')))
console.log('Cheerio finished in', `${Date.now() - time}ms`)
