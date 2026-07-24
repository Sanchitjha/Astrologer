'use client';

import { useState } from 'react';

export default function TrackOrderForm() {
  const [orderId, setOrderId] = useState('');
  const [awb, setAwb] = useState('');

  const canSubmit = orderId.trim() || awb.trim();

  const waHref = `https://wa.me/917600010811?text=${encodeURIComponent(
    `Namaste, I would like to track my order.\nOrder ID: ${orderId || '(not provided)'}\nAWB Number: ${awb || '(not provided)'}`
  )}`;

  return (
    <div className="glass-card rounded-2xl p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block space-y-1.5">
          <span className="text-[#2A1408]/70 text-xs font-semibold">Order ID</span>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="e.g. #JS10234"
            className="w-full rounded-xl border border-[#D4AF37]/25 bg-white/60 px-4 py-2.5 text-sm text-[#2A1408] placeholder:text-[#2A1408]/30 focus:outline-none focus:border-[#D4AF37]/60"
          />
          <span className="text-[#2A1408]/40 text-xs">Found in your order confirmation email or SMS</span>
        </label>

        <label className="block space-y-1.5">
          <span className="text-[#2A1408]/70 text-xs font-semibold">AWB (Tracking) Number</span>
          <input
            type="text"
            value={awb}
            onChange={(e) => setAwb(e.target.value)}
            placeholder="e.g. 71234567890"
            className="w-full rounded-xl border border-[#D4AF37]/25 bg-white/60 px-4 py-2.5 text-sm text-[#2A1408] placeholder:text-[#2A1408]/30 focus:outline-none focus:border-[#D4AF37]/60"
          />
          <span className="text-[#2A1408]/40 text-xs">Found in your shipping confirmation email, once dispatched</span>
        </label>
      </div>

      {canSubmit ? (
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full justify-center"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          Track My Order →
        </a>
      ) : (
        <button
          type="button"
          disabled
          className="btn-gold w-full justify-center opacity-40 cursor-not-allowed"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          Track My Order →
        </button>
      )}
      <p className="text-[#2A1408]/40 text-xs text-center leading-relaxed">
        Enter your Order ID or AWB number above — we&apos;ll send it straight to our team on WhatsApp for the latest status.
      </p>
    </div>
  );
}
