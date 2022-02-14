const express = require('express')
const route = express.Router()

route.get('/CloudComputing',(req,res)=>{
    res.render('tnd/cloudComputing',{header_data:"| Cloud Computing"})
})

route.get('/Cybersecurity',(req,res)=>{
    res.render('tnd/cybersecurity',{header_data:"| Cybersecurity"})
})

route.get('/Networking',(req,res)=>{
    res.render('tnd/networking',{header_data:"| Networking"})
})

route.get('/ProjectManagment',(req,res)=>{
    res.render('tnd/projectManagment',{header_data:"| Project Managment"})
})

route.get('*',(req,res)=>{
    res.render('error',{header_data:"| 404 Error"})
})

module.exports = route