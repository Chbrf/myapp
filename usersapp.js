const express = require('express');
const addingusers = require('./addinguser');
const login = require('./login');
app = express();
app.use(express.json());

app.post('/submit',async (req, res) => {
    try{
    const {username,password} = req.body;
    newuser = new addingusers(username,password);
    const result =await newuser.adduser()
     res.send(result)}
    catch(err){
        console.log(err)
        }
})

app.post('/login',async (req, res) => {
    try{
        const {username,password} = req.body;
        newlogin = new login(username,password)
        const result = await newlogin.loginuser()
        res.send(result)
    }
    catch(err){
console.log(err)
    }
})




app.listen(1212);
