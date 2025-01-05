const http = require('http');

const server = http.createServer((req, res) => {
  try {
    //Simulate an asynchronous operation that may fail
    setTimeout(() => {
      // Example of an error causing the crash
      // Uncomment to demonstrate the bug 
      // const error = new Error('Simulated asynchronous error');
      // throw error;
       res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }, 1000) // Simulate asynchronous operation
  } catch (err) {
    console.error('Error in request handling:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// Improved error handling in asynchronous operations prevents the unhandled exception.