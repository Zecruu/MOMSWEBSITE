@echo off
echo Checking if port 3090 is open...
echo.

echo Checking port 3090...
netstat -ano | findstr :3090
echo.

echo Checking firewall rule...
netsh advfirewall firewall show rule name="Next.js Dev Server 3090"
echo.

echo Your IP address is:
ipconfig | findstr IPv4
echo.

echo To access the server from mobile devices, use the following URL:
echo Next.js Server: http://192.168.0.25:3090
echo.

pause 