const express = require("express")
const app = express()
require("dotenv").config()

const{connectionToMongoDb} = require("./connect")

const urlRoute =require ("./routes/urlRouter")

 
const PORT = process.env._port
//console.log(PORT);




connectionToMongoDb()


app.use("/url",urlRoute)
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
}) 