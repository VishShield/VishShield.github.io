@echo off
echo ========================================
echo   ScamShield AI - Starting Project
echo ========================================
echo.

cd /d "%~dp0"

echo Checking if node_modules exists...
if not exist "node_modules\" (
    echo Installing dependencies...
    echo This may take 2-3 minutes...
    call npm install
    echo.
    echo Dependencies installed!
    echo.
) else (
    echo Dependencies already installed.
    echo.
)

echo Starting development server...
echo The browser will open automatically at http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm start

pause

