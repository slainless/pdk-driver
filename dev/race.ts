import { setTimeout } from 'timers/promises'

let flag = false
let state: Promise<void> | null = null

async function test() {
  if (flag === false) {
    flag = true
    console.log('only one process is running...')
    state = new Promise<void>((res) => {
      setTimeout(3000).then((_) => {
        res()
      })
    }).finally(() => {
      state = null
    })
  }

  if (state == null)
    throw new Error('something is wrong with the implementation')

  console.log('waiting for the process')
  await state
}

Promise.all([test(), test(), test()]).then((_) => console.log('finished'))
