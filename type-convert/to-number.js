[
  undefined,
  null,
  true,
  false,
  '123',
  'hello',
  123n,
  Symbol.iterator,
  Symbol('hello'),
  [],
  [1, 2],
  {},
  {
    valueOf() {
      return 123
    }
  }
].forEach(o => {
  try {
    console.log(`${o} -> ${Number(o)}`)
  } catch (err) {
    console.log('Error!')
  }
})
