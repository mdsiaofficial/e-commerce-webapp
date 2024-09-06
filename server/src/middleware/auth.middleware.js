const { verifyToken } = require("../utils/auth")


const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.auth
    console.log(token)
    // if (!token) {
    //   return res.status(401).json({ message: 'No token, authorization denied' })
    // }
    const decode = verifyToken(token)
    console.log(decode)
    req.user = decode
    console.log(req.user)
    next()
  } catch (error) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }
}

module.exports = authenticate