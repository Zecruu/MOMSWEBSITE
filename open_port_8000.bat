@echo off
echo This script needs to be run as administrator to open port 8000 in Windows Firewall.
echo Right-click on this file and select "Run as administrator".
echo.
echo If you're seeing this message, you may not have run the script as administrator.
echo.
echo Press any key to attempt to open port 8000 anyway...
pause > nul

echo Checking current firewall rules...
netsh advfirewall firewall show rule name="Open Port 8000" > nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Removing existing rule...
    netsh advfirewall firewall delete rule name="Open Port 8000"
)

echo Adding new firewall rule...
netsh advfirewall firewall add rule name="Open Port 8000" dir=in action=allow protocol=TCP localport=8000

if %ERRORLEVEL% NEQ 0 (
    echo Failed to open port 8000. Please run this script as administrator.
    echo Error code: %ERRORLEVEL%
    pause
) else (
    echo Successfully opened port 8000 in Windows Firewall.
    echo.
    echo Current firewall rules for port 8000:
    netsh advfirewall firewall show rule name="Open Port 8000"
    pause
) 