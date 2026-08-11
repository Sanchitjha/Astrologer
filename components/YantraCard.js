import Link from 'next/link';
import Image from 'next/image';
import { formatINR } from '@/lib/utils';

const categoryColors = {
  'premium-shaligram': 'bg-purple-100 text-purple-800 border-purple-300',
  'pyrite-frame':      'bg-amber-100 text-amber-800 border-amber-300',
  'standard':          'bg-blue-100 text-blue-800 border-blue-300',
};

const categoryLabels = {
  'premium-shaligram': 'Premium',
  'pyrite-frame':      'Pyrite',
  'standard':          'Standard',
};

export default function YantraCard({ id, slug, name, originalPrice, salePrice, discountPercent, productUrl, category, photo }) {
  return (
    <article className="glass-card rounded-2xl overflow-hidden flex flex-col group">
      {/* Yantra visual */}
      <div
        className="aspect-square flex items-center justify-center relative border-b border-[#D4AF37]/10"
        style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(204,0,0,0.04) 100%)' }}
      >
        {discountPercent > 0 && (
          <span className="absolute top-2.5 right-2.5 bg-[#C1102E] text-white text-[10px] font-black px-2 py-0.5 rounded-full z-10 shadow">
            {discountPercent}% OFF
          </span>
        )}
        {photo ? (
          <div className="absolute inset-3">
            <Image
              src={photo}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain"
            />
          </div>
        ) : (
          <span
            className="text-6xl text-[#9E7016]/40 group-hover:text-[#9E7016]/70 transition-colors duration-500 select-none float-anim"
            aria-hidden="true"
            style={{ fontFamily: 'var(--font-devanagari)' }}
          >
            ॐ
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Category badge */}
        <span className={`self-start text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColors[category] || 'bg-white/10 text-[#2A1408]/50 border-white/10'}`}>
          {categoryLabels[category] || category}
        </span>

        <h3 className="text-[#2A1408]/85 text-sm font-semibold leading-snug line-clamp-2 flex-1">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-[#C1102E] font-black text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
            {formatINR(salePrice)}
          </span>
          {originalPrice !== salePrice && (
            <span className="text-[#2A1408]/48 text-xs line-through">{formatINR(originalPrice)}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/yantras/${slug}`}
            className="flex-1 text-center py-2 px-3 rounded-xl border border-[#D4AF37]/25 text-[#9E7016]/70 hover:border-[#D4AF37]/60 hover:text-[#9E7016] text-xs font-medium transition-all"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Details
          </Link>
          <a
            href={productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-3 rounded-xl bg-gradient-to-r from-[#C1102E] to-[#8A0A20] hover:from-[#E11432] hover:to-[#A00C26] text-white text-xs font-bold transition-all"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Buy Now →
          </a>
        </div>
      </div>
    </article>
  );
}
