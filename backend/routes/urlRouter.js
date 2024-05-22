const express= require("express")
const { handleGenerateShortUrl,handleClicksAnalytics } = require("../controller/urlController")

const router = express.Router()

router.post("/", handleGenerateShortUrl)

router.get("/analytics/:shortId", handleClicksAnalytics)
 

module.exports = router