import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techrizon.com';
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ventures`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/auth`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Blog posts (in a real app, these would be fetched from a database)
  const blogPosts = [
    'future-of-cybersecurity-ai',
    'zero-trust-architecture-guide',
    'blockchain-innovation-trends',
    'startup-security-best-practices',
    'ai-education-platforms',
    'venture-capital-cybersecurity',
    'wellness-tech-integration'
  ];

  const blogSitemaps = blogPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Service pages (detailed service pages)
  const services = [
    'firewall-deployments',
    'penetration-testing',
    'security-awareness-training',
    'managed-security-services',
    'vpn-sd-wan-setup',
    'zero-trust-architecture'
  ];

  const serviceSitemaps = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Venture detail pages
  const ventures = [
    'hiverizon',
    'eduguide',
    'foundersmint',
    'corevitalis'
  ];

  const ventureSitemaps = ventures.map(venture => ({
    url: `${baseUrl}/ventures/${venture}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...blogSitemaps,
    ...serviceSitemaps,
    ...ventureSitemaps,
  ];
}
