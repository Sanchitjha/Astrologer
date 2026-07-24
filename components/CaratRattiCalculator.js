'use client';

import { useState, useMemo } from 'react';

const CARAT_PER_RATTI = 0.91;

export default function CaratRattiCalculator() {
  const [value, setValue] = useState('');
  const [direction, setDirection] = useState('carat-to-ratti');

  const result = useMemo(() => {
    const n = parseFloat(value);
    if (isNaN(n) || n < 0) return null;
    if (direction === 'carat-to-ratti') {
      const ratti = n / CARAT_PER_RATTI;
      return { value: ratti.toFixed(3), unit: 'Ratti', mg: (n * 200).toFixed(2) };
    }
    const carat = n * CARAT_PER_RATTI;
    return { value: carat.toFixed(3), unit: 'Carat', mg: (n * 182.25).toFixed(2) };
  }, [value, direction]);

  return (
    <div className="glass-card rounded-2xl p-8 space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 space-y-1.5">
          <label htmlFor="crValue" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Weight Value
          </label>
          <input
            id="crValue"
            type="number"
            min="0"
            step="any"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g. 5"
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] placeholder:text-[#2A1408]/42 focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
          />
        </div>

        <div className="flex-1 space-y-1.5">
          <label htmlFor="crDirection" className="text-[#2A1408]/50 text-xs font-semibold tracking-wider uppercase">
            Convert
          </label>
          <select
            id="crDirection"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full bg-[#FBF3E0] border border-[#9E7016]/30 rounded-xl px-4 py-3 text-sm text-[#2A1408] focus:border-[#C1102E]/60 focus:outline-none focus:ring-1 focus:ring-[#C1102E]/20 transition-colors"
          >
            <option value="carat-to-ratti">Carat → Ratti</option>
            <option value="ratti-to-carat">Ratti → Carat</option>
          </select>
        </div>
      </div>

      {result ? (
        <div className="text-center bg-[#D4AF37]/8 rounded-xl p-6">
          <p className="text-[#2A1408]/50 text-xs uppercase tracking-wider mb-1">Result</p>
          <p className="text-3xl font-black text-[#C1102E]" style={{ fontFamily: 'var(--font-cinzel)' }}>
            {result.value} {result.unit}
          </p>
          <p className="text-[#2A1408]/45 text-xs mt-1">≈ {result.mg} mg</p>
        </div>
      ) : (
        <p className="text-center text-[#2A1408]/40 text-sm py-4">Enter a weight value to see the conversion.</p>
      )}

      <p className="text-[#2A1408]/38 text-xs text-center">
        Based on the standard: 1 Ratti = 0.91 Carat = 182.25 mg (pakki ratti)
      </p>
    </div>
  );
}
