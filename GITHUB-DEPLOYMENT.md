# 🚀 TechRizon Website - GitHub & Netlify Deployment Guide

This guide will walk you through creating a new GitHub repository and deploying to Netlify.

## ✅ Current Status

Your TechRizon website is complete and ready for deployment with:
- ✅ All pages built and functional
- ✅ Supabase integration configured
- ✅ Live venture links added (EduGuide, Corevitalis)
- ✅ SEO optimization complete
- ✅ Git repository initialized locally

## 📋 Step 1: Create GitHub Repository

### Option A: Using GitHub CLI (Recommended)
```bash
# Install GitHub CLI if not already installed
# Then authenticate and create repo
gh auth login
cd techrizon-website
gh repo create techrizon-website --public --source=. --remote=origin --push
```

### Option B: Using GitHub Web Interface

1. **Go to GitHub.com** and sign in to your account

2. **Create a new repository**:
   - Click the "+" icon → "New repository"
   - Repository name: `techrizon-website`
   - Description: `Official TechRizon website - Tech + Horizon | Declaring the Future of Innovation`
   - Set to **Public** (recommended for business websites)
   - **Don't** initialize with README (we already have one)

3. **Connect your local repository**:
   ```bash
   cd techrizon-website
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/techrizon-website.git
   git push -u origin main
   ```

## 🌐 Step 2: Deploy to Netlify

### 2.1 Connect to Netlify

1. **Go to [Netlify.com](https://netlify.com)** and sign in
2. **Click "New site from Git"**
3. **Choose GitHub** and authorize Netlify to access your repositories
4. **Select your repository**: `techrizon-website`
5. **Configure build settings** (these are already set in `netlify.toml`):
   - Build command: `bun run build`
   - Publish directory: `.next`
   - Click "Deploy site"

### 2.2 Add Environment Variables

1. **Go to your Netlify site dashboard**
2. **Navigate to**: Site settings → Environment variables
3. **Add these variables**:
   ```
   Variable name: NEXT_PUBLIC_SUPABASE_URL
   Value: https://bkswgorshxwurtumadsq.supabase.co

   Variable name: NEXT_PUBLIC_SUPABASE_ANON_KEY
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrc3dnb3JzaHh3dXJ0dW1hZHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTEyNDEsImV4cCI6MjA2NTU4NzI0MX0.B0a-P8UeEEEUbaQp0fRS-wWbdxOluUfDdbnf7jD1Yc0
   ```

4. **Save** and trigger a new deployment

### 2.3 Custom Domain (Optional)

1. **Go to**: Site settings → Domain management
2. **Add custom domain**: `techrizon.com` or `www.techrizon.com`
3. **Configure DNS** with your domain provider:
   - For root domain: A record to Netlify's IP
   - For www: CNAME to your Netlify subdomain

## 🗄️ Step 3: Verify Database Setup

Your Supabase database should already be configured, but verify:

1. **Go to your Supabase dashboard**
2. **Check the SQL Editor** - ensure the schema from `supabase-schema.sql` is applied
3. **Test the contact form** on your live site
4. **Check Authentication** - try signing up for an account

## 🔧 Step 4: Update Site URLs

Once deployed, update these files with your actual domain:

### Update in `src/app/sitemap.ts`:
```typescript
const baseUrl = 'https://your-netlify-site.netlify.app' // or your custom domain
```

### Update in `src/app/robots.ts`:
```typescript
const baseUrl = 'https://your-netlify-site.netlify.app' // or your custom domain
```

### Update in `src/app/layout.tsx`:
```typescript
metadataBase: new URL('https://your-netlify-site.netlify.app')
```

### Update in `src/components/StructuredData.tsx`:
```typescript
"url": "https://your-netlify-site.netlify.app"
```

## 🎯 Step 5: Final Verification

After deployment, test these features:

- ✅ **Homepage loads** with proper branding
- ✅ **Contact form** submits successfully
- ✅ **User registration** works correctly
- ✅ **Venture links** open correctly:
  - EduGuide: https://eduguide.online/
  - Corevitalis: https://corevitalis.store/
- ✅ **SEO meta tags** appear in page source
- ✅ **Mobile responsiveness** works properly

## 🚀 Your Live Site

After deployment, your TechRizon website will be live at:
- **Netlify URL**: `https://your-site-name.netlify.app`
- **Custom Domain**: `https://techrizon.com` (if configured)

## 📊 Next Steps

1. **Monitor Performance**: Use Netlify Analytics to track site performance
2. **Set up Monitoring**: Consider adding Google Analytics or Plausible
3. **Regular Updates**: Keep content and venture statuses updated
4. **Backup**: Your code is now safely stored on GitHub
5. **Team Collaboration**: Add team members to the GitHub repository

## 🎉 Congratulations!

Your TechRizon website is now live and fully functional! The site includes:
- ✅ Complete company showcase
- ✅ CEO profile with detailed background
- ✅ Live venture integrations
- ✅ Working contact form and authentication
- ✅ Professional SEO optimization
- ✅ Mobile-responsive design

**TechRizon is now ready to declare the future of innovation to the world!** 🌟
