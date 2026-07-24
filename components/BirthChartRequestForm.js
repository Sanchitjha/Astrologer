'use client';

import { useState } from 'react';

export default function BirthChartRequestForm({ toolName, extraFieldLabel, extraFieldOptions, ctaLabel }) {
  const [form, setForm] = useState({ name: '', dob: '', tob: '', pob: '', extra: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = [
      `*${toolName} Request*`,
      `Name: ${form.name}`,
      `Date of Birth: ${form.dob}`,
      form.tob && `Time of Birth: ${form.tob}`,
      `Place of Birth: ${form.pob}`,
      extraFieldLabel && form.extra && `${extraFieldLabel}: ${form.extra}`,
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
          Rohit Sharmaji will personally review your birth details and reply with your recommendation.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', dob: '', tob: '', pob: '', extra: '' }); }}
          className="btn-outline-gold !py-2 !px-6 text-sm"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
      <p className="text-[#2A1408]/55 text-sm leading-relaxed">
        This calculator requires an accurate reading of your birth chart — Moon sign, Nakshatra, and
        planetary positions — for a genuine result. Share your birth details below and Rohit Sharmaji
        will personally calculate and send you the correct recommendation.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="bcrName" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="bcrName" name="name" type="text" required
            value={form.name} onChange={handleChange}
            placeholder="Your full name"
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="bcrDob" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Date of Birth <span className="text-red-400">*</span>
          </label>
          <input
            id="bcrDob" name="dob" type="date" required
            value={form.dob} onChange={handleChange}
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors [color-scheme:light]"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="bcrTob" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Time of Birth <span className="text-[#2A1408]/35 normal-case">(if known)</span>
          </label>
          <input
            id="bcrTob" name="tob" type="time"
            value={form.tob} onChange={handleChange}
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors [color-scheme:light]"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="bcrPob" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Place of Birth <span className="text-red-400">*</span>
          </label>
          <input
            id="bcrPob" name="pob" type="text" required
            value={form.pob} onChange={handleChange}
            placeholder="City, State"
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
          />
        </div>
      </div>

      {extraFieldLabel && (
        <div className="space-y-1.5">
          <label htmlFor="bcrExtra" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            {extraFieldLabel}
          </label>
          <select
            id="bcrExtra" name="extra"
            value={form.extra} onChange={handleChange}
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
          >
            <option value="">Select (optional)</option>
            {extraFieldOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      )}

      <button type="submit" className="btn-gold w-full !rounded-xl" style={{ fontFamily: 'var(--font-cinzel)' }}>
        {ctaLabel}
      </button>

      <p className="text-[#2A1408]/38 text-xs text-center">
        Your details are sent directly to Rohit Sharmaji via WhatsApp and kept confidential.
      </p>
    </form>
  );
}
