'use client';

import { useState } from 'react';
import Link from 'next/link';

const ZODIAC_RANGES = [
  { sign: 'capricorn', label: 'Capricorn', start: [12, 22], end: [1, 19] },
  { sign: 'aquarius', label: 'Aquarius', start: [1, 20], end: [2, 18] },
  { sign: 'pisces', label: 'Pisces', start: [2, 19], end: [3, 20] },
  { sign: 'aries', label: 'Aries', start: [3, 21], end: [4, 19] },
  { sign: 'taurus', label: 'Taurus', start: [4, 20], end: [5, 20] },
  { sign: 'gemini', label: 'Gemini', start: [5, 21], end: [6, 20] },
  { sign: 'cancer', label: 'Cancer', start: [6, 21], end: [7, 22] },
  { sign: 'leo', label: 'Leo', start: [7, 23], end: [8, 22] },
  { sign: 'virgo', label: 'Virgo', start: [8, 23], end: [9, 22] },
  { sign: 'libra', label: 'Libra', start: [9, 23], end: [10, 22] },
  { sign: 'scorpio', label: 'Scorpio', start: [10, 23], end: [11, 21] },
  { sign: 'sagittarius', label: 'Sagittarius', start: [11, 22], end: [12, 21] },
];

function getZodiacSign(month, day) {
  return ZODIAC_RANGES.find(({ start, end }) => {
    const [sm, sd] = start;
    const [em, ed] = end;
    if (sm === em) return month === sm && day >= sd && day <= ed;
    if (sm < em) return (month === sm && day >= sd) || (month === em && day <= ed);
    // wraps year end (Capricorn)
    return (month === sm && day >= sd) || (month === em && day <= ed);
  }) || ZODIAC_RANGES[0];
}

const PURPOSES = [
  { key: 'wealth', label: 'Wealth & Money', slug: 'pyrite', name: 'Pyrite Bracelet' },
  { key: 'love', label: 'Love & Relationships', slug: 'rose-quartz', name: 'Rose Quartz Bracelet' },
  { key: 'protection', label: 'Protection from Negativity', slug: 'cats-eye', name: "Cat's Eye Bracelet" },
  { key: 'peace', label: 'Peace & Stress Relief', slug: 'amethyst', name: 'Amethyst Bracelet' },
  { key: 'confidence', label: 'Confidence & Career', slug: 'tiger-eye', name: 'Tiger Eye Bracelet' },
  { key: 'health', label: 'Health & Energy', slug: 'sunstone', name: 'Sunstone Bracelet' },
  { key: 'balance', label: 'Overall Balance', slug: '7-chakra', name: '7 Chakra Bracelet' },
];

export default function BraceletCalculator() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [purpose, setPurpose] = useState('');
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!dob || !purpose) return;

    const [year, month, day] = dob.split('-').map(Number);
    const zodiac = getZodiacSign(month, day);
    const purposeMatch = PURPOSES.find((p) => p.key === purpose);

    setResult({ zodiac, purposeMatch });
  }

  return (
    <div className="glass-card rounded-2xl p-8 space-y-6">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="bcName" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
              Full Name
            </label>
            <input
              id="bcName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="bcDob" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
              Date of Birth <span className="text-red-400">*</span>
            </label>
            <input
              id="bcDob"
              type="date"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors [color-scheme:light]"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="bcPurpose" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            What Are You Seeking? <span className="text-red-400">*</span>
          </label>
          <select
            id="bcPurpose"
            required
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
          >
            <option value="">Select your goal</option>
            {PURPOSES.map((p) => (
              <option key={p.key} value={p.key}>{p.label}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-gold w-full !rounded-xl" style={{ fontFamily: 'var(--font-cinzel)' }}>
          🔮 Find My Bracelet
        </button>
      </form>

      {result && (
        <div className="text-center bg-[#D4AF37]/8 rounded-xl p-6 space-y-3">
          <p className="text-[#2A1408]/50 text-xs uppercase tracking-wider">
            {name ? `${name}, your` : 'Your'} recommended match
          </p>
          <p className="text-2xl font-black text-[#C1102E]" style={{ fontFamily: 'var(--font-cinzel)' }}>
            {result.purposeMatch.name}
          </p>
          <p className="text-[#2A1408]/55 text-sm">
            Paired with your <strong>{result.zodiac.label}</strong> sign&apos;s natural energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href={`/bracelets/crystal/${result.purposeMatch.slug}`} className="btn-gold !py-2.5 !px-6 text-sm" style={{ fontFamily: 'var(--font-cinzel)' }}>
              View {result.purposeMatch.name} →
            </Link>
            <Link href={`/bracelets/zodiac/${result.zodiac.sign}`} className="btn-outline-gold !py-2.5 !px-6 text-sm" style={{ fontFamily: 'var(--font-cinzel)' }}>
              View {result.zodiac.label} Bracelet →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
