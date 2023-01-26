// 绑定词法作用域
function getFunc() {

  return () => {
    console.log(this.name)
  }
}


getFunc.call({ name: 'zxp' })()

// 无arguments
const func2 = () => {
  console.log(arguments)
}

func2()



