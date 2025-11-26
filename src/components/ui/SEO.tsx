import React, { memo, useEffect } from 'react';
import type { SEOProps } from '../../types';

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
}) => {
  const fullTitle = title.includes('Elite Nitechs') 
    ? title 
    : `${title} | Elite Nitechs`;

  const siteUrl = url || 'https://elitenitechs.com';
  const siteImage = image || 'https://elitenitechs.com/og-image.jpg';

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      // Remove existing tag
      const existingTag = document.querySelector(
        property ? `meta[property="${property}"]` : `meta[name="${name}"]`
      );
      if (existingTag) {
        existingTag.remove();
      }

      // Create new tag
      const meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', property);
      } else {
        meta.setAttribute('name', name);
      }
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    };

    // Update link tags
    const updateLinkTag = (rel: string, href: string) => {
      // Remove existing tag
      const existingTag = document.querySelector(`link[rel="${rel}"]`);
      if (existingTag) {
        existingTag.remove();
      }

      // Create new tag
      const link = document.createElement('link');
      link.setAttribute('rel', rel);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    };

    // Basic Meta Tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    // Open Graph / Facebook
    updateMetaTag('og:type', 'website', 'og:type');
    updateMetaTag('og:url', siteUrl, 'og:url');
    updateMetaTag('og:title', fullTitle, 'og:title');
    updateMetaTag('og:description', description, 'og:description');
    updateMetaTag('og:image', siteImage, 'og:image');
    updateMetaTag('og:image:width', '1200', 'og:image:width');
    updateMetaTag('og:image:height', '630', 'og:image:height');

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', 'twitter:card');
    updateMetaTag('twitter:url', siteUrl, 'twitter:url');
    updateMetaTag('twitter:title', fullTitle, 'twitter:title');
    updateMetaTag('twitter:description', description, 'twitter:description');
    updateMetaTag('twitter:image', siteImage, 'twitter:image');

    // Additional Meta Tags
    updateMetaTag('author', 'Elite Nitechs');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('theme-color', '#f59e0b');

    // Canonical URL
    updateLinkTag('canonical', siteUrl);

    // Preconnect to external domains
    updateLinkTag('preconnect', 'https://fonts.googleapis.com');
    updateLinkTag('preconnect', 'https://images.unsplash.com');

    // DNS Prefetch
    updateLinkTag('dns-prefetch', '//www.googletagmanager.com');

    // Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Elite Nitechs",
      "url": "https://elitenitechs.com",
      "logo": "https://elitenitechs.com/logo.png",
      "description": description,
      "sameAs": [
        "https://twitter.com/elitenitechs",
        "https://linkedin.com/company/elitenitechs",
        "https://github.com/elitenitechs"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "contact@elitenitechs.com"
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // This would be called on unmount if needed
    };
  }, [fullTitle, description, keywords, siteUrl, siteImage]);

  // This component doesn't render anything visible
  return null;
};

export default memo(SEO);