const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.render('index',{header_data:""})
})

route.get('/about',(req,res)=>{
    res.render('about',{header_data:"| About"})
})

route.get('/portfolio',(req,res)=>{
    res.render('portfolio',{header_data:"| Portfolio"})
})

route.get('/contacts',(req,res)=>{
    res.render('contacts',{header_data:"| Contacts"})
})

route.get('/trainingDevelopment',(req,res)=>{
    res.render('trainingDevelopment',{header_data:"| Training & Development"})
})

route.get('/blog',(req,res)=>{
    res.render('blog',{header_data:"| Blog"})
})

route.get('*',(req,res)=>{
    res.render('error',{header_data:"| 404 Error"})
})

module.exports = route