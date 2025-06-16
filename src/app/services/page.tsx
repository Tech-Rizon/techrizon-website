import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import MetallicText from "@/components/MetallicText";
import {
  Shield,
  Search,
  Users,
  Settings,
  Globe,
  ArrowRight,
  CheckCircle,
  Zap,
  Lock,
  Eye
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Firewall Deployments",
      description: "Advanced next-generation firewall solutions with deep packet inspection and threat intelligence integration.",
      features: [
        "Next-Generation Firewall (NGFW)",
        "Application Control & Visibility",
        "Intrusion Prevention System (IPS)",
        "SSL/TLS Inspection",
        "Centralized Management"
      ],
      price: "Starting at $2,500/month"
    },
    {
      icon: Search,
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      description: "Comprehensive security testing to identify and remediate vulnerabilities before attackers exploit them.",
      features: [
        "Network Vulnerability Assessment",
        "Web Application Security Testing",
        "Social Engineering Assessment",
        "Wireless Security Testing",
        "Detailed Remediation Reports"
      ],
      price: "Starting at $5,000/assessment"
    },
    {
      icon: Users,
      title: "Security Awareness Training",
      description: "Human-focused cybersecurity training programs to reduce the risk of social engineering attacks.",
      features: [
        "Phishing Simulation Campaigns",
        "Interactive Training Modules",
        "Security Policy Development",
        "Incident Response Training",
        "Compliance Training Programs"
      ],
      price: "Starting at $50/user/year"
    },
    {
      icon: Settings,
      title: "Managed Security Services (MSSP)",
      description: "24/7 security monitoring and incident response with our expert security operations center.",
      features: [
        "24/7 Security Operations Center",
        "Threat Detection & Response",
        "Log Management & SIEM",
        "Incident Response Services",
        "Compliance Monitoring"
      ],
      price: "Starting at $3,500/month"
    },
    {
      icon: Globe,
      title: "VPN/SD-WAN Setup",
      description: "Secure network connectivity solutions for distributed workforces and multi-site organizations.",
      features: [
        "Site-to-Site VPN Configuration",
        "Remote Access VPN Solutions",
        "SD-WAN Implementation",
        "Network Performance Optimization",
        "Centralized Policy Management"
      ],
      price: "Starting at $1,500/month"
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Implementation of zero trust security models for enhanced protection in modern IT environments.",
      features: [
        "Identity & Access Management",
        "Micro-segmentation",
        "Continuous Verification",
        "Device Trust Assessment",
        "Policy Orchestration"
      ],
      price: "Custom pricing"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Rapid Response",
      description: "24/7 incident response with average response time under 15 minutes"
    },
    {
      icon: Eye,
      title: "Proactive Monitoring",
      description: "Continuous threat detection and prevention before issues impact your business"
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description: "Solutions designed to meet industry standards including SOC 2, ISO 27001, and PCI DSS"
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
                Cybersecurity Services
              </MetallicText>
            </h1>
            <p className="text-xl md:text-2xl text-brand-silver-light mb-8 leading-relaxed animate-on-load animate-fade-in-up delay-400">
              Comprehensive security solutions to protect your organization from evolving cyber threats
            </p>
            <p className="text-lg text-brand-silver/80 mb-12 max-w-3xl mx-auto animate-on-load animate-fade-in-up delay-500">
              From firewall deployments to penetration testing, our expert team delivers enterprise-grade
              cybersecurity services tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal font-semibold px-8 py-6 text-lg"
              >
                <Link href="#services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-brand-charcoal-light/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-4">
              Why Choose TechRizon Security?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-brand-charcoal" />
                </div>
                <h3 className="text-xl font-semibold text-brand-silver mb-2">{benefit.title}</h3>
                <p className="text-brand-silver/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-4">
              Our Security Services
            </h2>
            <p className="text-lg text-brand-silver/80 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your organization at every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="bg-brand-charcoal-light/80 border-brand-silver/20 hover:border-brand-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/20 hover:-translate-y-3 hover:scale-105 group cursor-pointer"
                style={{
                  transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <service.icon className="w-6 h-6 text-brand-charcoal group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <CardTitle className="text-brand-silver text-xl group-hover:text-brand-gold transition-colors duration-500">{service.title}</CardTitle>
                  <CardDescription className="text-brand-silver/80">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-brand-silver/80">
                        <CheckCircle className="w-4 h-4 text-brand-gold mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-brand-silver/20 pt-4">
                    <p className="text-brand-gold font-semibold mb-4">{service.price}</p>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:via-amber-500 hover:to-amber-700 text-white font-semibold border border-amber-800/30 shadow-lg transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 30%, #92400E 70%, #78350F 100%)',
                        boxShadow: '0 4px 12px rgba(120, 53, 15, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
                      }}
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-charcoal-dark to-brand-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-4">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-lg text-brand-silver/80 mb-8 max-w-2xl mx-auto">
            Contact our cybersecurity experts today for a free consultation and customized security assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Book Free Call
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
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
