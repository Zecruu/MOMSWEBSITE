import http.server
import socketserver
import socket
import json
from datetime import datetime

PORT = 8000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        client_ip = self.client_address[0]
        timestamp = datetime.now().isoformat()
        print(f"[{timestamp}] Received request from {client_ip} for {self.path}")
        print("Request headers:", self.headers)
        
        if self.path == '/info':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            info = {
                'server': 'Simple Python HTTP Server',
                'time': datetime.now().isoformat(),
                'client_ip': client_ip,
                'headers': dict(self.headers),
                'server_port': PORT
            }
            
            self.wfile.write(json.dumps(info, indent=2).encode())
        else:
            return http.server.SimpleHTTPRequestHandler.do_GET(self)

# Print all available IP addresses
print("Available network interfaces:")
hostname = socket.gethostname()
print(f"Hostname: {hostname}")

try:
    # Get all IP addresses
    host_ip = socket.gethostbyname_ex(hostname)
    print(f"IP addresses: {host_ip[2]}")
    
    for ip in host_ip[2]:
        if not ip.startswith('127.'):  # Skip localhost
            print(f"Try accessing from your mobile device at: http://{ip}:{PORT}/")
    
except Exception as e:
    print(f"Error getting IP addresses: {e}")

# Create server
handler = MyHandler
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("0.0.0.0", PORT), handler) as httpd:
    print(f"Python HTTP Server running at http://0.0.0.0:{PORT}/")
    print("Press Ctrl+C to stop the server")
    httpd.serve_forever() 