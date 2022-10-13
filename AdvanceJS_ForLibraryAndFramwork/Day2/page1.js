function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    // to process every value
    const squares = numbers.map((number) => {
      return number * number
    })
    console.log(numbers)
    console.log(squares)
  }
  
  // function1()
  
  function function2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
    // used to get the values based on criteria
    const evens = numbers.filter((number) => {
      return number % 2 == 0
    })
    console.log(numbers)
    console.log(evens)
  }
  
  function2()

