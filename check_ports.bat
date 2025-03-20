@echo off
echo Checking if ports are open...
echo.

echo Checking port 3051...
netstat -ano | findstr :3051
echo.

echo Checking port 8080...
netstat -ano | findstr :8080
echo.

echo Checking firewall rules...
netsh advfirewall firewall show rule name="Next.js Dev Server"
echo.
netsh advfirewall firewall show rule name="Test Server"
echo.

echo Your IP address is:
ipconfig | findstr IPv4
echo.

echo To access the servers from mobile devices, use the following URLs:
echo Next.js Server: http://192.168.0.25:3051
echo Test Server: http://192.168.0.25:8080
echo.

pause 