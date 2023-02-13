const arr = [1, 2, 3]

// 方法1：instanceOf
console.log(arr instanceof Array)

// 方法2：Object [[Class]]
console.log(Object.prototype.toString.call(arr) === '[object Array]')

// 方法3：ES6 Array.isArray
console.log(Array.isArray(arr))

