function *itTo(max) {
  for (let i = 0;i < max;i++) {
    yield i
  }
}

// const it = foo(10)

// let curr
// while ((curr = it.next())) {
//   if (curr.done) break
//   console.log(curr)
// }


for (const item of itTo(10)) {
  console.log(item)
}
