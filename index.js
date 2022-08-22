const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    console.log("line6");
    console.log(req.url);
    res.send('<h1>microservice2!</h1>');
});

app.get('/microservice2', (req, res) => {
    console.log("line12");
    console.log(req.url);
    res.send('<h1>microservice2r!</h1>');
});


app.get('/v2', (req, res) => {
    console.log("line13");
    console.log(req.url);
    res.send('<h1>microservicev22!</h1>');
});

app.get('v2', (req, res) => {
    console.log(req.url);
    res.send('<h1>microserviceV2!</h1>');
});


app.get('/microservicev2', (req, res) => {
    console.log(req.url);
    res.send('<h1>microservicex2!</h1>');
});

app.get('microservicev2', (req, res) => {
    console.log(req.url);
    res.send('<h1>microserviceX2!</h1>');
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});