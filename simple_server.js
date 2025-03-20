const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8090;

const server = http.createServer((req, res) => {
    const clientIP = req.socket.remoteAddress;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Received request from ${clientIP} for ${req.url}`);
    console.log('Request headers:', req.headers);
    
    if (req.url === '/' || req.url === '/index.html') {
        // Serve the test.html file
        fs.readFile(path.join(__dirname, 'test.html'), (err, data) => {
            if (err) {
                console.error(`Error reading test.html: ${err.message}`);
                res.writeHead(500);
                res.end(`Error loading test.html: ${err.message}`);
                return;
            }
            
            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            });
            res.end(data);
        });
    } else if (req.url === '/info') {
        // Return some JSON information
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({
            server: 'Simple Node.js HTTP Server',
            time: new Date().toISOString(),
            clientIp: clientIP,
            headers: req.headers
        }, null, 2));
    } else {
        // 404 for any other path
        console.log(`404 Not Found: ${req.url}`);
        res.writeHead(404);
        res.end('Not found');
    }
});

// Handle server errors
server.on('error', (err) => {
    console.error('Server error:', err);
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Try a different port.`);
    } else {
        console.error(`Server error: ${err.message}`);
    }
    process.exit(1);
});

// Handle client connection errors
server.on('connection', (socket) => {
    console.log(`New connection from ${socket.remoteAddress}`);
    
    socket.on('error', (err) => {
        console.error(`Socket error for ${socket.remoteAddress}:`, err);
    });
    
    socket.on('close', () => {
        console.log(`Connection closed from ${socket.remoteAddress}`);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Simple test server running at http://0.0.0.0:${PORT}/`);
    console.log('Press Ctrl+C to stop the server');
    console.log('Server IP address:', require('os').networkInterfaces());
}); 