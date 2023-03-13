import { createServer } from 'node:http'

const server = createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Benvenuto da iTzRusso</h1></body></html>');

})

server.listen(3000, () => {
    console.log('Server runnato qui: http://localhost:3000')
})

