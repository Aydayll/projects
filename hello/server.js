const fs = require('fs')
const http = require('http')

const ayday = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html')
    fs.readFile('./views/index.html', (err, data)=>{
        res.statusCode = 404
        res.write(data)
        res.end()
    })
})
ayday.listen(2000, 'localhost', (error)=>{
    console.log('It works')
})