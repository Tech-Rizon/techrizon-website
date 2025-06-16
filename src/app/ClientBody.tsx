"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import StructuredData from "@/components/StructuredData";
import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased bg-brand-charcoal";
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <StructuredData type="organization" />
        <div className="antialiased theme-bg-gradient min-h-screen transition-all duration-300">
          <Navbar />
          <main id="main-content" className="pt-16">{children}</main>
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}
