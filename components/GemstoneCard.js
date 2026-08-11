import Link from 'next/link';
import Image from 'next/image';

export default function GemstoneCard({ slug, name, hindiName, planet, intro, photo }) {
  return (
    <article className="glass-card rounded-2xl overflow-hidden flex flex-col group">
      {/* Visual */}
      <div
        className="aspect-square flex items-center justify-center relative border-b border-[#D4AF37]/10"
        style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(204,0,0,0.04) 100%)' }}
      >
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
            className="text-5xl text-[#9E7016]/40 group-hover:text-[#9E7016]/70 transition-colors duration-500 select-none float-anim"
            aria-hidden="true"
          >
            💎
          </span>
        )}
        <span className="absolute top-2.5 left-2.5 bg-[#2A1408]/80 text-[#F0C64B] text-[10px] font-semibold px-2 py-0.5 rounded-full z-10">
          {planet}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="text-[#2A1408]/85 text-sm font-semibold leading-snug">{name}</h3>
        <p className="text-[#9E7016]/70 text-xs" style={{ fontFamily: 'var(--font-devanagari)' }}>{hindiName}</p>
        <p className="text-[#2A1408]/50 text-xs leading-relaxed line-clamp-2 flex-1">{intro}</p>

        <Link
          href={`/gemstones/${slug}`}
          className="mt-2 text-center py-2 px-3 rounded-xl bg-gradient-to-r from-[#C1102E] to-[#8A0A20] hover:from-[#E11432] hover:to-[#A00C26] text-white text-xs font-bold transition-all"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          View Details →
        </Link>
      </div>
    </article>
  );
}
