import Script from 'next/script';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'service';
  data?: Record<string, unknown>;
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TechRizon",
    "alternateName": "TechRizon - Tech + Horizon",
    "url": "https://www.techrizon.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.techrizon.com/assets/logos/techrizon-logo-transparent.png",
      "width": 512,
      "height": 512
    },
    "image": "https://www.techrizon.com/assets/og-banner.png",
    "description": "Pioneering cybersecurity solutions and innovative ventures that shape tomorrow's digital landscape. From advanced threat protection to cutting-edge technology initiatives.",
    "slogan": "Tech + Horizon — Declaring the Future of Innovation",
    "foundingDate": "2023",
    "industry": ["Technology", "Cybersecurity", "Software Development", "Innovation"],
    "knowsAbout": ["Cybersecurity", "AI", "Machine Learning", "Blockchain", "Zero Trust Architecture", "Penetration Testing", "Threat Detection"],
    "sameAs": [
      "https://www.linkedin.com/company/techrizon",
      "https://twitter.com/TechRizonHQ",
      "https://github.com/techrizon"
    ],
    "founder": {
      "@type": "Person",
      "name": "Collin Ambani Anjeo",
      "url": "https://www.linkedin.com/in/ambanicollin/",
      "jobTitle": "Cybersecurity Architect & Founder",
      "description": "Visionary Cybersecurity Architect with postgraduate background in Data Science, pioneering the fusion of machine learning with cybersecurity frameworks.",
      "knowsAbout": ["Cybersecurity", "Data Science", "Machine Learning", "AI", "Blockchain", "Zero Trust"],
      "alumniOf": "Data Science Graduate Program"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-626-842-3942",
        "contactType": "customer service",
        "email": "connect@techrizon.com",
        "availableLanguage": "English",
        "areaServed": "Worldwide"
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "sales@techrizon.com",
        "availableLanguage": "English"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Innovation District",
      "addressRegion": "Tech City",
      "addressCountry": "US",
      "postalCode": "90210"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "TechRizon Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Cybersecurity Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Firewall Deployments",
                "description": "Advanced next-generation firewall solutions with deep packet inspection and threat intelligence integration."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vulnerability Assessment & Penetration Testing",
                "description": "Comprehensive security testing to identify and remediate vulnerabilities before attackers exploit them."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Managed Security Services",
                "description": "24/7 security monitoring and incident response with our expert security operations center."
              }
            }
          ]
        }
      ]
    },
    "owns": [
      {
        "@type": "Product",
        "name": "HiveRizon",
        "description": "Decentralized Innovation Network - A revolutionary blockchain-based platform connecting innovators, entrepreneurs, and investors."
      },
      {
        "@type": "Product",
        "name": "EduGuide",
        "description": "AI-Powered Educational Assistant - An intelligent educational platform that personalizes learning experiences.",
        "url": "https://eduguide.online/"
      },
      {
        "@type": "Product",
        "name": "FoundersMint®",
        "description": "Startup Success Platform - A comprehensive ecosystem for entrepreneurs providing tools, resources, and connections."
      },
      {
        "@type": "Product",
        "name": "Corevitalis",
        "description": "Digital Health Innovation - A next-generation healthcare platform leveraging IoT, AI, and blockchain.",
        "url": "https://corevitalis.store/"
      }
    ],
    "numberOfEmployees": "10-50",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TechRizon",
    "url": "https://techrizon.com",
    "description": "Tech + Horizon — Declaring the Future of Innovation",
    "publisher": {
      "@type": "Organization",
      "name": "TechRizon"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://techrizon.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TechRizon Cybersecurity Services",
    "description": "Professional cybersecurity services including firewall deployments, vulnerability assessments, penetration testing, and managed security services.",
    "provider": {
      "@type": "Organization",
      "name": "TechRizon"
    },
    "areaServed": "Worldwide",
    "serviceType": "Cybersecurity",
    "offers": [
      {
        "@type": "Offer",
        "name": "Firewall Deployments",
        "description": "Advanced next-generation firewall solutions",
        "priceRange": "$2,500+"
      },
      {
        "@type": "Offer",
        "name": "Penetration Testing",
        "description": "Comprehensive security testing and vulnerability assessment",
        "priceRange": "$5,000+"
      },
      {
        "@type": "Offer",
        "name": "Managed Security Services",
        "description": "24/7 security monitoring and incident response",
        "priceRange": "$3,500+"
      }
    ]
  };

  const getStructuredData = () => {
    if (data) return data;

    switch (type) {
      case 'website':
        return websiteData;
      case 'service':
        return serviceData;
      default:
        return organizationData;
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe to use here with JSON.stringify and known data
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}
