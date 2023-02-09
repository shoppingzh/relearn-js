// for...in特点：迭代可枚举属性，包含原型链上的

const Person = {
  say() {
    console.log(`Hi, my name is ${this.name}`)
  }
}

const p = Object.create(Person)
p.name = 'zxp'
Object.defineProperty(p, 'age', {
  value: 10,
  enumerable: false,
})

for (const key in p) {
  console.log(key)
}
