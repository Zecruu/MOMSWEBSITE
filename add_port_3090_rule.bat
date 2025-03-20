@echo off
echo Adding firewall rule for Next.js Dev Server on port 3090...
netsh advfirewall firewall add rule name="Next.js Dev Server 3090" dir=in action=allow protocol=TCP localport=3090
echo Firewall rule added successfully.
pause 