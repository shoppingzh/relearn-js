console.log(1)

setTimeout(() => {
  console.log(2)
})

new Promise((resolve) => {
  console.log(3)

  setTimeout(() => {
    console.log(4)
  })

  resolve()
}).then(() => {
  console.log(5)
})

console.log(6)

// 1 3 6 5 2 4
