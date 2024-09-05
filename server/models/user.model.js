const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  }, { timestamps:true}
)

userSchema.pre('save', async (next) => {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})

export const User = mongoose.model("User", userSchema)