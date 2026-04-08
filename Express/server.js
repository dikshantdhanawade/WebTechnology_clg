const express = require('express');   // import express
const app = express();                // create app
              // create express app
const PORT = 3000;                    // server port

// Middleware
app.use((req, res, next) => {
    console.log("Request received from client");
    next(); // go to next step
});

// Route 1
app.get('/', (req, res) => {
    res.send("Welcome to my first Express Server!");
});

app.get('/about', (req, res) => {
    res.send("This is About Page");
});

// Route 3
app.get('/contact', (req, res) => {
    res.send("Contact us at example@gmail.com");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
