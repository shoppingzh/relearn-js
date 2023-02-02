function foo() {
  var a = 1
  console.log(a)
  bar()
}

function bar() {
  const b = 2
  console.log(b2)
  console.log(b)
  const baz = () => {
    let c = 3
    console.log(c)
  }
  const b2 = 1
  if (b) {
    var b3 = 2
    ;(function() {
      var b4 = 3
    })();
    {
      var b5 = 4
    }
  }
  baz()
}

foo()

// let/const也会发生声明提升，不能访问时因为这些变量进入了“暂时性死区”状态
