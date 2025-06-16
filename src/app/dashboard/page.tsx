"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { getUserProfile, updateUserProfile, type ContactSubmission } from "@/lib/supabase";
import { User, Mail, Building, Briefcase, Settings, MessageSquare } from "lucide-react";
import MetallicText from "@/components/MetallicText";

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState({
    full_name: "",
    company: "",
    role: ""
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/auth');
      return;
    }

    if (user) {
      loadUserProfile();
    }
  }, [user, authLoading, router]);

  const loadUserProfile = async () => {
    if (!user) return;

    try {
      const result = await getUserProfile(user.id);
      if (result.success && result.data) {
        setProfile({
          full_name: result.data.full_name || "",
          company: result.data.company || "",
          role: result.data.role || ""
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSaving(true);
    try {
      const result = await updateUserProfile(user.id, profile);
      if (result.success) {
        // Profile updated successfully
        alert('Profile updated successfully!');
      } else {
        alert(`Failed to update profile: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-charcoal-dark via-brand-charcoal to-brand-charcoal-light flex items-center justify-center">
        <div className="text-brand-silver">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-charcoal-dark via-brand-charcoal to-brand-charcoal-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-on-load animate-fade-in-down delay-200">
            <h1 className="text-3xl md:text-4xl mb-2">
              <MetallicText size="4xl">
                Welcome back, {profile.full_name || user.email}
              </MetallicText>
            </h1>
            <p className="text-brand-silver/80">
              Manage your profile and access exclusive TechRizon services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Profile Card */}
            <Card className="bg-brand-charcoal-light/80 border-brand-silver/20 animate-on-load animate-fade-in-left delay-400">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-brand-charcoal" />
                  </div>
                  <div>
                    <CardTitle className="text-brand-silver">Profile Information</CardTitle>
                    <CardDescription className="text-brand-silver/80">
                      Update your personal details
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brand-silver">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-brand-silver/50" />
                      <Input
                        id="email"
                        value={user.email || ""}
                        disabled
                        className="pl-10 bg-brand-charcoal/50 border-brand-silver/30 text-brand-silver/70"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="full_name" className="text-brand-silver">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-brand-silver/50" />
                      <Input
                        id="full_name"
                        name="full_name"
                        value={profile.full_name}
                        onChange={handleChange}
                        className="pl-10 bg-brand-charcoal border-brand-silver/30 text-brand-silver focus:border-brand-gold"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-brand-silver">Company</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-brand-silver/50" />
                      <Input
                        id="company"
                        name="company"
                        value={profile.company}
                        onChange={handleChange}
                        className="pl-10 bg-brand-charcoal border-brand-silver/30 text-brand-silver focus:border-brand-gold"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-brand-silver">Role</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-brand-silver/50" />
                      <Input
                        id="role"
                        name="role"
                        value={profile.role}
                        onChange={handleChange}
                        className="pl-10 bg-brand-charcoal border-brand-silver/30 text-brand-silver focus:border-brand-gold"
                        placeholder="Your role"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={saving}
                    className="w-full bg-brand-gold text-brand-charcoal hover:bg-brand-gold-light"
                  >
                    {saving ? "Updating..." : "Update Profile"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Account Overview */}
            <Card className="bg-brand-charcoal-light/80 border-brand-silver/20 animate-on-load animate-fade-in-right delay-500">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center">
                    <Settings className="w-6 h-6 text-brand-charcoal" />
                  </div>
                  <div>
                    <CardTitle className="text-brand-silver">Account Overview</CardTitle>
                    <CardDescription className="text-brand-silver/80">
                      Your account status and quick actions
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 bg-brand-charcoal-dark/50 rounded-lg border border-brand-silver/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-brand-silver font-medium">Account Status</h3>
                        <p className="text-brand-gold text-sm">Active</p>
                      </div>
                      <div className="w-3 h-3 bg-brand-gold rounded-full" />
                    </div>
                  </div>

                  <div className="p-4 bg-brand-charcoal-dark/50 rounded-lg border border-brand-silver/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-brand-silver font-medium">Member Since</h3>
                        <p className="text-brand-silver/80 text-sm">
                          {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                        </p>
                      </div>
                      <User className="w-5 h-5 text-brand-silver/50" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal"
                  >
                    <a href="/services">Explore Services</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal"
                  >
                    <a href="/ventures">View Ventures</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal"
                  >
                    <a href="/contact">Contact Support</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 animate-on-load animate-fade-in-up delay-600">
            <Card className="bg-brand-charcoal-light/80 border-brand-silver/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-brand-charcoal" />
                  </div>
                  <div>
                    <CardTitle className="text-brand-silver">Get Started</CardTitle>
                    <CardDescription className="text-brand-silver/80">
                      Quick actions to get the most out of TechRizon
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    asChild
                    className="bg-brand-gold text-brand-charcoal hover:bg-brand-gold-light h-auto p-4 flex-col space-y-2"
                  >
                    <a href="/services">
                      <div className="text-lg font-semibold">Security Assessment</div>
                      <div className="text-sm opacity-80">Get a free cybersecurity evaluation</div>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal h-auto p-4 flex-col space-y-2"
                  >
                    <a href="/ventures">
                      <div className="text-lg font-semibold">Explore Ventures</div>
                      <div className="text-sm opacity-80">Discover our innovation projects</div>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-charcoal h-auto p-4 flex-col space-y-2"
                  >
                    <a href="/contact">
                      <div className="text-lg font-semibold">Schedule Consultation</div>
                      <div className="text-sm opacity-80">Talk to our experts</div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
