'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/data/yantras';
import YantraCard from './YantraCard';

export default function YantraGrid({ yantras, preview = false }) {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? yantras : yantras.filter((y) => y.category === active);
  const shown = preview ? filtered.slice(0, 8) : filtered;

  return (
    <section className="py-20 px-4" style={{ background: preview ? '#FBF3E0' : 'transparent' }}>
      <div className="max-w-7xl mx-auto">

        {preview && (
          <div className="text-center mb-12">
            <p className="section-label mb-3">Sacred Instruments</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2A1408]" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Our <span className="text-[#9E7016]">Yantra</span> Collection
            </h2>
            <p className="text-[#2A1408]/58 text-sm mt-3 max-w-xl mx-auto">
              Authentic, energised Yantras sourced from GemsMantra. Each yantra is consecrated with Vedic mantras.
            </p>
            <div className="gold-divider max-w-xs mx-auto mt-6">
              <span className="text-[#9E7016] text-lg shrink-0" style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
            </div>
          </div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                active === cat.key
                  ? 'bg-gradient-to-r from-[#C1102E] to-[#8A0A20] text-white border-[#C1102E] shadow-[0_4px_14px_rgba(193,16,46,0.35)]'
                  : 'bg-white text-[#2A1408]/70 border-[#9E7016]/30 hover:border-[#C1102E]/50 hover:text-[#C1102E]'
              }`}
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {shown.map((yantra) => (
            <YantraCard key={yantra.id} {...yantra} />
          ))}
        </div>

        {/* Preview CTA */}
        {preview && (
          <div className="text-center mt-12">
            <Link href="/yantras" className="btn-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              View All {yantras.length} Yantras →
            </Link>
          </div>
        )}

        <p className="text-center text-[#2A1408]/38 text-xs mt-10">
          Products powered by{' '}
          <a
            href="https://gemsmantra.com/collections/yantras"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#9E7016] transition-colors"
          >
            GemsMantra.com
          </a>
          . Prices as of June 2026.
        </p>
      </div>
    </section>
  );
}
