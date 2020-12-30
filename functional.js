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

let carts = []

const getProduct = id => {
  return products.find(product => product.id === id)
}

const reductStock = (productId, qty) => {
  return products.map(product => {
    return product.id === productId ? {...product, stock: product.stock - qty } : product
  })
}

const totalCartPrice = () => {
  return carts.reduce((acc, cart) => { acc + cart.totalPrice }, 0)
}

const newIdCart = () => {
  return carts.length ? (carts[carts.length].id + 1) : 1
}

const getSubPrice = (productId, qty)  => {
  const product = getProduct(productId)
  return qty * product.price
}

const newCart = (productId, qty) => {
  return {
    id: newIdCart(),
    productId: productId,
    qty: qty,
    totalPrice: getSubPrice()
  }
}

const addToCart = (oldCarts, productId, qty) => {
  return [
    ...oldCarts,
    newCart(productId, qty)
  ]
}

