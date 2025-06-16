"use client";

import { useTheme } from "@/contexts/ThemeContext";

interface MetallicTextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl'
};

export default function MetallicText({ children, className = '', size = 'xl' }: MetallicTextProps) {
  const { isDark } = useTheme();

  const darkGradient = 'linear-gradient(90deg, #94A3B8 0%, #CBD5E1 30%, #E2E8F0 50%, #F59E0B 70%, #D97706 85%, #92400E 100%)';
  const lightGradient = 'linear-gradient(90deg, #374151 0%, #6B7280 30%, #9CA3AF 50%, #F59E0B 70%, #D97706 85%, #92400E 100%)';

  return (
    <span
      className={`font-bold bg-gradient-to-r bg-clip-text text-transparent drop-shadow-sm transition-all duration-300 ${sizeClasses[size]} ${className}`}
      style={{
        textShadow: isDark ? '0 1px 3px rgba(0, 0, 0, 0.3)' : '0 1px 3px rgba(255, 255, 255, 0.3)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        letterSpacing: '0.02em',
        backgroundImage: isDark ? darkGradient : lightGradient
      }}
    >
      {children}
    </span>
  );
}
