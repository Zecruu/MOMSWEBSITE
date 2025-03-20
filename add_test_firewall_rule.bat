@echo off
echo Adding firewall rule for Test Server on port 8080...
netsh advfirewall firewall add rule name="Test Server" dir=in action=allow protocol=TCP localport=8080
echo Firewall rule added successfully.
pause 