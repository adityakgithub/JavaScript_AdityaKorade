// create object using Object

function function1() {
  // reference p1 will point to an object
  // create an empty object
  const p1 = new Object()
  console.log(p1)
}

//function1()

function function2() {
  // create a new object
  const p1 = new Object()

  // add the properties 
  p1.name = 'person1'
  p1.email = 'person1@test.com'
  p1.age = 40

  console.log(p1)

  const m1 = new Object()
  m1.model = 'iPhone XS Max'
  m1.company = 'Apple'
  m1.price = 144000
  console.log(m1)

  const c1 = new Object()
  c1['model'] = 'i20'
  c1['company'] = 'hyundai'
  c1.price = 7.5
  console.log(c1)
}

//function2()

function printDetails() {
  console.log(`name: ${this.name}`)
  console.log(`age: ${this.age}`)
  console.log(`email: ${this.email}`)
}

function function3() {
  const p1 = new Object()
  p1.name = 'person1'
  p1.email = 'person1@test.com'
  p1.age = 40
  console.log(p1)
  p1.printDetails = printDetails
  p1.printDetails()

  const p2 = new Object()
  p2.name = 'person2'
  p2.email = 'person2@test.com'
  p2.age = 30
  p2.printDetails = printDetails
  
  console.log(p2)
  p2.printDetails()

}

function3()