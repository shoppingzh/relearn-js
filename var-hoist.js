// 全局作用域
console.log(a)

var a = 1

// 函数作用域
function func() {
  console.log(b)
  var b = 2
}

func()

// 
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  })
}

// 
for (var i = 0; i < 10; i++) {
  
}
console.log(i) // 10


// 
;(function() {
  if (a) {
    console.log(b)
    var b = 3
  }
})();
