const{nanoid}= require("nanoid")

async function handleGenerateShortUrl(req,res){
    if(!body.url){
        return res.status(400).json({error:"ulr is required"})
    }

    const shortId = nanoid()

    
} 