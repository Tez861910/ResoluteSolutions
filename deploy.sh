#!/bin/bash

# Deployment script for GitHub Pages
echo "🚀 Starting deployment to GitHub Pages..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🔗 Your site will be available at: https://tez861910.github.io/ResoluteSolutions/"
