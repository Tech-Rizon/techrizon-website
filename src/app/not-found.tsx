import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import MetallicText from "@/components/MetallicText";
import { Home, ArrowLeft, Search, MessageCircle, Shield } from "lucide-react";

export default function NotFound() {
  const quickLinks = [
    { href: "/", label: "Home", icon: Home, description: "Return to homepage" },
    { href: "/services", label: "Services", icon: Shield, description: "Explore our cybersecurity services" },
    { href: "/ventures", label: "Ventures", icon: Search, description: "Discover our innovation projects" },
    { href: "/contact", label: "Contact", icon: MessageCircle, description: "Get in touch with our team" },
  ];

  return (
    <div className="min-h-screen theme-bg-gradient flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="mb-12 animate-on-load animate-scale-in delay-200">
            <div className="relative">
              {/* Large 404 */}
              <h1 className="text-9xl md:text-[12rem] font-bold opacity-10 text-brand-silver animate-pulse">
                404
              </h1>

              {/* Floating Logo */}
              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-2xl">
                  <img
                    src="/assets/logos/techrizon-logo-transparent.png"
                    alt="TechRizon Logo"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12 animate-on-load animate-fade-in-up delay-400">
            <h2 className="text-4xl md:text-6xl mb-6">
              <MetallicText size="6xl">
                Page Not Found
              </MetallicText>
            </h2>
            <p className="text-xl md:text-2xl text-brand-silver-light mb-6 leading-relaxed">
              The page you're looking for seems to have vanished into the digital void.
            </p>
            <p className="text-lg text-brand-silver/80 max-w-2xl mx-auto">
              Don't worry though! Our cybersecurity experts are always protecting against missing pages.
              Let's get you back to safety with one of these options.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-on-load animate-fade-in-up delay-600">
            {quickLinks.map((link, index) => (
              <Card
                key={link.href}
                className={`bg-brand-charcoal-light/80 border-brand-silver/20 hover:border-brand-gold/50 transition-all duration-500 hover:shadow-xl hover:shadow-brand-gold/20 hover:-translate-y-2 group cursor-pointer animate-on-load animate-fade-in-up delay-${700 + index * 100}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <link.icon className="w-6 h-6 text-brand-charcoal group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <h3 className="text-brand-silver text-lg font-semibold mb-2 group-hover:text-brand-gold transition-colors duration-500">
                    {link.label}
                  </h3>
                  <p className="text-brand-silver/80 text-sm mb-4">
                    {link.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-brand-silver/30 text-brand-silver hover:border-brand-gold hover:text-brand-gold w-full"
                  >
                    <Link href={link.href}>
                      Go to {link.label}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-load animate-fade-in-up delay-800">
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
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal font-semibold px-8 py-6 text-lg"
            >
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Report Issue
              </Link>
            </Button>
          </div>

          {/* Security Message */}
          <div className="mt-16 p-6 bg-brand-charcoal-light/60 rounded-xl border border-brand-silver/20 animate-on-load animate-fade-in-up delay-1000">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-brand-gold mr-3" />
              <h3 className="text-brand-silver text-xl font-semibold">
                Your Security is Our Priority
              </h3>
            </div>
            <p className="text-brand-silver/80">
              While you encountered a missing page, rest assured that our cybersecurity measures
              are working around the clock to protect your browsing experience and data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
