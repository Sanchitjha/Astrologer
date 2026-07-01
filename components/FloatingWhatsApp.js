'use client';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [tip, setTip] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {tip && (
        <div className="flex items-center gap-2 bg-white text-[#050005] text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-2xl animate-fade-in">
          <span>Chat on WhatsApp</span>
          <button
            onClick={() => setTip(false)}
            className="text-gray-400 hover:text-gray-600 ml-1"
            aria-label="Close tooltip"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20need%20astrological%20guidance."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTip(true)}
        onMouseLeave={() => setTip(false)}
        aria-label="WhatsApp Rohit Sharmaji"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_4px_24px_rgba(37,211,102,0.5)] transition-all hover:scale-110 pulse-gold"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
      >
        <MessageCircle size={26} strokeWidth={1.8} />
      </a>
    </div>
  );
}
