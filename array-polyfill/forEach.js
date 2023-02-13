function forEach(arr, callback) {
  for (let i = 0, len = arr.length;i < len;i++) {
    callback(arr[i], i, arr)
  }
}

const arr = [1, 2, 3, 4, 5]

arr.forEach((o, index) => {
  console.log(`${o} - ${index}`)
})

console.log('======== polyfill ==========')

forEach(arr, (o, index) => {
  console.log(`${o} - ${index}`)
})
