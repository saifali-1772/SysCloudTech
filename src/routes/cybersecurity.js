const express = require('express')
const route = express.Router()

route.get('/comptiaItf',(req,res)=>{
    res.render('comptiaitf',{header_data:"| Comptia Itf+"})
})

route.get('*',(req,res)=>{
    res.render('error',{header_data:"| 404 Error"})
})

module.exports = route