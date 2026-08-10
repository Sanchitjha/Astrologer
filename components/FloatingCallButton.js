'use client';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 left-5 z-50 group">
      <a
        href="tel:7600010811"
        aria-label="Call Rohit Sharmaji"
        className="flex items-center justify-center w-14 h-14 rounded-full text-white shadow-[0_4px_24px_rgba(193,16,46,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_30px_rgba(193,16,46,0.65)]"
        style={{ background: 'linear-gradient(145deg, #E11432, #8A0A20)' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>
      <span
        className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#2A1408] text-white text-xs font-semibold px-3 py-1.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
        style={{ fontFamily: 'var(--font-cinzel)' }}
      >
        Call 76000 10811
      </span>
    </div>
  );
}
