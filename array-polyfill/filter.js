function filter(arr, callback) {
  const newArr = []
  for (let i = 0, len = arr.length;i < len;i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr.filter(o => o % 2 === 0))
console.log(filter(arr, o => o % 2 === 0))
