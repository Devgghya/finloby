export default function WhatsAppWidget() {
  const phoneNumber = "971585174871";
  const message = "Hi FINLOBY, I would like to inquire about your private consultancy services. Please guide me on the next steps.";
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
          className="w-5 h-5 fill-emerald-400 group-hover:scale-110 transition-transform duration-300" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.468 4.847 1.47 5.375 0 9.75-4.378 9.754-9.752.002-2.604-1.011-5.054-2.853-6.897C16.5 2.13 14.055 1.11 11.453 1.11 6.079 1.11 1.705 5.49 1.702 10.864c-.001 1.705.452 3.37 1.312 4.868l-.993 3.626 3.714-.974zm11.367-6.326c-.19-.094-1.127-.556-1.302-.62-.175-.063-.302-.094-.43.094s-.494.62-.605.748c-.11.127-.22.143-.41.048-.19-.095-.807-.298-1.537-.95-1.573-1.402-1.667-2.316-1.858-2.632-.19-.315-.02-.486.074-.58.085-.085.19-.22.285-.33.095-.11.127-.19.19-.315s.03-.238-.016-.33c-.047-.094-.43-1.036-.59-1.417-.156-.375-.327-.324-.45-.33-.12-.006-.255-.007-.39-.007s-.356.05-.543.254c-.187.206-.714.698-.714 1.7s.73 1.97 1.83 2.115c1.1.144 2.184.87 3.307 1.353.628.27 1.144.225 1.558.163.453-.068 1.4-.573 1.6-1.127.2-.556.2-1.036.14-1.127-.06-.095-.22-.143-.41-.238z" />
        </svg>
      </a>

    </div>
  );
}
