const { verifyToken } = require("../utils/auth")


const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.auth
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' })
    }
    const decode = verifyToken(token)
    req.user = decode
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token is not valid' })
  }
}

module.exports = authenticate