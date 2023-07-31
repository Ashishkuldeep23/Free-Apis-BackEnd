
const axios = require("axios")



// // // ------------------------------ Everything ---------------------------------------

async function everything (req, res){
    
    const Api_key = process.env.API_KEY1

    // const {page , category , pageSize , country} = req.query     // // // All valid queries are:

    

    let {q = "ISRO" , from = "" , to = ""  , pageSize = 20 , page = 1 , sortBy="publishedAt"} = req.query

   

    // console.log(req.query)

    const options = {
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}&page=${page}&sortBy=${sortBy}&apiKey=${Api_key}`,
    };


    try {
        const response = await axios.request(options);
        // console.log(response.data);

        if(response.data.status === "ok" && response.data.articles.length === 0){
            return res.status(400).send({ status: true,message : "Invalid Query"});
        }

        res.status(200).send({ status: true , totalGot : response.data.articles.length , data : response.data });

    } catch (error) {
        let axiosMessage = error.response.data.message
        // console.log(error.response.data.message)
        res.status(500).send({ status: false, message : error.message , axiosMessage : axiosMessage });
    }

}




// // // ------------------------------ Top HeadLines ---------------------------------------

async function topHeadlines(req, res) {

    const Api_key = process.env.API_KEY1

    // const {page , category , pageSize , country} = req.query     // // // All valid queries are:

    let {page = 1 , category = "" , pageSize = 20 , country , sortBy="publishedAt" } = req.query

    // console.log(req.query)

    const options = {
        method: "GET",
        url: `https://newsapi.org/v2/top-headlines?country=${country || "in"}&sortBy=${sortBy}&page=${page}&category=${category}&pageSize=${pageSize}&apiKey=${Api_key}`,
    };


    try {
        const response = await axios.request(options);
        // console.log(response.data);

        if(response.data.status === "ok" && response.data.articles.length === 0){
            return res.status(400).send({ status: true,message : "Invalid Query"});
        }

        res.status(200).send({ status: true , totalGot : response.data.articles.length , data : response.data });

    } catch (error) {

        let axiosMessage = error.response.data.message
        // console.log(error.response.data.message)
        res.status(500).send({ status: false, message : error.message , axiosMessage : axiosMessage });

    }


}


module.exports = {everything ,  topHeadlines }