function function1() {

  // array of numbers
  const numbers = [10, 20, 30, 40, 50]
  console.log(numbers)
  console.log(`type of numbers = ${typeof(numbers)}`)

  // array of strings
  const countries = ["india", "usa", "uk"]
  console.log(countries)
  console.log(`type of countries = ${typeof(countries)}`)

  // array of objects [JSON]
  const persons = [
    { "name": "person1", age: 40 },
    { "name": "person2", age: 20 }
  ]

  console.log(persons)
  console.log(`type of persons = ${typeof(persons)}`)
}

function1()


function add(p1, p2) {
  console.log(`addition = ${p1 + p2}`)
}

function execute(func) {
  // func = add
  console.log('inside execute')
  func(10, 20)
}
execute(add)