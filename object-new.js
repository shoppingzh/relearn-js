function Person(name) {
  this.name = name
}

Person.prototype.say = function() {
  console.log(`Hi, my name is ${this.name}`)
}

// new polyfill
function newObject(Constructor, ...args) {
  const o = {}
  Object.setPrototypeOf(o, Constructor.prototype)
  const result = Constructor.apply(o, args)
  return (result && typeof result === 'object') ? result : o
}

const p1 = new Person('zxp')
const p2 = newObject(Person, 'zxp')

p1.say()
p2.say()
