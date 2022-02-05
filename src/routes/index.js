const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.render('index')
})

route.get('/about',(req,res)=>{
    res.render('about')
})

route.get('/portfolio',(req,res)=>{
    res.render('portfolio')
})

route.get('/contacts',(req,res)=>{
    res.render('contacts')
})

route.get('/blog',(req,res)=>{
    res.render('blog')
})

module.exports = route