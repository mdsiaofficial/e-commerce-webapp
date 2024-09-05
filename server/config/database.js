const mongoose = require('mongoose')
const dburl = 'mongodb://localhost:27017/ecdb'

mongoose.connect(dburl {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('error', (error) => {
  console.error('MongoDB error: ', error);
  
})

mongoose.connection.once('open', () => {
  console.log("Connected to MongoDB")
})

module.exports = mongoose