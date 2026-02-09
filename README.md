# TechRizon Website

**Tech + Horizon — Declaring the Future of Innovation**

A modern, responsive website for TechRizon, showcasing cybersecurity services and innovative technology ventures. Built with Next.js, featuring comprehensive SEO optimization, user authentication, and live venture integration.

## 🚀 Live Demo

Visit the live website: [https://techrizon.com](https://techrizon.com)

## 🌟 Featured Ventures

- **🛡 HiveRizon** - Honeypot-based platform for proactive cyber threat detection
- **🎓 EduGuide** - AI-powered college guidance platform ([Live](https://eduguide.online/))
- **💼 FoundersMint®** - Data-informed grant portal for startup founders
- **💊 Corevitalis** - Wellness initiative for innovators ([Live](https://corevitalis.store/))

## ✨ Features

### 🏠 Core Pages
- **Homepage** - Hero section with brand showcase and venture highlights
- **About** - Detailed company information and CEO profile (Collin Ambani Anjeo)
- **Services** - Comprehensive cybersecurity offerings (VAPT, MSSP, SD-WAN, etc.)
- **Ventures** - Detailed showcase of all TechRizon ventures with live links
- **Contact** - Working contact form with Supabase database integration
- **Dashboard** - User profile management with authentication

### 🔐 Authentication & Database
- **User Registration/Login** - Supabase-powered authentication
- **Contact Form Integration** - Form submissions saved to database
- **User Profiles** - Profile management with company information
- **Row Level Security** - Secure database access controls

### 🎨 Design & UX
- **Responsive Design** - Mobile-first, works on all devices
- **TechRizon Branding** - Silver/gold color scheme with charcoal backgrounds
- **Accessibility** - Skip links, proper ARIA labels, keyboard navigation
- **Dark Theme** - Professional dark mode throughout

### 📊 SEO & Performance
- **Meta Tags** - Comprehensive Open Graph and Twitter Cards
- **Structured Data** - JSON-LD for search engines
- **Sitemap** - Auto-generated XML sitemap
- **Performance** - Next.js optimization with static generation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom TechRizon theme
- **Components**: ShadCN/UI component library
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Netlify
- **Package Manager**: Bun

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- Supabase account
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/techrizon-website.git
   cd techrizon-website
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```

   Add your Supabase credentials to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up the database**:
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Copy and run the contents of `supabase-schema.sql`

5. **Start the development server**:
   ```bash
   bun run dev
   ```

6. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
techrizon-website/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/              # About page
│   │   ├── auth/               # Authentication page
│   │   ├── contact/            # Contact page
│   │   ├── dashboard/          # User dashboard
│   │   ├── services/           # Services page
│   │   ├── ventures/           # Ventures page
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── sitemap.ts          # Auto-generated sitemap
│   │   └── robots.ts           # Robots.txt
│   ├── components/             # Reusable components
│   │   ├── ui/                 # ShadCN/UI components
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Hero.tsx            # Homepage hero
│   │   ├── Navbar.tsx          # Navigation bar
│   │   └── StructuredData.tsx  # SEO structured data
│   ├── contexts/               # React contexts
│   │   └── AuthContext.tsx     # Authentication context
│   └── lib/                    # Utilities and config
│       └── supabase.ts         # Supabase client and functions
├── public/                     # Static assets
├── supabase-schema.sql         # Database schema
├── DEPLOYMENT.md               # Deployment guide
└── netlify.toml                # Netlify configuration
```

## 🗄️ Database Schema

The application uses Supabase with the following tables:

### `contact_submissions`
- Stores contact form submissions
- Public insert access for form submissions
- Authenticated read access for admin dashboard

### `user_profiles`
- User profile information
- Automatically created on user registration
- Row Level Security ensures users only access their own data

## 🚀 Deployment

### Netlify Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings are already configured in `netlify.toml`

3. **Add environment variables** in Netlify dashboard:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Deploy!** The site will be live at your Netlify URL.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 👨‍💼 About the Founder

**Collin Ambani Anjeo** - Cybersecurity Architect & Founder

Visionary leader with postgraduate background in Data Science, pioneering the fusion of machine learning with cybersecurity frameworks. Expert in threat modeling, behavioral anomaly detection, and secure architecture design.

- [LinkedIn Profile](https://www.linkedin.com/in/ambanicollin/)
- Founder of TechRizon and all ventures

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

This project is proprietary to TechRizon. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: connect@techrizon.com
- Website: [TechRizon Contact](https://techrizon.com/contact)

---

**TechRizon** - Where Technology Meets the Horizon of Innovation
