// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean

const values = [
  undefined,
  false,
  true,
  '',
  'hello',
  100,
  0,
  -0,
  100n,
  0n,
  {},
  [],
  [1, 2, 3],
]
values.forEach(val => {
  try {
    console.log(`${val} -> ${Boolean(val)}`)
  } catch (err) {
    console.error(`${val} convert error`)
  }
})
