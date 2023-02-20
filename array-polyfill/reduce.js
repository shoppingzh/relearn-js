function reduce(arr, callback, initialValue) {
  let reduceValue = initialValue
  for (let i = 0, len = arr.length;i < len;i++) {
    reduceValue = callback(reduceValue, arr[i], i, arr)
  }
  return reduceValue
}

const arr = [1, 2, 3]

console.log(arr.reduce((sum, o) => sum + o, 10))

console.log('=========== polyfill ============')

console.log(reduce(arr, (sum, o) => sum + o, 10))
