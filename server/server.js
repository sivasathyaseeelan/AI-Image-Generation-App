const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

const openaiRoute = require('./routes/openaiRoute');
const userRoute = require('./routes/userRoute');

dotenv.config();
const app =express();


app.use(cors({origin:'*'}));
app.use(express.json());


app.use('/api',openaiRoute);
app.use('/user',userRoute);


const PORT = process.env.PORT || 5000;
const MONGOOSE_URL = process.env.MONGO_URL;


app.get('/', (req,res)=>{
    res.send('Hi there!')
});



mongoose.connect(MONGOOSE_URL,{useNewUrlParser: true})
.then(()=>app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
}))
.catch(err=>{
    console.log(err)
});