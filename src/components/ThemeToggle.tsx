"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full border border-brand-silver/30 hover:border-brand-gold/50 transition-all duration-300 hover:scale-110 group"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className="relative w-5 h-5 overflow-hidden">
        {/* Sun Icon */}
        <Sun
          className={`absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-500 transform ${
            isDark
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          } group-hover:text-amber-400`}
        />

        {/* Moon Icon */}
        <Moon
          className={`absolute inset-0 w-5 h-5 text-slate-300 transition-all duration-500 transform ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          } group-hover:text-slate-100`}
        />
      </div>

      {/* Background glow effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
        isDark
          ? 'bg-slate-800/20 group-hover:bg-slate-800/40'
          : 'bg-amber-500/20 group-hover:bg-amber-500/40'
      } opacity-0 group-hover:opacity-100`} />
    </Button>
  );
}
