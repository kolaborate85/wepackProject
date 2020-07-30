var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios')
const dotenv = require('dotenv')
const { O_DIRECT } = require('constants')
const cors = require('cors')
dotenv.config()




const app = express()
app.use(cors())

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/process', async function (req, res) {
    console.log(req.query.text)
    url=process.env.API_ENDPOINT+'?key='+process.env.API_KEY+'&lang=en&model=general&txt=';
    try{
        result = await axios.post(url+req.query.text)
        return res.json(result.data).status(200);
    }
    catch(error)
    {
        res.json(error)
    }

    
})


// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

