const {nanoid} = require("nanoid")
const URL = require("../models/urlModel")
async function handleGenerateShortUrl(req,res){
    const body = req.body

    if(!body.url){
        return res.status(400).json({error:"ulr is required"})
    }

    const shortId = nanoid(4)

    await URL.create({
        shortId: shortId, 
        redirectUrl: body.url,
        visitHistory: []
    })


    res.json({ id:shortId})   
}  


async function handleClicksAnalytics(req, res) {
    const shortId = req.params.shortId;
  
    try {
      let result = await URL.findOne({ shortId });
  
      if (!result) {
        // If no URL with the specified shortId is found
        return res.status(404).json({ error: "URL not found" });
      }
  
      // Check if result has redirectUrl (optional, depending on your needs)
      if (!result.redirectUrl) {
        return res.status(404).json({ error: "Redirect URL not found" });
      }
  
      // If result is found, return analytics data
      return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
      });
    } catch (error) {
      console.error("Error fetching analytics:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
async function handleForAllUrls(req,res){
    const urls = await URL.find({})
    const result = urls.map(url =>({
        originalUrl: url.redirectUrl,
        shortUrl: `${req.protocol}://${req.get('host')}/${url.shortId}`,
        dateCreated: url.createdAt,
        totalClicks: url.visitHistory.length
    }))
    res.json(result)
}
module.exports ={
    handleGenerateShortUrl,
    handleClicksAnalytics,
    handleForAllUrls
} 