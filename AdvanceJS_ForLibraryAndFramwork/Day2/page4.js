// create object using constructor function


// constructor function
function Person(name, age, email) {
  this.name = name
  this.email = email
  this.age = age

  // this.canVote = function() {
  //   if (this.age >= 18) {
  //     console.log(`${this.name} is eligible for voting`)
  //   } else {
  //     console.log(`${this.name} is NOT eligible for voting`)
  //   }
  // }
}

/* 
  If you take a look at online documentation, you will often see String.prototype.toString(). 
  Why is there a prototype? This is covered in-depth later in this course. For now, 
  every time you see String.prototype.something(), 
  it means there is a method something() that you can call on a String.
*/
Person.prototype.canVote = function() {
  if (this.age >= 18) {
    console.log(`${this.name} is eligible for voting`)
  } else {
    console.log(`${this.name} is NOT eligible for voting`)
  }
}

const p1 = new Person('person1', 40, 'person1@test.com')
console.log(p1)
console.log('' + p1)
console.log(p1.toString())
// p1.canVote = function() {
//   if (this.age >= 18) {
//     console.log(`${this.name} is eligible for voting`)
//   } else {
//     console.log(`${this.name} is NOT eligible for voting`)
//   }
// }

p1.canVote()

const p2 = new Person('person2', 20, 'person2@test.com')
console.log(p2)
console.log(`${p2}`)
console.log(p2.toString())
// p2.canVote = function() {
//   if (this.age >= 18) {
//     console.log(`${this.name} is eligible for voting`)
//   } else {
//     console.log(`${this.name} is NOT eligible for voting`)
//   }
// }
p2.canVote()
// p2.printDetails()

