const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv');

dotenv.config();

const openai = new OpenAIApi(
    new Configuration({
        apiKey : process.env.OPENAI_API_KEY,
    })
)


const openaiController = async (req,res)=>{
    try{
        const { userInput } = req.body;
        console.log(userInput);
        
        const response = await openai.createChatCompletion({
            model : "gpt-3.5-turbo",
            prompt :`Give me the summary of ${userInput}`,
            max_tokens: 100,
            temperature: 0,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        })

        return res.status(200).json({
            success : true,
            data : response.data.choices[0].text,
        })
    }catch(error){
        return res.status(400).json({
            success : false,
            data : error.response.data,
        })
    }

}

module.exports = openaiController;