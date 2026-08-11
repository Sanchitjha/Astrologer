'use client';

import { useState } from 'react';

export default function QuickResponseForm({ toolName, buttonLabel = 'Contact Us Now', fields = [] }) {
  const includeDob = fields.includes('dob');
  const includeTob = fields.includes('tob');
  const includePob = fields.includes('pob');

  const [form, setForm] = useState({ name: '', phone: '', dob: '', tob: '', pob: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = [
      `*${toolName} — Quick Response Request*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      includeDob && form.dob && `Date of Birth: ${form.dob}`,
      includeTob && form.tob && `Time of Birth: ${form.tob}`,
      includePob && form.pob && `Place of Birth: ${form.pob}`,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/917600010811?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-8 text-center space-y-4">
        <span className="text-5xl block">✅</span>
        <h3 className="text-[#9E7016] text-lg font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>
          Request Sent!
        </h3>
        <p className="text-[#2A1408]/60 text-sm">
          Rohit Sharmaji will personally get back to you shortly on WhatsApp.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', dob: '', tob: '', pob: '' }); }}
          className="btn-outline-gold !py-2 !px-6 text-sm"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-4">
      <h3 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
        Get Quick Response
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor={`qrf-name-${toolName}`} className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id={`qrf-name-${toolName}`} name="name" type="text" required
            value={form.name} onChange={handleChange}
            placeholder="Your full name"
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={`qrf-phone-${toolName}`} className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            id={`qrf-phone-${toolName}`} name="phone" type="tel" required
            value={form.phone} onChange={handleChange}
            placeholder="Your phone number"
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
          />
        </div>
      </div>

      {(includeDob || includeTob || includePob) && (
        <div className="grid sm:grid-cols-3 gap-4">
          {includeDob && (
            <div className="space-y-1.5">
              <label htmlFor={`qrf-dob-${toolName}`} className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
                Date of Birth
              </label>
              <input
                id={`qrf-dob-${toolName}`} name="dob" type="date"
                value={form.dob} onChange={handleChange}
                className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors [color-scheme:light]"
              />
            </div>
          )}
          {includeTob && (
            <div className="space-y-1.5">
              <label htmlFor={`qrf-tob-${toolName}`} className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
                Time of Birth
              </label>
              <input
                id={`qrf-tob-${toolName}`} name="tob" type="time"
                value={form.tob} onChange={handleChange}
                className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors [color-scheme:light]"
              />
            </div>
          )}
          {includePob && (
            <div className="space-y-1.5">
              <label htmlFor={`qrf-pob-${toolName}`} className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
                Place of Birth
              </label>
              <input
                id={`qrf-pob-${toolName}`} name="pob" type="text"
                value={form.pob} onChange={handleChange}
                placeholder="City, State"
                className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
              />
            </div>
          )}
        </div>
      )}

      <button type="submit" className="btn-gold w-full !rounded-xl justify-center" style={{ fontFamily: 'var(--font-cinzel)' }}>
        {buttonLabel} →
      </button>
      <p className="text-[#2A1408]/38 text-xs text-center">
        Sent directly to Rohit Sharmaji via WhatsApp and kept confidential.
      </p>
    </form>
  );
}
