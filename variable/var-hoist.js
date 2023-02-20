// 全局作用域
console.log(a)

var a = 1

// 函数作用域
function func() {
  console.log(b)
  var b = 2
}

func();

// 块级作用域
(function() {
  console.log(b)
  if (a) {
    var b = 3
  }
})()
