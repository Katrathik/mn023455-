const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')
const QueryModel = require('./models/Query')

const app = express()
app.set('view engine', 'ejs');
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/emp")

app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("no record exists")
        }
    })
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})
app.get("/samyak",(req, res)=>{
    return res.status(200).json({message:"Running Successfully"})
})
app.post('/home',(req,res)=>{
    QueryModel.create(req.body)
    .then(queries => res.json(queries))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running");

})