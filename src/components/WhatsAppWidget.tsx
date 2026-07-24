import { trackMetaEvent } from '../utils/pixel';

export default function WhatsAppWidget() {
  const phoneNumber = "971585174871";
  const message = "Hi FINLOBY, I would like to inquire about your consultancy services. Please guide me on the next steps.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex items-center group">
      
      {/* Expanded Text Banner on Hover */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-chat-link"
        onClick={() => trackMetaEvent('Lead', { content_name: 'WhatsApp Secure Chat' })}
        className="flex items-center gap-3 px-5 py-3.5 bg-[#0D1625]/95 border border-[#C5A059]/40 hover:border-[#E5C158] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,193,88,0.2)]"
      >
        {/* Pulsing indicator badge inside button */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#FBF9F4] max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 whitespace-nowrap leading-none">
          WhatsApp Secure Chat
        </span>

        {/* WhatsApp Icon */}
        <svg 
          className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#25D366" />
          <path d="M12.008 3a8.992 8.992 0 0 0-7.79 13.513L3 21l4.633-1.217a8.993 8.993 0 1 0 4.375-16.783zm4.56 12.81c-.197.555-1.127 1.03-1.6 1.096-.453.062-.97.112-2.97-.696-2.556-1.032-4.2-3.641-4.327-3.812-.127-.17-.938-1.25-.938-2.383 0-1.134.588-1.693.8-1.91.21-.216.455-.27.607-.27.15 0 .302.002.434.007.137.006.324-.052.507.39.188.455.642 1.564.697 1.677.056.113.093.245.019.394-.075.15-.113.245-.226.376-.113.13-.238.293-.339.393-.113.113-.23.236-.098.463.13.226.583.963 1.25 1.56.86.767 1.583 1.004 1.81 1.117.225.113.356.094.489-.056.13-.15.565-.658.715-.884.15-.226.302-.188.508-.113.207.075 1.317.62 1.543.733.226.113.376.17.433.264.056.094.056.555-.14 1.11z" fill="white" />
        </svg>
      </a>

    </div>
  );
}
