function run(generator, ...args) {
  const it = generator(...args)
  return new Promise((resolve, reject) => {
    function next(input) {
      const { done, value } = it.next(input)
      if (done) return resolve(value)

      // 注意，这里要返回一个新Promise
      return Promise.resolve(value).then(next).catch(err => {
        reject(err)
      })
    }
    next()
  })
}

function *req(val) {
  yield val
  return val
}

function *foo() {
  const a = yield *req(1)
  const b = yield *req(a + 1)
  const c = yield *req(b + 1)
  // throw new Error('error')
  yield c + 1

  return c + 1
}

run(foo).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
