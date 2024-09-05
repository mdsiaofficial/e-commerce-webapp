const jwt = require('jsonwebtoken')
const secretkey = 'zaq1xsw2cde3vfr4bgt5nhy6mju7ki8lo9p0'

export const genToken = (user) => {
  return jwt.sign({ uid: user._id }, secretkey, { expiresIn: '1h' })
  
}

export const verifyToken = (token) => {
  return jwt.verify(token, secretkey)
}