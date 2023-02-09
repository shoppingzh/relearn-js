
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
Object.defineProperty(p, 'gender', {
  value: 'male',
  enumerable: true,
})

Object.keys(p).forEach(key => {
  console.log(key)
})
