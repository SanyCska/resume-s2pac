# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js portfolio to GitHub Pages.

## 🚀 Quick Setup

### 1. Configure Next.js for Static Export

The `next.config.mjs` file has been updated with the following configuration:

```javascript
const nextConfig = {
  output: 'export',           // Enable static export
  trailingSlash: true,        // Add trailing slashes to URLs
  skipTrailingSlashRedirect: true,
  distDir: 'dist',           // Output directory
  images: {
    unoptimized: true,        // Disable image optimization for static export
  },
}
```

### 2. GitHub Actions Workflow

A GitHub Actions workflow (`.github/workflows/deploy.yml`) has been created that will:
- Build your Next.js app
- Deploy it to GitHub Pages automatically
- Run on every push to the `main` branch

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 4. Repository Settings

Make sure your repository is public or you have GitHub Pro/Team for private repositories with GitHub Pages.

## 📝 Step-by-Step Instructions

### Step 1: Push Your Code

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### Step 2: Check GitHub Actions

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You should see the "Deploy to GitHub Pages" workflow running
4. Wait for it to complete (usually 2-3 minutes)

### Step 3: Access Your Site

Once the deployment is complete, your site will be available at:
```
https://yourusername.github.io/resume-s2pac
```

## 🔧 Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The built files will be in the 'dist' folder
# You can then upload the contents of 'dist' to GitHub Pages
```

## 🐛 Troubleshooting

### Common Issues:

1. **Build Fails**: Check the Actions tab for error details
2. **404 Error**: Ensure the repository name matches the URL path
3. **Images Not Loading**: Make sure all images are in the `public` folder
4. **Styling Issues**: Verify that all CSS is properly built

### Build Locally:

```bash
# Test the build locally
npm run build

# Check if the dist folder is created
ls -la dist/
```

## 📁 File Structure After Build

```
dist/
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── images/
└── ...
```

## 🔄 Automatic Updates

Every time you push to the `main` branch:
1. GitHub Actions will automatically build your site
2. Deploy the updated version to GitHub Pages
3. Your live site will be updated within a few minutes

## 📞 Support

If you encounter any issues:
1. Check the GitHub Actions logs
2. Verify your `next.config.mjs` settings
3. Ensure all dependencies are properly installed
4. Make sure your repository is public (or you have GitHub Pro)

---

**Your portfolio will be live at**: `https://yourusername.github.io/resume-s2pac`
