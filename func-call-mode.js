/* 函数调用模式 */


// 硬绑定需要注意的问题
// 优先级高于隐性绑定
function foo() {
  console.log(this.a)
}
const bindFoo = foo.bind({ a: 1 })

const o = {
  a: 2,
  foo: bindFoo
}

o.foo() // 1
