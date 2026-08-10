'use client';

import { useState, useEffect } from 'react';

export default function GetAdviceModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = [
      '*Get Genuine Advice Request*',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917600010811?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  }

  function handleClose() {
    onClose();
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', message: '' }); }, 300);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="advice-modal-title"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl p-7 shadow-2xl"
        style={{ background: 'linear-gradient(160deg, #2A0710 0%, #1E0509 100%)', border: '1px solid rgba(212,175,55,0.25)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-white/50 hover:text-[#D4AF37] transition-colors text-xl leading-none"
        >
          ✕
        </button>

        {sent ? (
          <div className="text-center space-y-4 py-4">
            <span className="text-5xl block">✅</span>
            <h3 id="advice-modal-title" className="text-[#D4AF37] text-lg font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Request Sent!
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Rohit Sharmaji will personally get back to you shortly on WhatsApp.
            </p>
            <button
              onClick={handleClose}
              className="btn-outline-cream !py-2 !px-6 text-sm"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 id="advice-modal-title" className="text-[#D4AF37] text-xl font-bold mb-1.5" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Get Free Advice
            </h3>
            <p className="text-white/50 text-xs mb-6 leading-relaxed">
              Share a few details and Rohit Sharmaji will personally respond on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="gaName" className="text-white/45 text-xs font-semibold tracking-wider uppercase">
                  Name
                </label>
                <input
                  id="gaName" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#D4AF37]/60 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="gaPhone" className="text-white/45 text-xs font-semibold tracking-wider uppercase">
                  Phone
                </label>
                <input
                  id="gaPhone" name="phone" type="tel" required
                  value={form.phone} onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#D4AF37]/60 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="gaMessage" className="text-white/45 text-xs font-semibold tracking-wider uppercase">
                  Message <span className="text-white/25 normal-case">(optional)</span>
                </label>
                <textarea
                  id="gaMessage" name="message" rows={3}
                  value={form.message} onChange={handleChange}
                  placeholder="Briefly describe your concern"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#D4AF37]/60 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full !rounded-xl justify-center" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Send Now →
              </button>
              <p className="text-white/30 text-[11px] text-center leading-relaxed">
                Sent directly to Rohit Sharmaji via WhatsApp — kept confidential.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
