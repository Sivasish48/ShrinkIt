const express = require("express")
const app = express()
 require("dotenv").config()


const PORT = process.env._port
//console.log(PORT);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})