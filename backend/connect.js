const mongoose = require("mongoose")
require("dotenv").config()


const url = process.env._MONGO_URL
async function connectionToMongoDb(url){
     return mongoose.connect(url)
}

module.exports = {
    connectionToMongoDb
}