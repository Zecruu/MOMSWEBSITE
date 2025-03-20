# PowerShell script to check if port 3051 is open and accessible

$ip = "192.168.0.25"
$port = 3051

Write-Host "Checking if port $port is open on $ip..."

# Check if the port is listening
$tcpClient = New-Object System.Net.Sockets.TcpClient
try {
    $tcpClient.Connect($ip, $port)
    if ($tcpClient.Connected) {
        Write-Host "Success: Port $port is open and accessible on $ip" -ForegroundColor Green
    } else {
        Write-Host "Error: Could not connect to port $port on $ip" -ForegroundColor Red
    }
} catch {
    Write-Host "Error: Could not connect to port $port on $ip" -ForegroundColor Red
    Write-Host "Exception: $_" -ForegroundColor Red
} finally {
    $tcpClient.Close()
}

# Check if the firewall rule exists
Write-Host "`nChecking if firewall rule exists..."
$rule = Get-NetFirewallRule -DisplayName "Next.js Dev Server" -ErrorAction SilentlyContinue
if ($rule) {
    Write-Host "Firewall rule 'Next.js Dev Server' exists" -ForegroundColor Green
} else {
    Write-Host "Firewall rule 'Next.js Dev Server' does not exist" -ForegroundColor Yellow
    Write-Host "Creating firewall rule..."
    try {
        New-NetFirewallRule -DisplayName "Next.js Dev Server" -Direction Inbound -Protocol TCP -LocalPort 3051 -Action Allow -ErrorAction Stop
        Write-Host "Firewall rule created successfully" -ForegroundColor Green
    } catch {
        Write-Host "Error creating firewall rule: $_" -ForegroundColor Red
        Write-Host "Please run this script as Administrator to create the firewall rule" -ForegroundColor Yellow
    }
}

# Check if the process is listening on the correct interface
Write-Host "`nChecking if the process is listening on all interfaces..."
$netstat = netstat -ano | findstr ":3051"
Write-Host "Netstat results for port 3051:"
Write-Host $netstat

Write-Host "`nTo access the server from mobile devices, use the following URL:"
Write-Host "http://$ip`:$port" -ForegroundColor Cyan

Write-Host "`nPress any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 