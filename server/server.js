const express = require('express');
const openai = require('openai');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()
const app =express()


app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send('Hi there!')
})

app.listen(PORT)