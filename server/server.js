const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const moongose = require('mongoose');

const openaiRoute = require('./routes/openaiRoute');

dotenv.config();
const app =express();


app.use(cors({origin:'*'}));
app.use(express.json());


app.use('/api',openaiRoute);


const PORT = process.env.PORT || 5000;
const MOONGOSE_URL = process.env.MONGO_URL;


app.get('/', (req,res)=>{
    res.send('Hi there!')
});



moongose.connect(MOONGOSE_URL,{useNewUrlParser: true})
.then(()=>app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
}))
.catch(err=>{
    console.log(err)
});