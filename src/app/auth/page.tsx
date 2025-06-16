"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";
import MetallicText from "@/components/MetallicText";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { signIn, signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (isSignUp) {
        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }

        // Sign up
        const result = await signUp(formData.email, formData.password, {
          full_name: formData.fullName
        });

        if (result.error) {
          setError(result.error);
        } else {
          setSuccess("Account created successfully! Please check your email to verify your account.");
        }
      } else {
        // Sign in
        const result = await signIn(formData.email, formData.password);

        if (result.error) {
          setError(result.error);
        } else {
          router.push('/dashboard');
        }
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-charcoal-dark via-brand-charcoal to-brand-charcoal-light flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          {/* Back button */}
          <div className="mb-6 animate-on-load animate-fade-in-left delay-200">
            <Button
              asChild
              variant="ghost"
              className="text-brand-silver hover:text-brand-gold"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          <Card className="bg-brand-charcoal-light/80 border-brand-silver/20 animate-on-load animate-scale-in delay-400">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
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
              <CardTitle className="text-brand-silver text-2xl">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </CardTitle>
              <CardDescription className="text-brand-silver/80">
                {isSignUp
                  ? "Join TechRizon to access our exclusive services and ventures"
                  : "Sign in to your account to access your dashboard"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignUp && (
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-brand-silver">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-brand-silver/50" />
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required={isSignUp}
                        value={formData.fullName}
                        onChange={handleChange}
                        className="pl-10 bg-brand-charcoal border-brand-silver/30 text-brand-silver focus:border-brand-gold"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-brand-silver">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-brand-silver/50" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 bg-brand-charcoal border-brand-silver/30 text-brand-silver focus:border-brand-gold"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-brand-silver">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-brand-silver/50" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10 bg-brand-charcoal border-brand-silver/30 text-brand-silver focus:border-brand-gold"
                      placeholder="Your password"
                    />
                  </div>
                </div>

                {isSignUp && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-brand-silver">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-brand-silver/50" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required={isSignUp}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="pl-10 bg-brand-charcoal border-brand-silver/30 text-brand-silver focus:border-brand-gold"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </div>
                )}

                {error && (
                  <div className="p-3 bg-red-900/20 border border-red-500/50 rounded-md">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="p-3 bg-green-900/20 border border-green-500/50 rounded-md">
                    <p className="text-green-400 text-sm">{success}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-b from-amber-400 via-amber-600 to-amber-900 hover:from-amber-300 hover:via-amber-500 hover:to-amber-800 text-white font-semibold border border-amber-900/40 shadow-xl animate-pulse-glow transition-all duration-300 hover:scale-105 animate-shimmer py-6"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 25%, #92400E 50%, #78350F 75%, #451A03 100%)',
                    boxShadow: '0 6px 20px rgba(120, 53, 15, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 30px rgba(218, 165, 32, 0.3)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
                  }}
                >
                  {loading
                    ? (isSignUp ? "Creating Account..." : "Signing In...")
                    : (isSignUp ? "Create Account" : "Sign In")
                  }
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp(!isSignUp);
                      setError("");
                      setSuccess("");
                      setFormData({ email: "", password: "", confirmPassword: "", fullName: "" });
                    }}
                    className="text-brand-silver/80 hover:text-brand-gold transition-colors text-sm"
                  >
                    {isSignUp
                      ? "Already have an account? Sign in"
                      : "Don't have an account? Sign up"
                    }
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
