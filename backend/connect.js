const mongoose = require("mongoose")
//require("dotenv").config()



async function connectionToMongoDb(url){
     return mongoose.connect(url)
}

module.exports = {
    connectionToMongoDb
}