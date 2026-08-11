import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOCollectorContext, type SEOState } from './SEOContext';

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

function withoutTrackingParameters(url: string) {
  try {
    const canonical = new URL(url);
    canonical.search = '';
    canonical.hash = '';
    return canonical.toString();
  } catch {
    return url.split(/[?#]/, 1)[0];
  }
}

function buildStructuredData(
  structuredData: SEOProps['structuredData'],
  breadcrumbs: BreadcrumbItem[] | undefined,
) {
  const payloadSchemas: Array<Record<string, any>> = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    payloadSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((breadcrumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: breadcrumb.name,
        item: breadcrumb.item.startsWith('http')
          ? breadcrumb.item
          : `https://finloby.com${breadcrumb.item.startsWith('/') ? '' : '/'}${breadcrumb.item}`,
      })),
    });
  }

  if (structuredData) {
    if (Array.isArray(structuredData)) {
      payloadSchemas.push(...structuredData);
    } else {
      payloadSchemas.push(structuredData);
    }
  }

  if (payloadSchemas.length === 0) return undefined;
  if (payloadSchemas.length === 1) return payloadSchemas[0];

  return {
    '@context': 'https://schema.org',
    '@graph': payloadSchemas,
  };
}

export default function SEO({
  title,
  description,
  keywords,
  image = 'https://finloby.com/finloby-white-256.png',
  type = 'website',
  canonicalUrl,
  noIndex = false,
  structuredData,
  breadcrumbs,
}: SEOProps) {
  const location = useLocation();
  const collector = useContext(SEOCollectorContext);
  const fullTitle = title.includes('FINLOBY') ? title : `${title} | FINLOBY`;
  const currentUrl = withoutTrackingParameters(
    canonicalUrl || `https://finloby.com${location.pathname}`,
  );
  const formattedImage = image.startsWith('http')
    ? image
    : `https://finloby.com${image.startsWith('/') ? '' : '/'}${image}`;
  const payload = buildStructuredData(structuredData, breadcrumbs);
  const jsonLd = payload ? JSON.stringify(payload) : undefined;
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow';

  const state: SEOState = {
    title: fullTitle,
    description,
    keywords,
    image: formattedImage,
    type,
    canonicalUrl: currentUrl,
    robots,
    structuredData: payload,
  };

  // During the server build, the route renderer collects this state and writes
  // the tags directly into the generated HTML head.
  if (collector) collector.state = state;

  useEffect(() => {
    document.title = fullTitle;

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

    updateMetaTag('name', 'description', description);

    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    } else {
      document.querySelector('meta[name="keywords"]')?.remove();
    }

    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', formattedImage);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:site_name', 'FINLOBY');
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', fullTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', formattedImage);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', currentUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', currentUrl);
      document.head.appendChild(canonicalLink);
    }

    updateMetaTag('name', 'robots', robots);

    document.getElementById('seo-jsonld')?.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'seo-jsonld';
      script.type = 'application/ld+json';
      script.textContent = jsonLd;
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById('seo-jsonld')?.remove();
    };
  }, [currentUrl, description, formattedImage, fullTitle, jsonLd, keywords, robots, type]);

  return null;
}
