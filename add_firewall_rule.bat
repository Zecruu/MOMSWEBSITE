@echo off
echo Adding firewall rule for Next.js Dev Server on port 3051...
netsh advfirewall firewall add rule name="Next.js Dev Server" dir=in action=allow protocol=TCP localport=3051
echo Firewall rule added successfully.
pause 