const express= require("express")
const { handleGenerateShortUrl } = require("../controller/urlController")

const router = express.Router()

router.post("/", handleGenerateShortUrl)
 

module.exports = router