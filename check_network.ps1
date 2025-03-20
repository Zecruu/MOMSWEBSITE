# PowerShell script to check network connectivity and configuration

Write-Host "Network Connectivity Check" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan

# Get network interfaces
Write-Host "`nNetwork Interfaces:" -ForegroundColor Green
Get-NetIPAddress | Where-Object { $_.AddressFamily -eq "IPv4" } | 
    Select-Object InterfaceAlias, IPAddress, PrefixLength | 
    Format-Table -AutoSize

# Get active TCP connections
Write-Host "`nActive TCP Connections:" -ForegroundColor Green
Get-NetTCPConnection -State Listen | 
    Where-Object { $_.LocalPort -eq 3051 -or $_.LocalPort -eq 8080 } | 
    Select-Object LocalAddress, LocalPort, State, OwningProcess | 
    Format-Table -AutoSize

# Check if ports are open
Write-Host "`nChecking if ports are open..." -ForegroundColor Green
$ports = @(3051, 8080)
$ip = "192.168.0.25"

foreach ($port in $ports) {
    $tcpClient = New-Object System.Net.Sockets.TcpClient
    try {
        $tcpClient.Connect($ip, $port)
        if ($tcpClient.Connected) {
            Write-Host "Port $port is open on $ip" -ForegroundColor Green
        } else {
            Write-Host "Port $port is closed on $ip" -ForegroundColor Red
        }
    } catch {
        Write-Host "Port $port is closed on $ip" -ForegroundColor Red
    } finally {
        $tcpClient.Close()
    }
}

# Check firewall rules
Write-Host "`nFirewall Rules:" -ForegroundColor Green
Get-NetFirewallRule -DisplayName "*Next.js*", "*Test Server*" | 
    Select-Object DisplayName, Enabled, Direction, Action | 
    Format-Table -AutoSize

# Check network route
Write-Host "`nNetwork Route:" -ForegroundColor Green
Get-NetRoute -AddressFamily IPv4 | 
    Where-Object { $_.DestinationPrefix -eq "0.0.0.0/0" } | 
    Select-Object DestinationPrefix, NextHop, RouteMetric | 
    Format-Table -AutoSize

Write-Host "`nTo access the servers from mobile devices, use the following URLs:" -ForegroundColor Cyan
Write-Host "Next.js Server: http://$ip`:3051" -ForegroundColor Yellow
Write-Host "Test Server: http://$ip`:8080" -ForegroundColor Yellow

Write-Host "`nPress any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 