import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import MetallicText from "@/components/MetallicText";
import {
  Clock,
  User,
  ArrowRight,
  Calendar,
  Tag,
  TrendingUp,
  Shield,
  Zap,
  Globe
} from "lucide-react";

export default function BlogPage() {
  const featuredPost = {
    slug: "future-of-cybersecurity-ai",
    title: "The Future of Cybersecurity: How AI is Revolutionizing Threat Detection",
    excerpt: "Explore how artificial intelligence and machine learning are transforming the cybersecurity landscape, creating more proactive and intelligent defense systems.",
    content: "As cyber threats evolve at an unprecedented pace, traditional security measures are struggling to keep up. This comprehensive analysis examines how AI-powered systems are becoming the cornerstone of modern cybersecurity strategies...",
    category: "Cybersecurity",
    author: "Collin Ambani Anjeo",
    publishedAt: "2025-01-15",
    readTime: "8 min read",
    tags: ["AI", "Cybersecurity", "Machine Learning", "Threat Detection"],
    featured: true,
    image: "/assets/blog/ai-cybersecurity.jpg"
  };

  const blogPosts = [
    {
      slug: "zero-trust-architecture-guide",
      title: "Complete Guide to Zero Trust Architecture Implementation",
      excerpt: "A comprehensive walkthrough of implementing zero trust security models in modern enterprise environments.",
      category: "Security Architecture",
      author: "TechRizon Team",
      publishedAt: "2025-01-12",
      readTime: "12 min read",
      tags: ["Zero Trust", "Security", "Enterprise"],
      image: "/assets/blog/zero-trust.jpg"
    },
    {
      slug: "blockchain-innovation-trends",
      title: "Blockchain Innovation Trends Shaping 2025",
      excerpt: "Discover the latest blockchain developments and how they're impacting various industries beyond cryptocurrency.",
      category: "Innovation",
      author: "Collin Ambani Anjeo",
      publishedAt: "2025-01-10",
      readTime: "6 min read",
      tags: ["Blockchain", "Innovation", "Technology"],
      image: "/assets/blog/blockchain-trends.jpg"
    },
    {
      slug: "startup-security-best-practices",
      title: "Essential Security Best Practices for Startups",
      excerpt: "Learn the fundamental security measures every startup should implement from day one to protect their digital assets.",
      category: "Startup Security",
      author: "TechRizon Team",
      publishedAt: "2025-01-08",
      readTime: "10 min read",
      tags: ["Startups", "Security", "Best Practices"],
      image: "/assets/blog/startup-security.jpg"
    },
    {
      slug: "ai-education-platforms",
      title: "How AI is Personalizing Education at Scale",
      excerpt: "Examining the impact of artificial intelligence on modern education platforms and personalized learning experiences.",
      category: "Education Technology",
      author: "EduGuide Team",
      publishedAt: "2025-01-05",
      readTime: "7 min read",
      tags: ["AI", "Education", "Personalization"],
      image: "/assets/blog/ai-education.jpg"
    },
    {
      slug: "venture-capital-cybersecurity",
      title: "Venture Capital Trends in Cybersecurity Startups",
      excerpt: "Analysis of investment patterns and emerging opportunities in the cybersecurity startup ecosystem.",
      category: "Investment",
      author: "FoundersMint Team",
      publishedAt: "2025-01-03",
      readTime: "9 min read",
      tags: ["VC", "Investment", "Cybersecurity"],
      image: "/assets/blog/vc-trends.jpg"
    },
    {
      slug: "wellness-tech-integration",
      title: "Integrating Wellness Technology in the Workplace",
      excerpt: "How modern organizations are leveraging wellness technology to improve employee health and productivity.",
      category: "Wellness Technology",
      author: "Corevitalis Team",
      publishedAt: "2025-01-01",
      readTime: "5 min read",
      tags: ["Wellness", "Technology", "Workplace"],
      image: "/assets/blog/wellness-tech.jpg"
    }
  ];

  const categories = [
    { name: "All Posts", count: 7, icon: Globe },
    { name: "Cybersecurity", count: 3, icon: Shield },
    { name: "Innovation", count: 2, icon: Zap },
    { name: "Technology", count: 4, icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen theme-bg-gradient">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6 animate-on-load animate-fade-in-down delay-200">
              <MetallicText size="6xl">
                TechRizon Blog
              </MetallicText>
            </h1>
            <p className="text-xl md:text-2xl text-brand-silver-light mb-8 leading-relaxed animate-on-load animate-fade-in-up delay-400">
              Insights, innovations, and thought leadership in cybersecurity and technology
            </p>
            <p className="text-lg text-brand-silver/80 mb-12 max-w-3xl mx-auto animate-on-load animate-fade-in-up delay-500">
              Stay ahead of the curve with expert analysis, industry trends, and deep dives into
              the technologies shaping our digital future.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-brand-charcoal-light/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-on-load animate-fade-in-up delay-600">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="border-brand-silver/30 text-brand-silver hover:border-brand-gold hover:text-brand-gold transition-all duration-300 hover:scale-105"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center animate-on-load animate-fade-in-up delay-300">
            <h2 className="text-3xl md:text-4xl mb-4">
              <MetallicText size="4xl">
                Featured Article
              </MetallicText>
            </h2>
          </div>

          <Card className="bg-brand-charcoal-light/80 border-brand-silver/20 hover:border-brand-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/20 hover:-translate-y-2 group cursor-pointer animate-on-load animate-scale-in delay-500">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-amber-600 to-amber-800 rounded-t-lg md:rounded-l-lg md:rounded-t-none flex items-center justify-center">
                  <TrendingUp className="w-24 h-24 text-white/50" />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-600/20 text-amber-400 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-brand-charcoal-dark/50 text-brand-silver rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-silver mb-4 group-hover:text-brand-gold transition-colors duration-500">
                  {featuredPost.title}
                </h3>
                <p className="text-brand-silver/80 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-brand-silver/60 text-sm mb-6 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:via-amber-500 hover:to-amber-700 text-white font-semibold border border-amber-800/30 shadow-lg transition-all duration-200 hover:scale-105 group"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 30%, #92400E 70%, #78350F 100%)',
                    boxShadow: '0 4px 12px rgba(120, 53, 15, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
                  }}
                >
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-brand-charcoal-light/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4">
              <MetallicText size="4xl">
                Latest Articles
              </MetallicText>
            </h2>
            <p className="text-lg text-brand-silver/80 max-w-2xl mx-auto">
              Explore our latest insights and analysis on cybersecurity, innovation, and technology trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.slug}
                className={`bg-brand-charcoal-light/80 border-brand-silver/20 hover:border-brand-gold/50 transition-all duration-500 hover:shadow-xl hover:shadow-brand-gold/10 hover:-translate-y-2 group cursor-pointer animate-on-load animate-fade-in-up delay-${700 + index * 100}`}
              >
                <div className="h-48 bg-gradient-to-br from-slate-600 to-slate-800 rounded-t-lg flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-white/30" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-brand-charcoal-dark/50 text-brand-silver/80 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-brand-silver text-xl group-hover:text-brand-gold transition-colors duration-500 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-brand-silver/80 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-brand-silver/60 text-sm mb-4 space-x-3">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-brand-gold/20 text-brand-gold text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-brand-silver/30 text-brand-silver hover:border-brand-gold hover:text-brand-gold"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4 animate-on-load animate-fade-in-up delay-200">
              <MetallicText size="4xl">
                Stay Updated
              </MetallicText>
            </h2>
            <p className="text-lg text-brand-silver/80 mb-8 animate-on-load animate-fade-in-up delay-400">
              Subscribe to our newsletter for the latest insights, trends, and innovations in cybersecurity and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-load animate-fade-in-up delay-600">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:via-amber-500 hover:to-amber-700 text-white font-semibold border border-amber-800/30 shadow-lg px-8 py-6 text-lg group transition-all duration-200 hover:scale-105"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 30%, #92400E 70%, #78350F 100%)',
                  boxShadow: '0 4px 12px rgba(120, 53, 15, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
                }}
              >
                <Link href="/contact">
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal font-semibold px-8 py-6 text-lg"
              >
                <Link href="/contact">
                  Contact Our Experts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
