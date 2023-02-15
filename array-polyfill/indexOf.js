function indexOf(arr, item) {
  for (let i = 0, len = arr.length;i < len;i++) {
    if (arr[i] === item) return i
  }
  return -1
}

const arr = [1, 2, 3, 4, 5]
const zxp = { name: 'zxp' }
const arr2 = [zxp, { name: 'Jack' }, { name: 'Lily' }]

console.log(arr.indexOf(3))
console.log(arr2.indexOf({ name: 'zxp' }))
console.log(arr2.indexOf(zxp))

console.log('====================')

console.log(indexOf(arr, 3))
console.log(indexOf(arr2, { name: 'zxp' }))
console.log(indexOf(arr2, zxp))
