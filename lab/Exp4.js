// Import http module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Routing
    if (req.url === "/") {
        res.write("<h1>Welcome to Tiny HTTP Server</h1>");
        res.write("<p>This is Home Page</p>");
    }
    else if (req.url === "/about") {
        res.write("<h1>About Page</h1>");
        res.write("<p>This server is built using Node.js</p>");
    }
    else if (req.url === "/contact") {
        res.write("<h1>Contact Page</h1>");
        res.write("<p>Email: example@gmail.com</p>");
    }
    else {
        res.write("<h1>404 - Page Not Found</h1>");
    }

    // End response
    res.end();
});

// Define port
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});