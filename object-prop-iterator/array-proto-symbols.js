// ES6之前获取数组原型下的所有属性
Object.getOwnPropertyNames(Array.prototype).forEach(propName => {
  console.log(propName)
})

Object.getOwnPropertySymbols(Array.prototype).forEach(symbolName => {
  console.log(symbolName)
})
