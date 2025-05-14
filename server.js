const express = require("express");
require("dotenv").config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/signup", async(req,res)=>{
    try {
        const {Username,Email,Password,DateOfBirth} = req.body;

        if(!Username){
            return res.status(400).json({message : "Username cannot be empty"});
        }
        if(!Email){
            return res.status(400).json({message : "Email cannot be empty"});
        }
        if(!Password || Password.length < 8 || Password.length > 16){
            return res.status(400).json({message : "Invalid Password or Password length should be greater than 8 or less than or equal to 16"});
        }

        res.status(201).json({Username,Email,Password,DateOfBirth});
    } catch (error) {
        console.error("Signup error",error);
        res.status(500).json({Error : "Signup failed"});
    }
})

app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));