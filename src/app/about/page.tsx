import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, MapPin, Users, Target, Award } from "lucide-react";
import MetallicText from "@/components/MetallicText";

export default function AboutPage() {
  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Global Users",
      description: "Across our platforms"
    },
    {
      icon: Target,
      number: "99.9%",
      label: "Uptime",
      description: "Service reliability"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years",
      description: "Combined expertise"
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
                About TechRizon
              </MetallicText>
            </h1>
            <p className="text-xl md:text-2xl text-brand-silver-light mb-8 leading-relaxed animate-on-load animate-fade-in-up delay-400">
              Where Technology Meets the Horizon of Innovation
            </p>
            <p className="text-lg text-brand-silver/80 mb-12 max-w-3xl mx-auto animate-on-load animate-fade-in-up delay-500">
              Founded on the principle that technology should empower and protect, TechRizon combines cutting-edge cybersecurity solutions with innovative ventures that shape the future of digital interaction.
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
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-brand-silver mb-2">{stat.label}</h3>
                <p className="text-brand-silver/80">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-on-load animate-fade-in-up delay-300">
              <h2 className="text-3xl md:text-4xl mb-4">
                <MetallicText size="4xl">
                  Leadership
                </MetallicText>
              </h2>
            </div>

            <Card className="bg-brand-charcoal-light/80 border-brand-silver/20 animate-on-load animate-scale-in delay-500">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-white">CA</span>
                </div>
                <CardTitle className="text-brand-silver text-2xl">Collin Ambani Anjeo</CardTitle>
                <CardDescription className="text-amber-400 text-lg font-semibold">
                  Cybersecurity Architect & Founder
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand-silver/80 mb-6 leading-relaxed text-lg">
                  Visionary Cybersecurity Architect with postgraduate background in Data Science, pioneering
                  the fusion of machine learning with cybersecurity frameworks. Expert in threat modeling,
                  behavioral anomaly detection, and secure architecture design.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h4 className="text-amber-400 font-semibold mb-3">Technical Expertise</h4>
                    <ul className="text-brand-silver/80 space-y-2">
                      <li>• Advanced Threat Detection & Response</li>
                      <li>• Machine Learning in Cybersecurity</li>
                      <li>• Secure Architecture Design</li>
                      <li>• Data Science & Analytics</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="text-amber-400 font-semibold mb-3">Innovation Focus</h4>
                    <ul className="text-brand-silver/80 space-y-2">
                      <li>• Blockchain Technology</li>
                      <li>• AI-Powered Education</li>
                      <li>• Startup Acceleration</li>
                      <li>• Wellness Technology</li>
                    </ul>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:via-amber-500 hover:to-amber-700 text-white font-semibold border border-amber-800/30 shadow-lg transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 30%, #92400E 70%, #78350F 100%)',
                    boxShadow: '0 4px 12px rgba(120, 53, 15, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
                  }}
                >
                  <a href="https://www.linkedin.com/in/ambanicollin/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-16 bg-brand-charcoal-light/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8 animate-on-load animate-fade-in-up delay-200">
              <MetallicText size="4xl">
                Our Mission
              </MetallicText>
            </h2>
            <p className="text-lg text-brand-silver/80 mb-8 leading-relaxed animate-on-load animate-fade-in-up delay-400">
              To bridge the gap between current technology capabilities and future possibilities through
              innovative cybersecurity solutions and transformative ventures that empower individuals,
              organizations, and communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-load animate-fade-in-up delay-600">
              <Card className="bg-brand-charcoal-light/80 border-brand-silver/20">
                <CardHeader>
                  <CardTitle className="text-brand-silver">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-silver/80">
                    To be the leading force in cybersecurity innovation, creating a safer digital world
                    where technology serves humanity's greatest potential.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-brand-charcoal-light/80 border-brand-silver/20">
                <CardHeader>
                  <CardTitle className="text-brand-silver">Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-silver/80">
                    Innovation, security, transparency, and empowerment guide every decision we make
                    and every solution we create.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 animate-on-load animate-fade-in-up delay-200">
            <MetallicText size="4xl">
              Ready to Innovate Together?
            </MetallicText>
          </h2>
          <p className="text-lg text-brand-silver/80 mb-8 max-w-2xl mx-auto animate-on-load animate-fade-in-up delay-400">
            Join us in shaping the future of cybersecurity and technology innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-load animate-fade-in-up delay-600">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:via-amber-500 hover:to-amber-700 text-white font-semibold border border-amber-800/30 shadow-xl transition-all duration-200 hover:scale-105 px-8 py-6 text-lg group"
              style={{
                backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 30%, #92400E 70%, #78350F 100%)',
                boxShadow: '0 6px 18px rgba(120, 53, 15, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.7)'
              }}
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal font-semibold px-8 py-6 text-lg"
            >
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
