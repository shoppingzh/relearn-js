function reduceRight(arr, callback, initialValue) {
  let reduceValue = initialValue
  for (let i = arr.length - 1;i >= 0;i--) {
    reduceValue = callback(reduceValue, arr[i], i, arr)
  }
  return reduceValue
}

const arr = [1, 2, 3]

console.log(arr.reduceRight((sum, o) => sum + o, 10))

console.log('=========== polyfill ============')

console.log(reduceRight(arr, (sum, o) => sum + o, 10))
