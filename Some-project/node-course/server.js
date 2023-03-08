const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });
    greet(); 
// set header content type
      res.setHeader('content-Type', 'text/html');

    // res.write('<p>hello, imen</p>');
    // res.end();
    let path = './views/';
    switch (req.url){
        case '/':
            path +='index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            path += 'about.html';
            res.statusCode = 301;
            res.setHeader('location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
//send an html file
fs.readFile(path, (err, data) => {
    if (err) {
        console.log(err);
        res.end();
    } else {
        res.statusCode = 200;
        res.end(data);
    } 
})
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});

