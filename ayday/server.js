const fs = require('fs'); //filesystem
const http = require('http') //http protokol

const mirlan = http.createServer((req, res) => {
    let path = './views';

    switch (req.url) {
        case '/': {
            path += '/index.html'
            res.statusCode =200
            break
        }
        case '/about': {
            path += '/about.html'
            res.statusCode =200
            break
        }
        case '/about-me': {
            res.statusCode = 301
            res.setHeader('Location' , '/about')
            res.end()
            break
        }
        default: {
            path += '/404.html'
            res.statusCode = 404
        }
    }

    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error)
            res.end()
        }
        res.end(data)
    });

});
// app.get('/about', (req, res) => {
//     fs.readFile('./views/about.html', (error, data) => {
//         res.send(data.toString())
//     });

// });
// app.get('/ayday', (req, res) => {
//     fs.readFile('./ayday.json', (error, data) => {
//         const ayday = data.toString()
//         const atabek = JSON.parse(ayday)
//         res.send(atabek)
//     });

// });


mirlan.listen(3007, () => {
    console.log('it works at 3007 server');
});