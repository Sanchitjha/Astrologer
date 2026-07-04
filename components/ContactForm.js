'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    tob: '',
    pob: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    const text = [
      `*New Consultation Request*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.dob && `Date of Birth: ${form.dob}`,
      form.tob && `Time of Birth: ${form.tob}`,
      form.pob && `Place of Birth: ${form.pob}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = `https://wa.me/917600010811?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-10 text-center space-y-4">
        <span className="text-5xl block">✅</span>
        <h3
          className="text-[#9E7016] text-xl font-bold"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          Message Sent!
        </h3>
        <p className="text-[#2A1408]/60 text-sm">
          Thank you for reaching out. Rohit Sharmaji will get back to you soon.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', phone: '', email: '', dob: '', tob: '', pob: '', message: '' });
          }}
          className="btn-outline-gold !py-2 !px-6 text-sm"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 space-y-5">
      <h3
        className="text-[#9E7016] font-bold text-lg text-center"
        style={{ fontFamily: 'var(--font-cinzel)' }}
      >
        Book Your Consultation
      </h3>
      <p className="text-[#2A1408]/58 text-xs text-center">
        Fill out the form below and we will connect with you shortly.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email address"
          className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="dob" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Date of Birth
          </label>
          <input
            id="dob"
            name="dob"
            type="date"
            value={form.dob}
            onChange={handleChange}
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors [color-scheme:light]"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="tob" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Time of Birth
          </label>
          <input
            id="tob"
            name="tob"
            type="time"
            value={form.tob}
            onChange={handleChange}
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors [color-scheme:light]"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="pob" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Place of Birth
          </label>
          <input
            id="pob"
            name="pob"
            type="text"
            value={form.pob}
            onChange={handleChange}
            placeholder="City, State"
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
          Your Message / Question <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your concern or question..."
          className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="btn-gold w-full !rounded-xl"
        style={{ fontFamily: 'var(--font-cinzel)' }}
      >
        {sending ? 'Sending...' : '📩 Submit Consultation Request'}
      </button>

      <p className="text-[#2A1408]/42 text-[11px] text-center">
        Your information is kept completely confidential. For Kundali reading, please provide accurate birth details.
      </p>
    </form>
  );
}
