// Server for Module 7: Online Discussion Assignment
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/home') {
        res.writeHead(200);
        res.end('Welcome to Home Page');
    } else {
        res.writeHead(404);
        res.end('Page Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
