// 函数提升

console.log(foo)

function foo() {
  console.log(1)
}

console.log(foo)

var foo = 1

console.log(foo)
