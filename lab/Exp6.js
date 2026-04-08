const express = require('express');
const app = express();

const PORT = 3000;

app.get('/user/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id}`);
});

app.get('/order/:userId/:orderId', (req, res) => {
    res.json({
        userId: req.params.userId,
        orderId: req.params.orderId
    });
});

app.get('/search/:category/:item', (req, res) => {
    res.send(`Category: ${req.params.category}, Item: ${req.params.item}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});