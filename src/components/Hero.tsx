import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MetallicText from "@/components/MetallicText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-charcoal-dark via-brand-charcoal to-brand-charcoal-light overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal-dark/50 via-transparent to-brand-gold/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Brand */}
          <div className="mb-8 flex justify-center animate-on-load animate-scale-in delay-200">
            <div className="relative animate-float">
              <div className="w-32 h-32 flex items-center justify-center">
                <img
                  src="/assets/logos/techrizon-logo-transparent.png"
                  alt="TechRizon Logo"
                  className="w-24 h-24 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl mb-6 animate-on-load animate-fade-in-up delay-400">
            <MetallicText size="7xl">
              TechRizon
            </MetallicText>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-brand-silver-light mb-4 font-light animate-on-load animate-fade-in-up delay-500">
            Tech + Horizon — Declaring the Future of Innovation
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-brand-silver/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-on-load animate-fade-in-up delay-600">
            Pioneering cybersecurity solutions and innovative ventures that
            shape tomorrow's digital landscape. From advanced threat protection
            to cutting-edge technology initiatives.
          </p>

          {/* Ventures Highlight */}
          <div className="mb-12 animate-on-load animate-fade-in-up delay-700">
            <p className="text-amber-400 text-sm font-semibold mb-4 tracking-widest uppercase">
              Our Ventures
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-brand-silver-light">
              <span className="px-4 py-2 bg-brand-charcoal-light/50 rounded-full border border-amber-600/30 hover:border-amber-400/50 transition-all duration-200 hover:scale-105 cursor-pointer animate-on-load animate-fade-in-left delay-800">
                HiveRizon
              </span>
              <span className="px-4 py-2 bg-brand-charcoal-light/50 rounded-full border border-amber-600/30 hover:border-amber-400/50 transition-all duration-200 hover:scale-105 cursor-pointer animate-on-load animate-fade-in-up delay-900">
                EduGuide
              </span>
              <span className="px-4 py-2 bg-brand-charcoal-light/50 rounded-full border border-amber-600/30 hover:border-amber-400/50 transition-all duration-200 hover:scale-105 cursor-pointer animate-on-load animate-fade-in-up delay-1000">
                FoundersMint®
              </span>
              <span className="px-4 py-2 bg-brand-charcoal-light/50 rounded-full border border-amber-600/30 hover:border-amber-400/50 transition-all duration-200 hover:scale-105 cursor-pointer animate-on-load animate-fade-in-right delay-1100">
                Corevitalis
              </span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-load animate-fade-in-up delay-1200">
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
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal font-semibold px-8 py-6 text-lg"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="mt-16 text-center">
            <p className="text-brand-silver/60 text-sm mb-4">
              Trusted by forward-thinking organizations
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-40">
              <div className="w-16 h-8 bg-brand-silver/20 rounded" />
              <div className="w-20 h-8 bg-brand-silver/20 rounded" />
              <div className="w-18 h-8 bg-brand-silver/20 rounded" />
              <div className="w-16 h-8 bg-brand-silver/20 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-charcoal-dark to-transparent" />
    </section>
  );
}
