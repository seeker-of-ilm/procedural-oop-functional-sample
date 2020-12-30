const products =  [
  {
    id: 1,
    name: "Sepatu Adidas",
    stock: 20,
    price: 500000
  },
  {
    id: 2,
    name: "Nike",
    stock: 26,
    price: 700000
  }
]

const carts = []

function getProduct(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i]
    }
  }
}

function totalCartPrice() {
  let sum = 0

  for (let i = 0; i < carts.length; i++) {
    sum = sum + carts[i].price
  }

  return sum
}


function addToCart(productId, qty) {
  const newId = carts.length ? carts[carts.length - 1] + 1 : 1
  const product = getProduct(productId)


  // add new cart
  carts.push({
    id: newId,
    productId: productId,
    qty: qty,
    totalPrice: qty * product.price
  })

  // reduct product
  product.stock = product.stock - qty
  
  totalCartPrice()
}
















function supplyNewProduct(name, price = 100, stock = 1) {
  const newId = products.length ? products[products.length - 1] + 1 : 1

  products.push({
    id: newId,
    name: name,
    stock: stock,
    price: price
  })
}