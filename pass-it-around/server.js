const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of Beer on the Wall</h1>`);
});

app.get("/beer/:num", (req, res) => {
    const num = parseInt(req.params.num);
    const nextNum = num - 1;
    if (num !== 0) {
        res.send(`<h2>${num} Bottles of Beer on the Wall! <br /> 
        <a href="/beer/${nextNum}">Take one down, pass it around...${nextNum}</a> </h2>`);
    } else {
        res.send(`<h2>There are no more Bottles of Beer on the Wall! Go home, you're drunk! </h2>
        <a href="/beer/99">Would you like to play again?</a>`);
    }
});


app.listen(3000);