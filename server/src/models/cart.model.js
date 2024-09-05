const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema(
  {
    uid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]
  }, { timestamps:true}
)

const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart