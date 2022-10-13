// square of every number present in the numbers collection

function function1() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index]
    const square = number * number
    console.log(`square of ${number} = ${square}`)
  }
}

// function1()


function function2() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const squares = []
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    squares.push(number * number)  
  }

  console.log(numbers)
  console.log(squares)
}

// function2()

function square(p1) {
  return p1 * p1
}

function function3() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const squares = []
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    const numSquare = square(number)
    squares.push(numSquare)
  }

  console.log(numbers)
  console.log(squares)
}

// function3()

function function4() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const squares = numbers.map(square)

  console.log(numbers)
  console.log(squares)
}

// function4()


function cube(number) {
  // return number * number * numer
  return Math.pow(number, 3)
}

function function5() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const cubes = numbers.map(cube)

  console.log(numbers)
  console.log(cubes)
}

// function5()


function celcius(temp) {
  return (temp - 32) * (5/9)
}

function function6() {
  const temperatures = [97, 95, 96, 97, 98, 95]
  const celciusTemperatures = temperatures.map(celcius)
  console.log(temperatures)
  console.log(celciusTemperatures)
}

// function6()

function convertCar(car) {
  // construct a new object with model and company keys
  return { model: car["model"], company: car["company"] }
}

function function7() {
  const cars = [
    { model: "i20", price: 7.5, company: "hyundai", color: "space gray"},
    { model: "nano", price: 2.5, company: "tata", color: "yellow"},
    { model: "x5", price: 35.5, company: "BMW", color: "dark blue"}
  ]

  const newCars = cars.map(convertCar)
  console.log(cars)
  console.log(newCars)
}

// function7()

function convertPerson(person) {
  return { name: person['name'], age: person['age']}
}

function function8() {
  const persons = [
    { name: "person1", email: "person1@test.com", age: 40 },
    { name: "person2", email: "person2@test.com", age: 45 },
    { name: "person3", email: "person3@test.com", age: 50 },
    { name: "person4", email: "person4@test.com", age: 46 }
  ]

  const newPersons = persons.map(convertPerson)
  console.log(persons)
  console.log(newPersons)
}

function8()
