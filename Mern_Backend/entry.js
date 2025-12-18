const express = require('express');
const mdb=require('mongoose');
const app=express();
const PORT=8001;

// Middleware to parse JSON
app.use(express.json());
mdb.connect('mongodb://localhost:27017/MERNh').then(()=>{
    console.log("Mongodb connection successfull")
}).catch((err)=>{
    console.log("Mongodb connection unsuccessful",err)
})
app.get('/',(req,res)=>{
    res.send("Welcome to backend server")
})
app.get('/json',(req,res)=>{
    res.json({
     "college":"sece",
     "Dept":"Cys",
     "StuCount":"64"
    })  
})
app.get('/static',(req,res)=>{
   res.sendFile('"C:\Users\dhara\OneDrive\Desktop\MERN DAY_7\seceBackend2025Dec\Index.html"')
    })

app.get('/signup',(req, res)=>{
    res.send("Signup page - Use POST method to submit signup data")
})

app.post('/signup',(req, res)=>{
    const{email,username,password} = req.body;
    console.log('Received signup data:', {email, username, password});
    res.json({"Message":"Signup successful", "data": {email, username}})
})

app.listen(PORT,()=>{
    console.log('Server is running on port ${PORT}')
})