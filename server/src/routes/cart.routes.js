const express = require('express')
const authenticate = require('../middleware/auth.middleware')
const { getCart, addToCart } = require('../controllers/cart.controller')
const cartRouter = express.Router()

cartRouter.use(authenticate)

cartRouter.get('/', getCart)
cartRouter.post('/', addToCart)

module.exports = { cartRouter }