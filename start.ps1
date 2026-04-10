# Kill any existing node processes (old dev servers)
Write-Host "Stopping old Node processes..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2

# Start fresh
Write-Host "Starting Nairobi Chapel dev server..." -ForegroundColor Green
npm run dev
