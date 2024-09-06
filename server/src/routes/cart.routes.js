const express = require('express')
const authenticate = require('../middleware/auth.middleware')
const { getCart } = require('../controllers/cart.controller')
const cartRouter = express.Router()

cartRouter.use(authenticate)

cartRouter.get('/', getCart)
// cartRouter.post('/', )

module.exports = { cartRouter }