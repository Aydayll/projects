const express = require('express')
const _= require('lodash')
const ejs = require('ejs')
const app = express()
console.log(ejs)
// const number= Math.floor(Math.random()*100)
// const num
app.get('/', (req, res)=>{
    res.sendFile('./views/index.html', { root: __dirname });
})
app.get('/about', (req, res)=>{
   res.sendFile('./views/about.html', { root: __dirname })
})
app.get('/about-me', (req, res)=>{
    res.redirect('/about')
})
app.use((req, res)=>{
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})
app.listen(5001, ()=>{
    console.log('it works')
})