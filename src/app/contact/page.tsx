"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import MetallicText from "@/components/MetallicText";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    "Cybersecurity Services",
    "Venture Partnership",
    "General Inquiry",
    "Technical Support",
    "Investment Opportunity",
    "Media & Press"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Import the submitContactForm function
      const { submitContactForm } = await import('@/lib/supabase');

      // Submit to Supabase
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        inquiry_type: formData.inquiryType,
        message: formData.message
      });

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          inquiryType: "",
          message: ""
        });
      } else {
        console.error('Form submission error:', result.error);
        // You could show an error message to the user here
        alert(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "connect@techrizon.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (626) 842-3942",
      description: "Mon-Fri from 8am to 5pm PST"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "",
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "Average response time"
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-charcoal-dark via-brand-charcoal to-brand-charcoal-light flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-brand-charcoal" />
            </div>
            <h1 className="text-3xl font-bold text-brand-silver mb-4">Message Sent!</h1>
            <p className="text-brand-silver/80 mb-8">
              Thank you for contacting TechRizon. We've received your message and will get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:via-amber-500 hover:to-amber-700 text-white font-semibold border border-amber-800/30 shadow-lg transition-all duration-200 hover:scale-105"
              style={{
                backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 30%, #92400E 70%, #78350F 100%)',
                boxShadow: '0 4px 12px rgba(120, 53, 15, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
              }}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-charcoal-dark via-brand-charcoal to-brand-charcoal-light">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6 animate-on-load animate-fade-in-down delay-200">
              <MetallicText size="6xl">
                Contact Us
              </MetallicText>
            </h1>
            <p className="text-xl md:text-2xl text-brand-silver-light mb-8 leading-relaxed">
              Ready to secure your future? Let's start the conversation.
            </p>
            <p className="text-lg text-brand-silver/80 mb-12 max-w-3xl mx-auto">
              Whether you need cybersecurity services, want to explore venture partnerships,
              or have questions about our innovative solutions, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-brand-charcoal-light/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <Card key={info.title} className="bg-brand-charcoal-light/80 border-brand-silver/20 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-brand-charcoal" />
                  </div>
                  <CardTitle className="text-brand-silver text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gold font-semibold mb-2">{info.value}</p>
                  <p className="text-brand-silver/70 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-brand-charcoal-light/80 border-brand-silver/20">
              <CardHeader>
                <CardTitle className="text-brand-silver text-2xl text-center">Send us a Message</CardTitle>
                <CardDescription className="text-brand-silver/80 text-center">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-brand-silver">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-brand-charcoal border-brand-silver/30 text-brand-silver focus:border-brand-gold"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-brand-silver">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-brand-charcoal border-brand-silver/30 text-brand-silver focus:border-brand-gold"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-brand-silver">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-brand-charcoal border-brand-silver/30 text-brand-silver focus:border-brand-gold"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType" className="text-brand-silver">Inquiry Type *</Label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-brand-charcoal border border-brand-silver/30 text-brand-silver rounded-md focus:border-brand-gold focus:outline-none"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-brand-silver">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-brand-charcoal border-brand-silver/30 text-brand-silver focus:border-brand-gold min-h-32"
                      placeholder="Tell us about your project, requirements, or questions..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:via-amber-500 hover:to-amber-700 text-white font-semibold border border-amber-800/30 shadow-lg py-6 text-lg group transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 30%, #92400E 70%, #78350F 100%)',
                      boxShadow: '0 4px 12px rgba(120, 53, 15, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gradient-to-r from-brand-charcoal-dark to-brand-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-lg text-brand-silver/80 mb-8 max-w-2xl mx-auto">
            Join the growing community of organizations that trust TechRizon for their cybersecurity
            needs and innovative technology solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-brand-gold mb-2">24/7</h3>
              <p className="text-brand-silver/80">Security Monitoring</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-gold mb-2">99.9%</h3>
              <p className="text-brand-silver/80">Service Uptime</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-gold mb-2">&lt;15min</h3>
              <p className="text-brand-silver/80">Response Time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
