
function isOdd(number) { return number % 2 !== 0 }
function isEven(number) { return number % 2 === 0 }
function square(number) { return Math.pow(number, 2) }
function cube(number) { return Math.pow(number, 3) }

function function1() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // square of odd numbers
  const odds = numbers.filter(isOdd)
  const squares = odds.map(square)

  // cube of even numbers
  const evens = numbers.filter(isEven)
  const cubes = evens.map(cube)

  console.log(squares)
  console.log(cubes)
}

// function1()

function canAfford(car) { return car['price'] < 10 }
function canNotAfford(car) { return car['price'] > 10 }

function getModelCompany(car) { return { model: car['model'], company: car['company'] } }
function getPrice(car) { return car['price'] }
// function getPrice(car) { return { price: car['price'] } }

function function2() {
  const cars = [
    { model: "i20", price: 7.5, company: "hyundai", color: "space gray"},
    { model: "nano", price: 2.5, company: "tata", color: "yellow"},
    { model: "x5", price: 35.5, company: "BMW", color: "dark blue"}
  ]

  // get model and company of affordable cars
  const affordableCars = cars.filter(canAfford)
  const newAffordableCars = affordableCars.map(getModelCompany)

  // get price of non-affordable cars
  const nonAffordableCars = cars.filter(canNotAfford)
  const newNonAffordableCars = nonAffordableCars.map(getPrice)

  console.log(newAffordableCars)
  console.log(newNonAffordableCars)
} 

// function2()



function function3() {
  const persons = [
    { name: "person1", email: "person1@test.com", age: 14 },
    { name: "person2", email: "person2@test.com", age: 45 },
    { name: "person3", email: "person3@test.com", age: 50 },
    { name: "person4", email: "person4@test.com", age: 16 }
  ]

  // get name and age of persons who can vote

  // get name and email of persons who can not vote
}