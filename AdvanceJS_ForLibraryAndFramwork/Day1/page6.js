// named function
function function1() {
  console.log('inside function1')
}

// function1()

// function alias
const myFunction1 = function1
// myFunction1()


// function alias
// unnamed/anonymous function
const myFunction2 = function() {
  console.log('inside function2')
}
// myFunction2()


// function alias
// unnamed/anonymous/arrow function
const myFunction3 = () => {
  console.log('inside function 3')
}
// myFunction3()


// anonymous function
const square = function(number) {
  console.log(`square = ${number * number}`)
}

// square(2)
// square(3)
// square(4)

// arrow function
const cube = (number) => {
  console.log(`cube = ${number * number * number}`)
}

// cube(2)
// cube(3)
// cube(4)

// closure
(() => {
  console.log("inside anonymous function")
})()