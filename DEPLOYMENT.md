# Resolute Solutions - GitHub Pages Deployment

This project is configured for deployment to GitHub Pages. Follow these steps to deploy:

## Automatic Deployment (Recommended)

1. **Enable GitHub Pages:**

   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push to main branch:**
   - Any push to the `main` branch will automatically trigger deployment
   - The GitHub Action workflow will build and deploy your site

## Manual Deployment

You can also deploy manually using the gh-pages package:

```bash
# Install dependencies
npm install

# Build and deploy
npm run deploy
```

## Configuration Details

### Base URL

The app is configured with `base: "/ResoluteSolutions/"` in `vite.config.js` to work with GitHub Pages.

### Router Configuration

React Router is configured with `basename="/ResoluteSolutions"` to handle routing correctly on GitHub Pages.

### SPA Routing

- Added `404.html` for client-side routing support
- Added redirect script in `index.html` to handle SPA navigation

### Files Added/Modified for GitHub Pages:

- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `public/404.html` - Handles SPA routing for GitHub Pages
- `public/.nojekyll` - Prevents Jekyll processing
- Updated `package.json` with homepage and deploy scripts
- Updated `vite.config.js` with correct base path
- Updated `src/App.jsx` with basename for React Router

## Deployment URL

Your site will be available at: `https://tez861910.github.io/ResoluteSolutions/`

## Troubleshooting

If you encounter issues:

1. **404 errors on refresh**: Make sure the SPA redirect scripts are in place
2. **Assets not loading**: Verify the base path is correctly set
3. **Routing issues**: Check that basename is set in React Router

## Local Development

For local development, the base path is automatically handled:

```bash
npm run dev  # Development server
npm run build  # Production build
npm run preview  # Preview production build locally
```
