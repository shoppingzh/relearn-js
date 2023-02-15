function findIndex(arr, callback) {
  for (let i = 0, len = arr.length;i < len;i++) {
    if (callback(arr[i])) return i
  }
  return -1
}

const arr = [1, 2, 3, 4, 5]
const arr2 = [{ name: 'zxp' }, { name: 'Jack' }, { name: 'Lily' }]

console.log(arr.findIndex(o => o > 3))
console.log(arr2.findIndex(o => o.name === 'zxp'))
console.log(arr2.findIndex(o => o.name === 'Jan'))

console.log('====================')

console.log(findIndex(arr, o => o > 3))
console.log(findIndex(arr2, o => o.name === 'zxp'))
console.log(findIndex(arr2, o => o.name === 'Jan'))
