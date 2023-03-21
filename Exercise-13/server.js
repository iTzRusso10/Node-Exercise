const Express = require('express');

const app = Express();

app.get("GET /", (req,res) => {
    res.send({name: "Giuseppe"})
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})