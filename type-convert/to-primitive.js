const o = {
  toString() {
    return {}
  },
  valueOf() {
    return 1
  }
}

const foo = o + 1
console.log(foo) // 2

const o2 = {
  toString() {
    return {}
  },
  valueOf() {
    return {}
  }
}
const bar = o2 + 1
console.log(bar) // TypeError
