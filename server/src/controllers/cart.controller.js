const Cart = require("../models/cart.model")
const Product = require("../models/product.model")


const getCart = async (req, res) => {
  try {
    console.log(req.user)
    const cart = await Cart.findOne({ uid: req.user.uid })
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" })
    }
    
    const products = await Product.find({ _id: { $in: cart.products } })
    return res.status(200).json({ message: "Cart found.", cart, products })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const addToCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ uid: req.user.uid })
    if (!cart) {
      cart= new Cart({ uid: req.user.uid, products: [req.body.products] })
      await cart.save()
      return res.status(201).json({ message: "Added to cart.", cart })
    }
    
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


module.exports = { getCart, addToCart }
