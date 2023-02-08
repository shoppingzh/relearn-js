function Person(name) {
  this.name = name
}

Person.prototype.say = function() {
  console.log(`Hi, my name is ${this.name}`)
}

const p = new Person('zxp')
p.age = 18

const man = Object.create(p)
Object.defineProperty(man, '_gender', {
  enumerable: false,
})
man.work = function() {
  console.log('Man work')
}
man._gender = 'male'
man[Symbol('x')] = 1

// 1. for...in
console.log('======== 方法1 ========')
for (const key in man) {
  console.log(key)
}

// 2. Object.keys
console.log('======== 方法2 ========')
Object.keys(man).forEach(key => console.log(key))

// 3. Object.getOwnPropertyNames
console.log('======== 方法3 ========')
Object.getOwnPropertyNames(man).forEach(key => console.log(key))

// 4. Object.getOwnPropertySymbols
console.log('======== 方法4 ========')
Object.getOwnPropertySymbols(man).forEach(key => console.log(key))
