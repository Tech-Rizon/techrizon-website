import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import MetallicText from "@/components/MetallicText";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal-dark border-t border-brand-silver/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10">
                <img
                  src="/assets/logos/techrizon-logo-transparent.png"
                  alt="TechRizon Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <MetallicText size="xl">
                TechRizon
              </MetallicText>
            </div>
            <p className="text-brand-silver/80 mb-4 max-w-md">
              Tech + Horizon — Declaring the Future of Innovation. Pioneering
              cybersecurity solutions and innovative ventures that shape
              tomorrow's digital landscape.
            </p>
            <div className="space-y-2 text-brand-silver/80">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>connect@techrizon.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Innovation District, Tech City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-silver font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-brand-silver/80 hover:text-brand-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-brand-silver/80 hover:text-brand-gold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures"
                  className="text-brand-silver/80 hover:text-brand-gold transition-colors"
                >
                  Ventures
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-silver/80 hover:text-brand-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-brand-silver/80 hover:text-brand-gold transition-colors"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h3 className="text-brand-silver font-semibold mb-4">
              Our Ventures
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ventures#hiverizon"
                  className="text-brand-silver/80 hover:text-brand-gold transition-colors"
                >
                  HiveRizon
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures#eduguide"
                  className="text-brand-silver/80 hover:text-brand-gold transition-colors"
                >
                  EduGuide
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures#foundersmint"
                  className="text-brand-silver/80 hover:text-brand-gold transition-colors"
                >
                  FoundersMint®
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures#corevitalis"
                  className="text-brand-silver/80 hover:text-brand-gold transition-colors"
                >
                  Corevitalis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-silver/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-silver/60 text-sm">
            © 2025 TechRizon. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-brand-silver/60 hover:text-brand-gold text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-brand-silver/60 hover:text-brand-gold text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-brand-silver/60 hover:text-brand-gold text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
