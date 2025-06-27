# Deployment script for GitHub Pages (PowerShell)
Write-Host "🚀 Starting deployment to GitHub Pages..." -ForegroundColor Green

# Install dependencies if node_modules doesn't exist
if (!(Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

# Deploy to GitHub Pages
Write-Host "🌐 Deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🔗 Your site will be available at: https://tez861910.github.io/ResoluteSolutions/" -ForegroundColor Cyan
