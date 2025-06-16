import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import MetallicText from "@/components/MetallicText";
import {
  Hexagon,
  GraduationCap,
  Coins,
  Heart,
  ArrowRight,
  ExternalLink,
  Target,
  Users,
  Zap,
  CheckCircle
} from "lucide-react";

export default function VenturesPage() {
  const ventures = [
    {
      id: "hiverizon",
      icon: Hexagon,
      name: "HiveRizon",
      tagline: "Decentralized Innovation Network",
      description: "A revolutionary blockchain-based platform connecting innovators, entrepreneurs, and investors in a decentralized ecosystem that fosters collaboration and accelerates technological advancement.",
      longDescription: "HiveRizon represents the future of innovation collaboration. Built on cutting-edge blockchain technology, it creates a transparent, secure, and efficient marketplace for ideas, skills, and resources. The platform enables seamless collaboration between global innovators while ensuring intellectual property protection and fair compensation distribution.",
      features: [
        "Blockchain-powered collaboration platform",
        "Smart contract automation for partnerships",
        "Decentralized governance and voting systems",
        "Intellectual property protection protocols",
        "Global innovator network access",
        "Tokenized innovation rewards system"
      ],
      status: "In Development",
      color: "from-purple-600 to-blue-600",
      textColor: "text-purple-400",
      bgColor: "bg-purple-900/20"
    },
    {
      id: "eduguide",
      icon: GraduationCap,
      name: "EduGuide",
      tagline: "AI-Powered Educational Assistant",
      description: "An intelligent educational platform that personalizes learning experiences using advanced AI algorithms to adapt to individual learning styles and accelerate knowledge acquisition.",
      longDescription: "EduGuide transforms traditional education through personalized AI tutoring. The platform analyzes learning patterns, identifies knowledge gaps, and creates customized learning paths for each student. With real-time feedback and adaptive content delivery, EduGuide ensures optimal learning outcomes for students across all age groups and subjects.",
      features: [
        "Personalized AI tutoring system",
        "Adaptive learning path generation",
        "Real-time progress tracking",
        "Multi-modal content delivery",
        "Gamified learning experiences",
        "Teacher and parent dashboards"
      ],
      status: "Live",
      website: "https://eduguide.online/",
      color: "from-green-600 to-emerald-600",
      textColor: "text-green-400",
      bgColor: "bg-green-900/20"
    },
    {
      id: "foundersmint",
      icon: Coins,
      name: "FoundersMint®",
      tagline: "Startup Success Platform",
      description: "A comprehensive ecosystem for entrepreneurs providing tools, resources, and connections needed to build successful startups from ideation to scaling.",
      longDescription: "FoundersMint® is the ultimate startup accelerator platform that democratizes entrepreneurship. It provides aspiring founders with access to mentorship, funding opportunities, legal resources, and a vibrant community of entrepreneurs. The platform features AI-driven business plan generation, investor matching, and comprehensive startup education programs.",
      features: [
        "AI-powered business plan generator",
        "Investor matching algorithms",
        "Mentor network access",
        "Legal and compliance guidance",
        "Startup education academy",
        "Community-driven support system"
      ],
      status: "Beta Testing",
      color: "from-yellow-600 to-orange-600",
      textColor: "text-yellow-400",
      bgColor: "bg-yellow-900/20"
    },
    {
      id: "corevitalis",
      icon: Heart,
      name: "Corevitalis",
      tagline: "Digital Health Innovation",
      description: "A next-generation healthcare platform leveraging IoT, AI, and blockchain to revolutionize patient care, medical research, and healthcare accessibility worldwide.",
      longDescription: "Corevitalis represents the intersection of technology and healthcare, creating solutions that save lives and improve quality of care. The platform integrates wearable devices, AI diagnostics, and secure data sharing to provide real-time health monitoring, predictive analytics, and personalized treatment recommendations.",
      features: [
        "IoT-enabled health monitoring",
        "AI-powered diagnostic assistance",
        "Blockchain-secured health records",
        "Telemedicine integration",
        "Predictive health analytics",
        "Global healthcare accessibility"
      ],
      status: "Live",
      website: "https://corevitalis.store/",
      color: "from-red-600 to-pink-600",
      textColor: "text-red-400",
      bgColor: "bg-red-900/20"
    }
  ];

  const stats = [
    {
      icon: Target,
      number: "4+",
      label: "Active Ventures",
      description: "Innovative projects in development"
    },
    {
      icon: Users,
      number: "50K+",
      label: "Community Members",
      description: "Across all our platforms"
    },
    {
      icon: Zap,
      number: "$2M+",
      label: "Innovation Investment",
      description: "Committed to R&D initiatives"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-charcoal-dark via-brand-charcoal to-brand-charcoal-light">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6 animate-on-load animate-fade-in-down delay-200">
              <MetallicText size="6xl">
                Our Ventures
              </MetallicText>
            </h1>
            <p className="text-xl md:text-2xl text-brand-silver-light mb-8 leading-relaxed animate-on-load animate-fade-in-up delay-400">
              Pioneering the future through innovative technology ventures
            </p>
            <p className="text-lg text-brand-silver/80 mb-12 max-w-3xl mx-auto animate-on-load animate-fade-in-up delay-500">
              From blockchain innovation to AI-powered education, our ventures represent the cutting edge
              of technology development, each designed to solve real-world problems and create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-charcoal-light/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center animate-on-load animate-fade-in-up delay-${600 + index * 100}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-brand-charcoal" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-brand-silver mb-2">{stat.label}</h3>
                <p className="text-brand-silver/80">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {ventures.map((venture, index) => (
              <div key={venture.id} id={venture.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-12 animate-on-load animate-fade-in-up delay-${700 + index * 200}`}>
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <Card className="bg-brand-charcoal-light/80 border-brand-silver/20 hover:border-brand-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/20 hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer"
                    style={{
                      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}>
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${venture.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          <venture.icon className="w-8 h-8 text-white group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <div>
                          <CardTitle className="text-brand-silver text-2xl group-hover:text-brand-gold transition-colors duration-500">{venture.name}</CardTitle>
                          <p className="text-brand-gold text-sm font-semibold group-hover:text-amber-300 transition-colors duration-500">{venture.tagline}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 ${venture.bgColor} ${venture.textColor} rounded-full text-sm font-medium`}>
                          {venture.status}
                        </span>
                      </div>
                      <CardDescription className="text-brand-silver/80 text-lg leading-relaxed">
                        {venture.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-brand-silver/70 mb-6 leading-relaxed">
                        {venture.longDescription}
                      </p>
                      <div className="flex gap-3">
                        {venture.website ? (
                          <Button
                            asChild
                            className="bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:via-amber-500 hover:to-amber-700 text-white font-semibold border border-amber-800/30 shadow-lg group transition-all duration-200 hover:scale-105"
                            style={{
                              backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 30%, #92400E 70%, #78350F 100%)',
                              boxShadow: '0 4px 12px rgba(120, 53, 15, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                              textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
                            }}
                          >
                            <a href={venture.website} target="_blank" rel="noopener noreferrer">
                              Visit Live Site
                              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                        ) : (
                          <Button
                            asChild
                            className="bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:via-amber-500 hover:to-amber-700 text-white font-semibold border border-amber-800/30 shadow-lg group transition-all duration-200 hover:scale-105"
                            style={{
                              backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 30%, #92400E 70%, #78350F 100%)',
                              boxShadow: '0 4px 12px rgba(120, 53, 15, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                              textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
                            }}
                          >
                            <Link href="/contact">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        )}
                        <Button
                          asChild
                          variant="outline"
                          className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal"
                        >
                          <Link href="/contact">
                            Partner With Us
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-brand-charcoal-light/60 rounded-xl p-6 border border-brand-silver/20">
                    <h3 className="text-xl font-semibold text-brand-silver mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {venture.features.map((feature) => (
                        <li key={feature} className="flex items-start text-brand-silver/80">
                          <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-charcoal-dark to-brand-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-4 animate-on-load animate-fade-in-up delay-200">
            Partner with Our Ventures
          </h2>
          <p className="text-lg text-brand-silver/80 mb-8 max-w-2xl mx-auto animate-on-load animate-fade-in-up delay-400">
            Interested in collaborating, investing, or learning more about our innovative ventures?
            Get in touch with our team to explore partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-load animate-fade-in-up delay-600">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 text-brand-charcoal font-semibold border border-yellow-800/30 shadow-lg px-8 py-6 text-lg group"
              style={{
                boxShadow: '0 4px 12px rgba(218, 165, 32, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <Link href="/contact">
                Start Partnership Discussion
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal font-semibold px-8 py-6 text-lg"
            >
              <Link href="/about">
                About TechRizon
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
