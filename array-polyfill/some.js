function some(arr, callback) {
  for (let i = 0, len = arr.length;i < len;i++) {
    if (callback(arr[i])) return true
  }
  return false
}

const arr = [1, 2, 3]

console.log(arr.some(o => o < 2))
console.log([].some(o => o > 2))

console.log('==============')

console.log(some(arr, o => o < 2))
console.log(some([], o => o > 2))
