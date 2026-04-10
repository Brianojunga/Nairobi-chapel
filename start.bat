@echo off
echo ============================================
echo  Nairobi Chapel - Starting Dev Server
echo ============================================
echo.

echo [1/3] Stopping any old Node processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo [2/3] Installing dependencies...
call npm install

echo [3/3] Starting dev server on http://localhost:3000
echo.
call npm run dev
pause
