const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const openaiRoute = require('./routes/openaiRoute')

dotenv.config()
const app =express()


app.use(cors({origin:'*'}))
app.use(express.json())
app.use('/api',openaiRoute)


const PORT = process.env.PORT || 5000;


app.get('/', (req,res)=>{
    res.send('Hi there!')
})



app.listen(PORT);