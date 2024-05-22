const express = require("express")
const app = express()
require("dotenv").config()


const{connectionToMongoDb} = require("./connect")

app.use(express.json())
const urlRoute =require ("./routes/urlRouter")

 
const PORT = process.env._port
//console.log(PORT);




connectionToMongoDb(process.env._MONGO_URL)
.then(()=>{
    console.log(`Mongo Db connected`);
})


app.use("/url",urlRoute)
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`); 
})  