'use client';

import { useState } from 'react';
import { gemstoneGroups } from '@/data/gemstones';
import GemstoneCard from './GemstoneCard';

export default function GemstoneGrid({ gemstones }) {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? gemstones : gemstones.filter((g) => g.group === active);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Group filter */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          <button
            onClick={() => setActive('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
              active === 'all'
                ? 'bg-gradient-to-r from-[#C1102E] to-[#8A0A20] text-white border-[#C1102E] shadow-[0_4px_14px_rgba(193,16,46,0.35)]'
                : 'bg-white text-[#2A1408]/70 border-[#9E7016]/30 hover:border-[#C1102E]/50 hover:text-[#C1102E]'
            }`}
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            All Gemstones
          </button>
          {gemstoneGroups.map((g) => (
            <button
              key={g.key}
              onClick={() => setActive(g.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                active === g.key
                  ? 'bg-gradient-to-r from-[#C1102E] to-[#8A0A20] text-white border-[#C1102E] shadow-[0_4px_14px_rgba(193,16,46,0.35)]'
                  : 'bg-white text-[#2A1408]/70 border-[#9E7016]/30 hover:border-[#C1102E]/50 hover:text-[#C1102E]'
              }`}
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((gem) => (
            <GemstoneCard key={gem.slug} {...gem} />
          ))}
        </div>

        <p className="text-center text-[#2A1408]/38 text-xs mt-10">
          Gemstone suitability depends on your individual birth chart. Always consult Rohit Sharmaji
          before wearing any gemstone.
        </p>
      </div>
    </section>
  );
}
