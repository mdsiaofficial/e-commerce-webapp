const express = require('express')

const cartRouter = express.Router()

cartRouter.get('/', getProducts)
cartRouter.post('/', addProduct)

module.exports = { cartRouter }