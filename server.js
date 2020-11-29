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

app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.send(`<h1>The answer is ${sum}</h1>`)
});

app.get('/tip/:sum1/:sum2', (req, res) => {
    const sum1 = parseInt(req.params.sum1);
    const sum2 = parseInt(req.params.sum2);
    const sum3 = (sum1 * sum2)/100;
    res.send(`<h1>The answer is ${sum3}</h1>`)
});

app.get('/magic/:question', (req, res) => {
    const question = req.params.question;

    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    
    let randomResponse = [Math.floor(Math.random()*responses.length)];
    
    res.send(`<h1>${question}? The Magic 8 Ball says: ${responses[randomResponse]}</h1>`);
});

app.listen(3000);