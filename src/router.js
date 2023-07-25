const router = require("express").Router()

const {everything ,  topHeadlines} = require("./controller/NEWSacController")


router.get("/" , function (req , res){
    res.status(200).send({status : true , message : "Free Api's present for FrontEnd in react"})
})


// // // Free NEWSac Api's --------->

router.get("/newsac/everything" , everything)       // // // Everything is used in serch box ------->


router.get("/newsac/top-headlines" , topHeadlines)       // // // top-headlines is used in show as display on first load------->


router.get("/*" , (req , res)=>{
    res.status(404).send({status : false , message : `Invalid Endpoint '${req._parsedUrl.pathname}'. Check github of this project`})
})




module.exports = router