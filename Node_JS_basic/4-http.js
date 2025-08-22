// Create a small HTTP server using the http module:
// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// Displays Hello Holberton School!
// In the page body for any endpoint as plain text

const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
});

app.listen(1245, () => {
    console.log('Server listening on port 1245');
});

module.exports = app;
