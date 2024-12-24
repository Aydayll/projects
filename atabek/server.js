const http = require('http')
const fs = require('fs')

const ayday = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.path, req.statusCode)
    res.setHeader('Content-Type', 'text/html')
    res.write('Hello, Ayday')
    res.end()
})

ayday.listen(1000, 'localhost', () => {
    console.log('Helooo')
})