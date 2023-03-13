import { createServer } from "node:http";

const server = createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'application/json')
    const json = JSON.stringify({location : "Mars"});
    res.end(json)
})

server.listen(3000, () => {
    console.log("Runnato")
})