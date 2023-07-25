const express = require("express")
const router = require("./src/router")
require("dotenv").config()

const app = express()



// // // Below for handle CORS Policy error --------->
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*" );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});






app.use("/" , router)


const PORT = 3000
app.listen(PORT , ()=>{
    console.log(`Express app Runing at ${PORT}`)
})