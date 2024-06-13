const express= require("express")
const { handleGenerateShortUrl,handleClicksAnalytics, handleForAllUrls} = require("../controller/urlController")

const router = express.Router()

router.post("/", handleGenerateShortUrl)

router.get("/analytics/:shortId", handleClicksAnalytics)
 
router.get("/analytics/all", handleForAllUrls)

module.exports = router