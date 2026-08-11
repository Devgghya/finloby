import { renderToReadableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import {
  SEOCollectorContext,
  type SEOCollector,
  type SEOState,
} from './components/SEOContext';

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function meta(attribute: 'name' | 'property', key: string, content: string) {
  return `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(content)}">`;
}

function renderHead(state: SEOState | undefined) {
  if (!state) return '';

  const tags = [
    `<title>${escapeHtml(state.title)}</title>`,
    meta('name', 'description', state.description),
    state.keywords ? meta('name', 'keywords', state.keywords) : '',
    meta('property', 'og:title', state.title),
    meta('property', 'og:description', state.description),
    meta('property', 'og:image', state.image),
    meta('property', 'og:url', state.canonicalUrl),
    meta('property', 'og:type', state.type),
    meta('property', 'og:site_name', 'FINLOBY'),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', state.title),
    meta('name', 'twitter:description', state.description),
    meta('name', 'twitter:image', state.image),
    `<link rel="canonical" href="${escapeHtml(state.canonicalUrl)}">`,
    meta('name', 'robots', state.robots),
  ];

  if (state.structuredData) {
    const jsonLd = JSON.stringify(state.structuredData).replaceAll('<', '\\u003c');
    tags.push(`<script id="seo-jsonld" type="application/ld+json">${jsonLd}</script>`);
  }

  return tags.filter(Boolean).join('\n    ');
}

export async function render(url: string) {
  const collector: SEOCollector = {};
  const stream = await renderToReadableStream(
    <SEOCollectorContext.Provider value={collector}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </SEOCollectorContext.Provider>,
  );

  await stream.allReady;

  return {
    html: await new Response(stream).text(),
    head: renderHead(collector.state),
  };
}
