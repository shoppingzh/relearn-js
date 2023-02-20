function join(arr, separator) {
  let result = ''
  for (let i = 0, len = arr.length;i < len;i++) {
    const str = arr[i] == null ? '' : String(arr[i])
    result += str
    if (i < len - 1) {
      result += separator
    }
  }
  return result
}

const arr = [
  undefined,
  null,
  true,
  false,
  0,
  Infinity,
  NaN,
  'hello',
  [1, 2, 3],
  {},
  new Date(),
]

console.log(arr.join('#'))

console.log('=========== polyfill ===============')

console.log(join(arr, '#'))
