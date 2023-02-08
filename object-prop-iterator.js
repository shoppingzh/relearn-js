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

console.log('========= 获取所有可枚举属性 =========')

function getAllEnumProperties(o) {
  const list = []
  for (const key in o) {
    list.push({
      name: key,
      isSelf: Object.hasOwn(o, key)
    })
  }
  return list
}

getAllEnumProperties(man).forEach(prop => {
  if (prop.isSelf) {
    console.log(`自身属性：${prop.name}`)
  } else {
    console.log(`来自原型的属性：${prop.name}`)
  }
})

console.log('========== 获取所有属性 ==========')

function getAllProperties(o) {
  if (!o) return []
  const protoList = [o]
  let proto = o
  while ((proto = Object.getPrototypeOf(proto))) {
    protoList.unshift(proto)
  }
  const props = {}
  const symbolProps = []
  for (const proto of protoList) {
    const isSelf = proto === o
    for (const propName of Object.getOwnPropertyNames(proto)) {
      const pd = Object.getOwnPropertyDescriptor(proto, propName)
      props[propName] = {
        name: propName,
        isEnumerable: pd.enumerable,
        isSelf,
        isSymbol: false,
      }
    }
    for (const symbolName of Object.getOwnPropertySymbols(proto)) {
      symbolProps.push({
        name: symbolName,
        isEnumerable: false,
        isSelf,
        isSymbol: true,
      })
    }
  }
  return [Object.values(props), ...symbolProps]
}

getAllProperties(man).forEach(prop => {
  console.log(prop)
})
