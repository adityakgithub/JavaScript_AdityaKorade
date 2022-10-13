function function1() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const square = (number) => {
    return number * number
  }
  const squares = numbers.map(square)
  console.log(squares)
}

// function1()

function function2() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const squares = numbers.map((number) => {
    return number * number
  })
  console.log(squares)

  const cubes = numbers.map((number) => {
    return number * number * number
  })
  console.log(cubes)
}

// function2()

function function3() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const evens = numbers.filter((number) => {
    return number % 2 == 0
  })
  console.log(evens)

  const odds = numbers.filter((number) => {
    return number % 2 != 0
  })
  console.log(odds)
}

function3()