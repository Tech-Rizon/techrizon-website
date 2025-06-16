# TechRizon Website Deployment Guide

This guide will walk you through deploying the TechRizon website to Netlify and setting up Supabase integration.

## 🚀 Quick Deployment Steps

### 1. Supabase Setup

1. **Go to [Supabase](https://supabase.com) and create a new project**
2. **Run the database schema** - Copy the contents of `supabase-schema.sql` and run it in your Supabase SQL editor
3. **Get your credentials** from Settings > API:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2. GitHub Repository

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial TechRizon website"
   git push origin main
   ```

### 3. Netlify Deployment

1. **Go to [Netlify](https://netlify.com) and sign in**
2. **Click "New site from Git"**
3. **Connect your GitHub repository**
4. **Configure build settings**:
   - Build command: `bun run build`
   - Publish directory: `.next`
   - (These are already configured in `netlify.toml`)

5. **Add environment variables** in Netlify dashboard (Site settings > Environment variables):
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

6. **Deploy the site**

### 4. Domain Setup (Optional)

1. **Add your custom domain** in Netlify (Domain settings)
2. **Update the domain in these files**:
   - `src/app/sitemap.ts` - Change `baseUrl`
   - `src/app/robots.ts` - Change `baseUrl`
   - `src/app/layout.tsx` - Update `metadataBase`
   - `src/components/StructuredData.tsx` - Update URLs

## 🗄️ Database Schema

The database includes these tables:

### contact_submissions
- Stores contact form submissions
- Public insert access (for the contact form)
- Authenticated read access (for admin dashboard)

### user_profiles
- User profile information
- Automatically created when users sign up
- Users can only access their own profiles

## 🔒 Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Environment variables** for sensitive data
- **HTTPS** enforced by Netlify
- **Content Security Policy** headers configured

## 📊 SEO & Performance

- **Sitemap** automatically generated at `/sitemap.xml`
- **Robots.txt** at `/robots.txt`
- **Structured data** for search engines
- **Open Graph** and **Twitter Cards** meta tags
- **Next.js optimization** with static generation where possible

## 🔧 Local Development

1. **Install dependencies**:
   ```bash
   bun install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Add your Supabase credentials
   ```

3. **Run development server**:
   ```bash
   bun run dev
   ```

## 📝 Features Included

- ✅ Homepage with hero section
- ✅ About page with company information
- ✅ Services page with cybersecurity offerings
- ✅ Ventures page showcasing projects
- ✅ Contact form with Supabase integration
- ✅ User authentication and dashboard
- ✅ Mobile-responsive design
- ✅ SEO optimization
- ✅ Structured data for search engines

## 🎨 Customization

### Brand Colors
The site uses TechRizon brand colors defined in `tailwind.config.ts`:
- Silver: `#C0C0C0` (primary)
- Gold: `#D4AF37` (accent)
- Charcoal: `#2C2C2C` (background)

### Logo
Add your actual logo file to `public/assets/logos/` and update references in:
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/app/auth/page.tsx`

## 🆘 Troubleshooting

### Build Issues
- Make sure all environment variables are set in Netlify
- Check the build logs for specific errors
- Ensure Supabase credentials are correct

### Database Issues
- Verify the schema was run correctly in Supabase
- Check RLS policies are enabled
- Ensure anonymous access is allowed for contact forms

### Authentication Issues
- Verify Supabase URL and keys are correct
- Check if email confirmation is enabled in Supabase Auth settings
- Make sure redirect URLs are configured in Supabase

## 📞 Support

For any deployment issues, check the logs in:
- Netlify: Site dashboard > Functions > View logs
- Supabase: Dashboard > Logs
- Browser: Developer tools > Console

The website is now ready for production use! 🎉
