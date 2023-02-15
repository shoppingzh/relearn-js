function find(arr, callback) {
  for (let i = 0, len = arr.length;i < len;i++) {
    if (callback(arr[i])) return arr[i]
  }
}

const arr = [1, 2, 3, 4, 5]
const arr2 = [{ name: 'zxp' }, { name: 'Jack' }, { name: 'Lily' }]

console.log(arr.find(o => o > 3))
console.log(arr2.find(o => o.name === 'zxp'))
console.log(arr2.find(o => o.name === 'Jan'))

console.log('====================')

console.log(find(arr, o => o > 3))
console.log(find(arr2, o => o.name === 'zxp'))
console.log(find(arr2, o => o.name === 'Jan'))
