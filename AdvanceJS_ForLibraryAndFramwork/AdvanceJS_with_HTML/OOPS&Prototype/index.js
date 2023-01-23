/**
 * Constructor function
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 */
// class User{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     canVote(){
//         return this.age>=18;
//     }

//}

function User(firstName, lastName, age) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age
}

// This has to be a function (not an arrow function)
User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// This has to be a function (not an arrow function)
User.prototype.canVote = function() {
    return this.age>=18;
}

// Sample usage (do not modify)
const user = new User("Sam", "Blue", 43);
console.log(user.getFullName()); // "Sam Blue"
console.log(user.canVote()); // true
