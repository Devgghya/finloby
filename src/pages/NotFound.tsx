import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#070F1E] px-4 pb-20 pt-48 text-center">
      <SEO
        title="Page Not Found"
        description="The requested FINLOBY page could not be found."
        canonicalUrl="https://finloby.com/"
        noIndex
      />
      <div className="max-w-xl border border-[#C5A059]/20 bg-[#0D1625]/70 p-10 sm:p-14">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">404</p>
        <h1 className="mb-5 font-serif text-4xl font-light text-[#FBF9F4] sm:text-5xl">
          Page not found
        </h1>
        <p className="mb-8 text-sm font-light leading-relaxed text-[#FBF9F4]/60">
          The page you requested is unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex border border-[#C5A059] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059] transition-colors hover:bg-[#C5A059] hover:text-[#070F1E]"
        >
          Return to FINLOBY
        </Link>
      </div>
    </div>
  );
}
