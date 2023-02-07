const person = {
  say() {
    console.log(`Hi, my name is ${this.name}`)
  }
}

const p = Object.create(person)
p.name = 'Jack'

console.log(p)
p.say()

// polyfill 1
function objectCreate(proto) {
  const o = {}
  Object.setPrototypeOf(o, proto)
  return o
}

const p2 = objectCreate(person)
p2.name = 'Lily'

console.log(p2)
p2.say()

// polyfill 2
function objectCreate2(proto) {
  function F() {}
  F.prototype = proto
  return new F()
}

const p3 = objectCreate2(person)
p3.name = 'Bob'

console.log(p3)
p3.say()

// null test
const o1 = Object.create(null)
const o2 = objectCreate(null)
const o3 = objectCreate2(null)

console.log('toString' in o1)
console.log('toString' in o2)
console.log('toString' in o3)
