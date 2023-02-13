const arr = [1, 2, 3]


// 方法1：instanceOf
console.log(arr instanceof Array)

// 方法2：Object [[Class]]
console.log(Object.prototype.toString.call(arr) === '[object Array]')

// 方法3：ES6 Array.isArray
console.log(Array.isArray(arr))

// 构造函数无关
const o = Object.create(Array.prototype)
console.log(o instanceof Array)

const o2 = new Array()
console.log(o2 instanceof Array)
Object.setPrototypeOf(o2, Object.prototype)
console.log(o2 instanceof Array)
