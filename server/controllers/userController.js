const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const axios = require('axios');




const User = require('./../models/user');




const signinController = async(req,res) =>{
    if(req.body.tokenResponse){
        // console.log(req.body)
        const { access_token } = req.body.tokenResponse
        console.log(access_token)

        axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${access_token}`
            }
        }).then(async response => {
            const firstName = response.data.given_name;
            const lastName = response.data.family_name;
            const email = response.data.email;

            console.log({firstName,lastName,email})
        
        })
    }
    else{
        const { email, password } = req.body;

        try {
            const oldUser = await User.findOne({ email });

            if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

            const isPasswordCorrect = await bcrypt.compare(password,oldUser.password);

            if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

            const token =jwt.sign({ email: oldUser.email, id: oldUser._id }, process.env.JWT_SECRET, { expiresIn : '1d'});
            console.log(token)
            return res.status(200).json({ result: oldUser, token });

        } catch (error) {
            res.status(500).json({ message: "Something went wrong"});
        }
    } 
}; 




const signupController = async(req,res) => {
    if(req.body.tokenResponse){
        // console.log(req.body)
        const { access_token } = req.body.tokenResponse
        console.log(access_token)

        axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${access_token}`
            }
        }).then(async response => {
            const firstName = response.data.given_name;
            const lastName = response.data.family_name;
            const email = response.data.email;

            console.log({firstName,lastName,email})

            const oldUser = await User.findOne({ email });

            if (oldUser){

                const token = jwt.sign( { email: oldUser.email, id: oldUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" } );

                res.status(201).json({ oldUser, token });
                console.log(token)
            }
            else{
                const result = await User.create({ email, firstName, lastName });

                const token = jwt.sign( { email: result.email, id: result._id }, process.env.JWT_SECRET, { expiresIn: "1d" } );
                
                console.log(token)
                res.status(201).json({ result, token });
            }
        
        })
    }
    else{
        const { email, password, firstName, lastName } = req.body;

        try {
            const oldUser = await User.findOne({ email });

            if (oldUser) return res.status(400).json({ message: "User already exists" });

            const hashedPassword = await bcrypt.hash(password, 12);

            const result = await User.create({ email, password: hashedPassword, firstName, lastName});

            const token = jwt.sign( { email: result.email, id: result._id }, process.env.JWT_SECRET, { expiresIn: "1d" } );
            console.log(token)
            res.status(201).json({ result, token });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong" });
            
            console.log(error);
        }
    }    
};




module.exports = { signinController, signupController };