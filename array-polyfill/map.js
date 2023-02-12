function map(arr, callback) {
  const newArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    newArr.push(callback(arr[i], i, arr))
  }
  return newArr
}

const arr = [1, 2, 3, 4, 5]

console.log(arr.map(o => Math.pow(o, 2)))

console.log('=========== polyfill ============')

console.log(map(arr, (o) => Math.pow(o, 2)))

