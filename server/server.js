const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()
const app =express()


app.use(cors({origin:'*'}))
app.use(express.json())


const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send('Hi there!')
})

app.post('/api/processText', async (req,res)=>{
    const { userInput } = req.body;
    console.log(userInput)
})

app.listen(PORT)