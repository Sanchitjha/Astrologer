import Link from 'next/link';
import { formatINR } from '@/lib/utils';

const categoryColors = {
  'premium-shaligram': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'pyrite-frame':      'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'standard':          'bg-blue-500/20 text-blue-300 border-blue-500/30',
};

const categoryLabels = {
  'premium-shaligram': 'Premium',
  'pyrite-frame':      'Pyrite',
  'standard':          'Standard',
};

export default function YantraCard({ id, slug, name, originalPrice, salePrice, discountPercent, productUrl, category }) {
  return (
    <article className="glass-card rounded-2xl overflow-hidden flex flex-col group">
      {/* Yantra visual */}
      <div
        className="h-36 flex items-center justify-center relative border-b border-[#D4AF37]/10"
        style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(204,0,0,0.04) 100%)' }}
      >
        {discountPercent > 0 && (
          <span className="absolute top-2.5 right-2.5 bg-[#CC0000] text-white text-[10px] font-black px-2 py-0.5 rounded-full z-10 shadow">
            {discountPercent}% OFF
          </span>
        )}
        <span
          className="text-6xl text-[#D4AF37]/40 group-hover:text-[#D4AF37]/70 transition-colors duration-500 select-none float-anim"
          aria-hidden="true"
          style={{ fontFamily: 'var(--font-devanagari)' }}
        >
          ॐ
        </span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Category badge */}
        <span className={`self-start text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColors[category] || 'bg-white/10 text-white/50 border-white/10'}`}>
          {categoryLabels[category] || category}
        </span>

        <h3 className="text-white/85 text-sm font-semibold leading-snug line-clamp-2 flex-1">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-[#FFD700] font-black text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
            {formatINR(salePrice)}
          </span>
          {originalPrice !== salePrice && (
            <span className="text-white/48 text-xs line-through">{formatINR(originalPrice)}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/yantras/${slug}`}
            className="flex-1 text-center py-2 px-3 rounded-xl border border-[#D4AF37]/25 text-[#D4AF37]/70 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] text-xs font-medium transition-all"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Details
          </Link>
          <a
            href={productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-3 rounded-xl bg-gradient-to-r from-[#CC0000] to-[#800000] hover:from-[#E00000] hover:to-[#990000] text-white text-xs font-bold transition-all"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Buy Now →
          </a>
        </div>
      </div>
    </article>
  );
}
