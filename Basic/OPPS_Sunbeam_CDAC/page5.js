function Mobile(model, company, price) {
  this.model = model
  this.company = company
  this.price = price
}

// Mobile is overriding the toString function
Mobile.prototype.toString = function() {
  return `Mobile [ model: ${this.model}, company: ${this.company}, price: ${this.price}]`
}

Mobile.prototype.canAfford = function() {
  if (this.price >= 30000) {
    console.log(`${this.model} is NOT affordable`)
  } else {
    console.log(`${this.model} is affordable`)
  }
}

const m1 = new Mobile('iPhone XS Max', 'Apple', 144000)
// m1 is overriding the toString function
// m1.toString = function() {
//   return "from m1"
// }

const m2 = new Mobile('Note Pro 5', 'Xiomi', 15000)

const m3 = new Mobile('z10', 'BlackBerry', 43000)

// console.log(m1)

// console.log('' + m1)
// console.log('' + m2)
// console.log('' + m3)

m1.canAfford()
m2.canAfford()
m3.canAfford()