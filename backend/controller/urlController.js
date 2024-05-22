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



async function handleClicksAnalytics(req,res){
    const shortId = req.params.shortId

   let result =  await URL.findOne({shortId})
    
   return res.json({totalclicks: result.visitHistory.length , analytics:result.visitHistory})
}
module.exports ={
    handleGenerateShortUrl,
    handleClicksAnalytics
} 