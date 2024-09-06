
const User = require("../models/user.model")
const { genToken } = require("../utils/auth")
const bcrypt = require("bcryptjs")


const signup = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    const token = genToken(user)
    return res.status(201).json({ message: 'User registered successfully', user, token })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(404).json({ message: 'User not found or Invalid email.' })
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password.' })
    }
    const token = genToken(user)
    res.cookie('auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    })
    return res.json({ message: 'User logged in successfully', token, user })
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
}

module.exports = { signup, login }