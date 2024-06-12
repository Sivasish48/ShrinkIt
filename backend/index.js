const express = require("express")
const app = express()
const URL = require("./models/urlModel")
const cors = require("cors")
require("dotenv").config()

app.use(cors())

const{connectionToMongoDb} = require("./connect")

app.use(express.json())
const urlRoute =require ("./routes/urlRouter")

 
//const PORT = process.env._port
//console.log(PORT);
const PORT = 5000



connectionToMongoDb("mongodb://localhost:27017/short-url")
.then(()=>{
    console.log(`Mongo Db connected`);
})


app.use("/url",urlRoute)

app.get("/:shortId", async (req,res)=>{
    const shortId = req.params.shortId

    const entry = await URL.findOneAndUpdate(
        {
        shortId
    },
      {
        $push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }
      })
      res.redirect(entry.redirectUrl)
})


app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`); 
})  