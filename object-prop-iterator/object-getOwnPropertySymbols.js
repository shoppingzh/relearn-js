const Person = {
  [Symbol('isHuman')]: true,
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
p[Symbol('gender')] = 'male'

Object.getOwnPropertySymbols(p).forEach(symbol => {
  console.log(symbol) // Symbol(gender)
})
