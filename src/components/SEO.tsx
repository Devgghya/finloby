import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
  breadcrumbs?: BreadcrumbItem[];
}

export default function SEO({
  title,
  description,
  keywords,
  image = 'https://finloby.com/finloby-white.png', // Default brand image
  type = 'website',
  canonicalUrl,
  noIndex = false,
  structuredData,
  breadcrumbs,
}: SEOProps) {
  const location = useLocation();
  const currentUrl = canonicalUrl || `https://finloby.com${location.pathname}${location.search}`;

  const formattedImage = image.startsWith('http') ? image : `https://finloby.com${image.startsWith('/') ? '' : '/'}${image}`;

  useEffect(() => {
    // 1. Update Title
    const fullTitle = title.includes('FINLOBY') ? title : `${title} | FINLOBY`;
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // 2. Update Description
    updateMetaTag('name', 'description', description);

    // 3. Update Keywords if provided
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    } else {
      const keywordsEl = document.querySelector('meta[name="keywords"]');
      if (keywordsEl) {
        keywordsEl.remove();
      }
    }

    // 4. Update Open Graph (OG) tags
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', formattedImage);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:site_name', 'FINLOBY');

    // 5. Update Twitter tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', fullTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', formattedImage);

    // 6. Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', currentUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', currentUrl);
      document.head.appendChild(canonicalLink);
    }

    // 7. Update Robots (e.g. for noindex on Admin pages)
    if (noIndex) {
      updateMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      updateMetaTag('name', 'robots', 'index, follow');
    }

    // 8. Update JSON-LD Structured Data if provided
    const existingJsonLd = document.getElementById('seo-jsonld');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    const payloadSchemas: Array<Record<string, any>> = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      payloadSchemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((b, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": b.name,
          "item": b.item.startsWith('http') ? b.item : `https://finloby.com${b.item.startsWith('/') ? '' : '/'}${b.item}`
        }))
      });
    }

    if (structuredData) {
      if (Array.isArray(structuredData)) {
        payloadSchemas.push(...structuredData);
      } else {
        payloadSchemas.push(structuredData);
      }
    }

    if (payloadSchemas.length > 0) {
      const script = document.createElement('script');
      script.id = 'seo-jsonld';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(payloadSchemas.length === 1 ? payloadSchemas[0] : {
        "@context": "https://schema.org",
        "@graph": payloadSchemas
      });
      document.head.appendChild(script);
    }

    // Cleanup: remove JSON-LD script on unmount
    return () => {
      const jsonLdToCleanup = document.getElementById('seo-jsonld');
      if (jsonLdToCleanup) {
        jsonLdToCleanup.remove();
      }
    };
  }, [title, description, keywords, formattedImage, type, currentUrl, noIndex, structuredData, breadcrumbs]);

  return null;
}
