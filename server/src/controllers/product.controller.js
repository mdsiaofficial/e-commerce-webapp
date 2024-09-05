const Product = require("../models/product.model")


const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    if (!products) return res.status(404).json({ message: "Products not found" })

    return res.status(200).json({ message: "Products found.", products })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save()
      .then(() => {
        return res.status(201).json({ message: "Product added successfully", product })
      })
      .catch((err) => {
        return res.status(400).json({ message: err.message })
      })
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

module.exports = { getProducts, addProduct }