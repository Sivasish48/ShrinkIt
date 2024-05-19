const {nanoid} = require("nanoid")
async function handleGenerateShortUrl(req,res){
    const body = req.body

    if(!body.url){
        return res.status(400).json({error:"ulr is required"})
    }

    const shortId = nanoid(8)

    await URL.create({
        shortId: shortId, 
        redirectUrl: body.url,
        visitHistory: []
    })


    res.json({ id:shortId})   
}  

module.exports ={
    handleGenerateShortUrl
} 