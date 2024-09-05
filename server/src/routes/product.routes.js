

const express = require('express')
const { getProducts, addProduct } = require('../controllers/product.controller')
const productRouter = express.Router()

productRouter.get('/', getProducts)
productRouter.post('/', addProduct)

module.exports = { productRouter }