function every(arr, callback) {
  for (let i = 0, len = arr.length;i < len;i++) {
    const pass = callback(arr[i])
    if (!pass) return false
  }
  return true
}

const arr = [1, 2, 3, 4, 5]

console.log(arr.every(o => o < 5))
console.log(arr.every(o => o < 6))
console.log([].every(o => o > 0))

console.log('====================')

console.log(every(arr, o => o < 5))
console.log(every(arr, o => o < 6))
console.log(every([], o => o > 0))
