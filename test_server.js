// Simple HTTP server to test mobile access
const http = require('http');

const hostname = '0.0.0.0'; // Listen on all network interfaces
const port = 8080;

const server = http.createServer((req, res) => {
  console.log(`Received request from ${req.socket.remoteAddress} for ${req.url}`);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Test Server</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        h1 {
          color: #4CAF50;
        }
        .success {
          background-color: #e9f7ef;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Test Server Working!</h1>
        <div class="success">
          <p><strong>Success!</strong> If you can see this page, it means your device can connect to this server.</p>
          <p>This is a simple test server running on port 8080.</p>
          <p>Your IP address: ${req.socket.remoteAddress}</p>
          <p>Requested URL: ${req.url}</p>
        </div>
        <p>Now try accessing the Next.js server at: <a href="http://192.168.0.25:3051">http://192.168.0.25:3051</a></p>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Test server running at http://${hostname}:${port}/`);
  console.log('Press Ctrl+C to stop the server');
}); 