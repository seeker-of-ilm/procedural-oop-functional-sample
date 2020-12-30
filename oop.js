class Product {
  constructor(id, name, price, stock) {
    this.id = id 
    this.name = name
    this.price = price 
    this.stock = stock
  }

  reductStock(qty) {
    this.stock = this.stock - qty
  }
}

class Cart {
  constructor (product, qty) {
    this.product = product
    this.qty = qty
    this.totalPrice = product.price * qty
  }
}

class Transaction {
  constructor() {
    this.carts = []
  }

  addToCart(product, qty) {
    const newCart = new Cart(product, qty)
    this.carts.push(newCart)
  }

  checkout() {
    for (let i = 0; i < this.carts.length; i++) {
      let product = this.carts[i].product
      let qty = this.carts[i].qty
      
      product.reductStock(qty)
    }
  }

  totalCartPrice() {
    let sum = 0

    for (let i = 0; i < this.carts.length; i++) {
      sum = sum + this.carts[i].price
    }
  
    return sum
  }
}