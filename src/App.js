const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv');
const EnergyData = require('./model')

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
dotenv.config()
const port = process.env.PORT || 5000;
const mongouri = process.env.mongoURI
// console.log(mongouri);

mongoose.connect("mongodb+srv://surajkales111:Suraj011@cluster0.2dopugv.mongodb.net/black-Coffer",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log('Connected to database');
})
app.listen(port, () => console.log("Server started on " + port));

app.post('/postdata', async(req,res)=>{
    try {
        let response = await EnergyData.insertMany(req.body);
        console.log(req.body);
        res.status(201).json(response);
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get('/getData', async(req,res)=>{
    let response = await EnergyData.find();
    // console.log(response.length)
    res.status(201).json(response)
})