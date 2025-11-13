#!/bin/bash

echo "========================================"
echo "  VishShield AI - Starting Project"
echo "========================================"
echo ""

cd "$(dirname "$0")"

echo "Checking if node_modules exists..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    echo "This may take 2-3 minutes..."
    npm install
    echo ""
    echo "Dependencies installed!"
    echo ""
else
    echo "Dependencies already installed."
    echo ""
fi

echo "Starting development server..."
echo "The browser will open automatically at http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm start

