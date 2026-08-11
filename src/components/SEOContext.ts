import { createContext } from 'react';

export interface SEOState {
  title: string;
  description: string;
  keywords?: string;
  image: string;
  type: string;
  canonicalUrl: string;
  robots: string;
  structuredData?: Record<string, any>;
}

export interface SEOCollector {
  state?: SEOState;
}

export const SEOCollectorContext = createContext<SEOCollector | null>(null);
