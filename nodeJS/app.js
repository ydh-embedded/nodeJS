"use strict"

// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response status code and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello World\n');
});

// Set the port number
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});