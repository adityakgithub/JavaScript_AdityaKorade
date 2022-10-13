// find the even numbers from the collection

function function1() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number % 2 == 0) {
      console.log('even number')
    } else {
      console.log('odd number')
    }
  }
}

// function1()

function function2() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number % 2 == 0) {
      console.log(number)
    }
  }
}

// function2()

function function3() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const evens = []
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number % 2 == 0) {
      evens.push(number)
    }
  }

  console.log(numbers)
  console.log(evens)
}

// function3()


function isEven(number) {
  return number % 2 == 0
}

function function4() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const evens = []
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (isEven(number)) {
      evens.push(number)
    }
  }

  console.log(numbers)
  console.log(evens)
}

// function4()


function isOdd(number) {
  return number % 2 != 0
}

function function5() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const even = numbers.map(isEven)
  const evens = numbers.filter(isEven)
  const odds = numbers.filter(isOdd)
  console.log(numbers)
  console.log(evens)
  console.log(even)
  console.log(odds)

}

//function5()

function canAfford(car) {
  return car['price'] < 10
}

function function6() {
  const cars = [
    { model: "i20", price: 7.5, company: "hyundai", color: "space gray"},
    { model: "nano", price: 2.5, company: "tata", color: "yellow"},
    { model: "x5", price: 35.5, company: "BMW", color: "dark blue"}
  ]

  // price < 10
  const affordableCars = cars.filter(canAfford)
  console.log(cars)
  console.log(affordableCars)
}

// function6()


function canVote(person) {
  return person['age'] >= 18
}

function function7() {
  const persons = [
    { name: "person1", email: "person1@test.com", age: 14 },
    { name: "person2", email: "person2@test.com", age: 45 },
    { name: "person3", email: "person3@test.com", age: 50 },
    { name: "person4", email: "person4@test.com", age: 16 }
  ]

  const newPersons = persons.filter(canVote)
  console.log(persons)
  console.log(`The eligible persons to vote =`)
  console.log(newPersons)
}

function7()