

const express = require('express')
const { getProducts, addProduct, getProductById } = require('../controllers/product.controller')
const productRouter = express.Router()

productRouter.get('/', getProducts)
productRouter.post('/', addProduct)
productRouter.get('/:pid', getProductById)

module.exports = { productRouter }