const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hey!");
});

app.get("/amanda", (req, res) => {
    res.send('<h1>Hi from Amanda</h1>');
})

app.get('/greeting', (req, res) => {
    res.send(`What up fam!`)
});

app.get('/greeting/:name', (req, res) => {
    console.log(req.params.name);
    res.send(`What up ${req.params.name}!`)
});

app.listen(3000);