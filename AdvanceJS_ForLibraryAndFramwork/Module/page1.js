function add(p1, p2) {
  const result = p1 + p2
  console.log(`addition = ${result}`)
}

function divide(p1, p2) {
  const result = p1 / p2
  console.log(`division = ${result}`)
}

function subtract(p1, p2) {
  const result = p1 - p2
  console.log(`subtraction = ${result}`)
}

function multiply(p1, p2) {
  const result = p1 * p2
  console.log(`multiplication = ${result}`)
}

console.log('this is in page1 module')

// add(10, 30)
// divide(100, 20)
// subtract(40, 20)
// multiply(23, 23)

// let num = 100
// num = 400

// export a function named add
// module.exports = add
// module.exports = divide

module.exports = {
  add: add,
  divide: divide,
  subtract: subtract,
  multiply: multiply
}

// const pi = 3.14
// module.exports = pi

//console.log(module)