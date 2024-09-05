const mongoose = require('mongoose')
const dburl = "mongodb+srv://mdsiaofficial:ecom@ecom-webapp.pa5qk.mongodb.net/ecomdb?retryWrites=true&w=majority&appName=ecom-webapp"

function database () {

  mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  mongoose.connection.on('error', (error) => {
    console.error('MongoDB error: ', error);
    
  })
  
  mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB")
  })
  
}

module.exports = database