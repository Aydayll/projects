const express = require('express')
const mongoose = require('mongoose')

const app = express()

const dbURL = `mongodb+srv://atabek:1234@cluster0.frgar.mongodb.net/jwt?retryWrites=true&w=majority`

app.set('view engine', 'ejs')

mongoose
.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology:true})
.then((result)=>app.listen(3001))
.catch((error)=>console.log(error))

app.get('/', (req, res)=>{
    res.render('pages/index')
})