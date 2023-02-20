// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring

const values = [
  undefined,
  null,
  true,
  false,
  +0,
  -0,
  Infinity,
  -Infinity,
  NaN,
  Symbol.iterator,
  Symbol('hello'),
  {
    toString() {
      return 'plain object'
    }
  },
  [1, 2, 3],
  {
    toString() {
      return {}
    }
  }
]
values.forEach(val => {
  try {
    console.log(`${val} -> ${String(val)}`)
  } catch (err) {
    console.error(`${val} convert error`)
  }
})
