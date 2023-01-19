//Default object info,warn,error,log
    console.info('hello informational message')
    console.warn('hello warning message')
    console.error('hello error message')
    console.log('hello log message')

console.log("-----------*---------")

//Varibale let,var,const

    let firstName1 = "steve"
        
    console.log('firstName = ' + firstName1)
        
    // variable declaration
    let salary1 = 10.60
        console.log('before salary = ' + salary1)

        // updating the value
        salary = 12.50
        console.log('after salary = ' + salary)

    // variable delcaration
    let age = 40

        // updating the value
        age = 41

    // constant declaration
    const pi = 3.14
        console.log('pi = ' + pi)
        // pi value can not be changed
    // pi = 100

console.log("-----------*---------")

// Data types supported in JavaScript
 
    // number
        // 1.Int 
            let num = 100
            console.log('num = ' + num)
            console.log('data type of num = ' + typeof(num))
  
        // 2.Float
            let salary2 = 10.50
            console.log('salary = ' + salary2)
            console.log('data type of salary = ' + typeof(salary2))
        //Method
          //1.num.toString()
        //
  
    // string
        // 1.
            let firstName2 = 'steve'
            console.log('firstName = ' + firstName2)
            console.log('data type of firstName = ' + typeof(firstName2))
  
        // 2.
            let lastName2 = "Jobs"
            console.log('lastName = ' + lastName2)
            console.log('data type of lastName = ' + typeof(lastName2))
  
        // 3.
            let address = `
                address line 1, 
                address line 2,
                address line 3
            `
            console.log('address = ' + address)
            console.log('data type of address = ' + typeof(address))
        
        // 4.String Interpolation
        let num2 = "100"
        console.log(`num2 =${num2}`)
        console.log(`data type of num =${typeof(num2)}` )

        //Example
            //1.
            function getCharCount(str) {
                let a= str.length
                let b= str.toUpperCase()
                let c= str.toLowerCase()
                return a+b+c;
            }
            // Sample usage - do not modify
            console.log(getCharCount("Sam"));
            //2.
            const language = "JavaScript";

            language[0];
            language[language.length-1]
            language.at(0); // "J"
            language.at(1); // "a"
            language.at(-1); // "t"
            language.at(-2); // "p"
            language.substring(1, 4); //"ava"
            language.substring(4); //"Script"
        //
        //Method
            //1."string".toLowerCase()
            //2."abc".toUpperCase()
            //3."string".substring(startingPosition,EndPositionnext)
            //4."string".trim()
            //5."string".startWith()
            //6."string".endsWith()
            //7."string".includes()
            //8."string".split("thingbywhicharryagetsplit")
            //9."string".replace("Replacething")
            //10."string".replaceAll("Replacething")

        //

    // boolean
        let canVote = false
        console.log('canVote = ' + canVote)
        console.log('data type of canVote = ' + typeof(canVote))
  
    // undefined
        let myvar
        console.log('myvar = ' + myvar)
        console.log('data type of myvar = ' + typeof(myvar))


console.log("-----------*---------")

// Operator
    // Addition/Behavior of varible int & string while concatinating
        const addnum1 = 10
        const addnum2 = 20

        const addstr1 = "test1"
        const addstr2 = "test2"

        const addstrNum1 = "30"
        const addstrNum2 = "50"

        // 10 + 20 = 30
        console.log(`${addnum1} + ${addnum2} = ${addnum1 + addnum2}`)

        // "test1" + "test2" = "test1test2"
        console.log(`${addstr1} + ${addstr2} = ${addstr1 + addstr2}`)

        // 10 + "30" = "1030"
        console.log(`${addnum1} + ${addstrNum1} = ${addnum1 + addstrNum1}`)

        // 20 + "50" = "2050"
        console.log(`${addnum2} + ${addstrNum2} = ${addnum2 + addstrNum2}`)

        // 10 + 20 + "30"
        // 30 + "30" = 3030
        console.log(`${addnum1} + ${addnum2} + ${addstrNum1} = ${addnum1 + addnum2 + addstrNum1}`)

        // 10 + 20 + "30" + 10 + 20
        // 30 + "30" + 10 + 20
        // "3030" + 10 + 20
        // "303010" + 20
        // "30301020"
        console.log(`${addnum1} + ${addnum2} + ${addstrNum1} + ${addnum1} + ${addnum2} = ${addnum1 + addnum2 
            + addstrNum1 + addnum1 + addnum2 }`)
    console.log("_____________")

    // multiplication,division & behavior in above
        const mulnum1 = 10
        const mulnum2 = 20

        const mulstr1 = "test1"
        const mulstr2 = "test2"

        const mulstrNum1 = "30"
        const mulstrNum2 = "50"

        // 10 * 20 = 200
        console.log(`${mulnum1} * ${mulnum2} = ${mulnum1 * mulnum2}`)

        // test1 * test2 = ...
        const multiplication = mulstr1 * mulstr2
        console.log(`${mulstr1} * ${mulstr2} = ${multiplication}`)
        console.log(`data type of multiplication = ${typeof(multiplication)}`)

        // "30" * "50" = 1500
        // "30" and "50" will get converted to number 30 and number 50
        console.log(`${mulstrNum1} * ${mulstrNum2} = ${mulstrNum1 * mulstrNum2}`)
        

        // 10 / 20 = 0.5
        console.log(`${mulnum1} / ${mulnum2} = ${mulnum1 / mulnum2}`)

        // test1 / test2 = NaN
        console.log(`${mulstr1} / ${mulstr2} = ${mulstr1 / mulstr2}`)

        // '30' / '50' = 0.6
        // "30" and "50" will get converted to number 30 and number 50
        console.log(`${mulstrNum1} / ${mulstrNum2} = ${mulstrNum1 / mulstrNum2}`)

        // Infinity
        console.log(`10 / 0 = ${10 / 0}`)
    
    console.log("_____________")

    // Relational Operator
            // number equality
                if (mulnum1 == mulnum2) {
                    console.log(`${mulnum1} == ${mulnum2}`)
                } else {
                    console.log(`${mulnum1} != ${mulnum2}`)
                }
        
            // string equality
                if (mulstr1 == mulstr2) {
                    console.log(`${mulstr1} == ${mulstr2}`)
                } else {
                    console.log(`${mulstr1} != ${mulstr2}`)
                }
        
            // comparing number and string
                if (mulnum1 == mulstrNum1) {
                    console.log(`${mulnum1} == ${mulstrNum1}`)
                } else {
                    console.log(`${mulnum1} != ${mulstrNum1}`)
                }
        
            // comparing number and string
                if (mulnum1 === mulstrNum1) {
                    console.log(`${mulnum1} === ${mulstrNum1}`)
                } else {
                    console.log(`${mulnum1} !== ${mulstrNum1}`)
                }
        
        
            // comparing number and string
                if (mulnum1 == mulstrNum2) {
                    console.log(`${mulnum1} == ${mulstrNum2}`)
                } else {
                    console.log(`${mulnum1} != ${mulstrNum2}`)
                }
        
            // comparing number and string
                if (mulnum1 === mulstrNum2) {
                    console.log(`${mulnum1} === ${mulstrNum2}`)
                } else {
                    console.log(`${mulnum1} !== ${mulstrNum2}`)
                }
    
    console.log("_____________")
    
    //Operator Presedence
        a = b = 5; // same as writing a = (b = 5);
        let a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
        let b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
        //
        let a1 = 1;
        let b2 = 2;
        typeof a1 + b2; // Equivalent to (typeof a1) + b; result is "number2"
        // binary operator OP2 must have lower precedence than the unary operator

        //Short-circuiting
            //console.log(a || console.log((b * c))); // evaluate `a` first, then produce `a` if `a` is "truthy"
            // console.log(a && console.log((b < c))); // evaluate `a` first, then produce `a` if `a` is "falsy"
            // console.log(a ?? console.log((b || c))); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
            // console.log(a ?? console.log((b && c)));
            // console.log(a ?? console.log((b , c)));
            // console.log(a ?? console.log((b < c)));
            // console.log(a?.b.c); // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
            
            //Function:
                // function A() { console.log('called A'); return false; }
                // function B() { console.log('called B'); return false; }
                // function C() { console.log('called C'); return true; }
                
                // console.log(C() || B() && A());//=> called C &&// true
                //console.log(A() && C() || B());//=> called A // called B // false   
        //End

        // Error
            //(-1) ** 2 =>-1 ** 2 Wrong 
            //3++ wrong
            //a++++ wrong
            
            //(a ?? b) || c or a ?? (b || c)=> correct
            //ia ?? b || c wrong
        //End

        // Presedence table
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence           
    console.log("_____________")

console.log("-----------*---------")

// Conversion
    const connum = 10
    const constr1 = "50"
    const constr2 = "test1"
    const constr3 = "145test"
    const constr4 = "1789test3"
    const constr5 = "60.70"

    // conversion of number to string
        let result = connum + ''
        console.log(`result = ${result}, type of result = ${typeof(result)}`)
    console.log("_____________")

    // conversion of string to a number

        result = parseInt(constr1)
        console.log(`result = ${result}, type of result = ${typeof(result)}`)

        result = parseInt(constr2)
        console.log(`result = ${result}, type of result = ${typeof(result)}`)

        result = parseInt(constr3)
        console.log(`result = ${result}, type of result = ${typeof(result)}`)

        result = parseInt(constr4)
        console.log(`result = ${result}, type of result = ${typeof(result)}`)

        result = parseInt(constr5)
        console.log(`result = ${result}, type of result = ${typeof(result)}`)

        console.log("parse float")


        result = parseFloat(constr1)
        console.log(`result = ${result}, type of result = ${typeof(result)}`)

        result = parseFloat(constr2)
        console.log(`result = ${result}, type of result = ${typeof(result)}`)

        result = parseFloat(constr3)
        console.log(`result = ${result}, type of result = ${typeof(result)}`)

        result = parseFloat(constr4)
        console.log(`result = ${result}, type of result = ${typeof(result)}`)

        result = parseFloat(constr5)
        console.log(`result = ${result}, type of result = ${typeof(result)}`)   

console.log("-----------*---------")

// Function
    // empty function
    function function0() {}

    // parameterless function declaration
    function function1() {
      console.log('inside function1')
    }

    // function call
    function1()
    console.log("_____________")

    // parameterized function declaration
    // void function2(int param) {}
    // function2("test");
    function function2(param) {
      // param = true
      console.log(`inside the function2`)
      console.log(`param = ${param}, type of param = ${typeof(param)}`)
    }

    function2(20)
    function2('test1')
    function2(true)

    console.log("_____________")

    function add(p1, p2) {
      const addition = p1 + p2
      console.log(`${p1} + ${p2} = ${p1 + p2}`)
    }

    // 30
    add(10, 20)

    // 1020
    add(10, '20')

    // 1020
    add('10', '20')

    console.log("_____________")

    // Default argument Function
        function multiply(num1, num2 = 20) {
            const multiplication = num1 * num2
            console.log(`multiplication = ${multiplication}`)
        }
    
        // num1 = 40, num2 = 100
        // multiply(40, 100)
    
        // num1 = 40, num2 = 20
        multiply(40)
    console.log("_____________")

    // Function calling
        function add(n1, n2) {
            console.log(`addition = ${n1 + n2}`)
        } 
      
        function subtract(n1, n2) {
            console.log(`subtraction = ${n1 - n2}`)
        }
      
        function divide(n1, n2) {
            console.log(`division = ${n1 / n2}`)
        }
      
        function multiply(n1, n2) {
            console.log(`multiplication = ${n1 * n2}`)
        }
      
        function remainder(p1, p2) {
            console.log(`remainder = ${p1 % p2}`)
        }
      
        function execute(func) {
            console.log('calling execute')
            func(10, 20)
            func(20, 30)
            func(30, 40)
            func(40, 50)
            func(50, 60)
            func(60, 70)
        }
      
        execute(add)
        execute(subtract)
        execute(multiply)
        execute(divide)
        execute(remainder)
    console.log("_____________")
    
    // Function alias
    // another name given to existing function
        const myFunction1 = function1
        console.log(myFunction1)
        console.log(`type of myFunction1 =${typeof(myFunction1)}`)

        // function1()
        // myFunction1()
    
        function function1(p1) {
            // p1 = myFunction2 or function2
            console.log('inside function1')
            console.log(p1)
            console.log(`type of p1 = ${typeof(p1)}`)
      
            console.log('calling p1')
            p1()
          }
      
          function function2() {
            console.log('inside function2')
          }
      
          // function alias
          // variable to a function
          const myFunction2 = function2
      
          // function2()
          // myFunction2()
      
          // undefined
          // function1()
      
          // number
          // function1(10)
      
          // string
          // function1("test")
      
          // boolean
          // function1(true)
      
          // function1(myFunction2)
      
          function1(function2)

        // function declaration
        function printHelloWorld() {
        console.log('hello world!!!')
        }
  
        // function call
        myFunction()
    
        // function declaration
        function myFunction() {
            console.log('inside myFunction')
        }
  
        // function alias
        const myFuctionVar = myFunction
    console.log("_____________")
     
    // variable length arguments function
        function add() {
            // console.log('inside add')
            console.log(arguments)
    
            let sum = 0
            for (let index = 0; index < arguments.length; index++) {
            sum += arguments[index]
            }
            console.log(`addition = ${sum}`)
        }
        
        // add(10, 20)
        // add(10, 20, 30)
        // add(10, 20, 30, 40)
        // add(10, 20, 30, 40, 50)
        // add(10, 20, 30, 40, 50, 60)
        // add(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
    console.log("_____________")

    

console.log("-----------*---------")

//Basic Of Collection
    /* 
    Method
        .filter() =>e.g 2,3,4,6-->[2,3,4,6].filter(EvenNumberCheckFunction)-->2,4,6(filter the each element & display the result)
        .find()   =>e.g 2,3,4,6-->[2,3,4,6].filter(EvenNumberfincFunction)-->2(Return first result of function)
        .map()    =>e.g 2,3,4,6-->[2,3,4,6].filter(EvenNumbercheckFunction)-->true,false,true,true(process the element & show result)
        .include()=>e.g 2,3,4,6-->[2,3,4,6].filter(EvenNumbercheckFunction)-->true,false,true,true(process the element & show result in boolean)
        .join()   => method returns a string of the array elements separated by the glue
        .reduce(function(total, currentValue, currentIndex, arr), initialValue)
    */
    //reduce example
        const redNumber=[2,3,4,5,6,7,8,9]
        redNumber.reduce(getsum,0);
        function getsum(total, num){ return total+num};
    //
    
    function function1() {
        // collection of numbers
        const numbers = [10, 20, 30, 40, 50, 60, 70, 80]

        console.log(numbers)

        // traditional for loop
        // for (let index = 0; index < numbers.length; index++) {
        //   console.log(`value at ${index} = ${numbers[index]}`)
        // }

        // properties
        // console.log(`length = ${numbers.length}`)

        // add a new value
        numbers.push(90)
        console.log(numbers)
    }

    function1()


    function function2() {
        // collection of strings
        const countries = ["india", "usa", "uk", "japan"]

        console.log(countries)

        // append China to the end of the collection
        countries.push("China")

        console.log(countries)

        // remove the last value of the collection

        countries.pop()

        console.log(countries)

    }

    function2()

    function function5() {
        const numbers = [10, 20, 30, 40, 50]
      
        // for..in loop
        for (const index in numbers) {
          console.log('index = ', index)
          console.log('value at index = ', numbers[index])
        }
      }
      
    // function5()

    function function4() {
        const countries = ['india', 'usa', 'uk', 'japan']
      
        //   for (let index = 0; index < countries.length; index++) {
        //     const country = countries[index]
        //     console.log('country = ', country)
        //   }
      
        for (const country of countries) {
          console.log('country -> ', country)
        }
      }
      
    // function4()

    function function1() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      
        // traditional for loop
        // for..of
        // for..in
      
        // forEach
        numbers.forEach((number) => {
          console.log(number)
        })
    }

    // Arrya Method
    // Push, Pop, splish
    // remove a value at an index
    // numbers.splice(1, 2)
    // console.log(numbers)

    //Arrya destructuring
        //oldOne
            const dimensions1 = [20, 5]

            // create variables
            const width1 = dimensions1[0];
            const height1 = dimensions1[1];
        //
        const dimensions2 = [20, 5]

        // create variables
        const [width, height] = dimensions2;//destructuring
    //
    //Array concatenation
        const lat = [5.234];
        const lng = [1.412];
        const point = [...lat, ...lng];
        console.log(point); // [5.234, 1.412];

        const items = ["Tissues", "Oranges"];

        const otherItems = [...items, "Tomatoes"];
        console.log(otherItems); // ["Tissues", "Oranges", "Tomatoes"]
    //

    //Optional Chaining
        const user = {
            details: {
                name: {
                    firstName: "Sam"
                }
            },
            data: null
        }
        
        user.details?.name?.firstName; // "Sam"
        user.data?.id; // undefined
        user.children?.names; // undefined
        user.details?.parent?.firstName; // undefined
    //

console.log("-----------*---------")

// Object 
    // - object literal (JSON)
        const objectEx={id:5,title:"adityaisPractisingJavascript",value:true}
        //Method
           const objectExKey=Object.keys(objectEx)//....return keys arrys["id","title","value"]
           //.entries
           //.values
        //
    // - using Object root function
        function function1() {
            // Object is a root function given by JS
            const person1 = new Object()
            person1.name = 'person1'
            person1.address = 'pune'
            person1.phone = '+9134343'
            console.log(person1)
        }
    // - using constructor function
            // by convention, the constructor function
            // always starts with upper case letter
        function Person(name, age, address) {
            this.name = name
            this.age = age
            this.address = address
        }
        
        const p1 = new Person('person1', 20, 'pune')
        console.log(p1)
    // - [using class]


console.log("-----------*---------")

// Arrya of Object 
    /*Knowing that tweets is an array, we can access properties on arrays (such as .length) and call array methods such as (.forEach(), .map(), etc.).  */
    const tweets = [
        {
            id: 1080777336298049537,
            message: "Hello Twitter 👋",
            created_at: "2020-01-03 11:46:00",
            author: {
                id: 109215315,
                firstName: "Jad",
                lastName: "Joubran",
                handle: "JoubranJad"
            }
        },
        {
            id: 1080777336298195435,
            message: "How do you keep track of your notes?",
            created_at: "2021-02-19 15:32:00",
            author: {
                id: 109216891,
                firstName: "Sam",
                lastName: "Green",
                handle: "SamGreen"
            }
        }
    ];
    tweets.forEach(tweet => {
        console.log(tweet);
    });
    tweets.forEach(tweet => {
        // console.log(tweet);
        console.log(tweet.author.handle);
    });
    
//   
console.log("-----------*---------")