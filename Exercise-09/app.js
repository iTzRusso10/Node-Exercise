const {createServer} = require('http');

const createApp = () => {
    const server = createServer((req, res) => {
        console.log('ricevuto')
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<html><body><h1>Welcome to iTzRussoServer</h1></body></html>");
    });
    return server;
}   

    
module.exports = createApp;