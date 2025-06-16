"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import MetallicText from "@/components/MetallicText";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/ventures", label: "Ventures" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-charcoal/95 backdrop-blur-md border-b border-brand-silver/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-silver hover:text-brand-gold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            {user ? (
              <div className="flex items-center space-x-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal"
                >
                  <Link href="/dashboard">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Link>
                </Button>
                <Button
                  onClick={handleSignOut}
                  variant="ghost"
                  className="text-brand-silver hover:text-brand-gold"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button
                asChild
                className="bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:via-amber-500 hover:to-amber-700 text-white font-semibold border border-amber-800/30 shadow-lg transition-all duration-200 hover:scale-105"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 30%, #92400E 70%, #78350F 100%)',
                  boxShadow: '0 4px 12px rgba(120, 53, 15, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
                }}
              >
                <Link href="/auth">Sign In</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-silver hover:text-brand-gold"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-charcoal-light rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-brand-silver hover:text-brand-gold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <div className="flex justify-center mb-4">
                  <ThemeToggle />
                </div>
                {user ? (
                  <>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal"
                    >
                      <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                    </Button>
                    <Button
                      onClick={handleSignOut}
                      variant="ghost"
                      className="w-full text-brand-silver hover:text-brand-gold"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button
                    asChild
                    className="w-full bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:via-amber-500 hover:to-amber-700 text-white font-semibold border border-amber-800/30 shadow-lg transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 30%, #92400E 70%, #78350F 100%)',
                      boxShadow: '0 4px 12px rgba(120, 53, 15, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    <Link href="/auth" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
