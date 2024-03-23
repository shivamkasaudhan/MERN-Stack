const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbCOnnection');
const User = require('./db/user');

const cors = require('cors');

//middleware for json parse
app.use(express.json());
// enable cors
app.use(cors());

//registration 
app.post('/register' , async(req,res)=>{
    try{
        const {username,password}= req.body;
        console.log(req.body);
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'REGISTRATION SUCCESSFULL'});
    }catch(error){
        res.status(500).json({error:'Registration Failed'});

    }
});
app.post('/login',async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({error:'Invalid username or password'});
        }

        if(user.password !== password){
            return res.status(401).json({error:'Invalid username or password'})
        }

        res.status(200).json({message:'login successfull'});
    }catch(error){
        res.status(500).json({error:'Login failed'});
    }
});

connectDB();


app.listen(port,()=>{
    console.log('Server is listening on 8000')
});
