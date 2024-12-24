const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app=express()
const PORT = config.get('PORT')

const start = ()=>{
    try{
        mongoose.connect(config.get('DB_URL'), { useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, ()=>{
            console.log('It works', PORT);
        })
    } catch(err){}
}
start()