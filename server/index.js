const express = require('express')
const { authRouter } = require('./src/routes/auth.routes.js')
const database = require('./src/config/database.js')
const { productRouter } = require('./src/routes/product.routes.js')

const app = express()


app.use(express.json())

app.get('/', (req, res) => {
  res.json({message: "Home"})
})

app.use('/api/v1/auth/', authRouter)
app.use('/api/v1/products/', productRouter)
app.use('/api//v1/cart', cartRoutes)

database()
app.listen(3000, () => {
  console.log(`Server running on port 3000`)
})