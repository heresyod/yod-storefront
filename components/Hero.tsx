'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] md:min-h-screen flex items-end overflow-hidden noise bg-ink">
      {/* Background gradient — stand-in for hero image when assets land */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 70% 30%, #1A1A1A 0%, #000 60%), linear-gradient(180deg, #050505 0%, #000 100%)'
          }}
        />
        {/* Big faint emblem */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
          <VultureEmblem className="w-[min(90vw,900px)] h-auto text-bone" />
        </div>
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.85) 100%)'
          }}
        />
      </div>

      <div className="relative w-full max-w-[1500px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-32">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="brand-label text-accent mb-6">Drop 01 — Live</div>
            <h1 className="font-display text-display-xl text-bone">
              Something is being <em className="not-italic text-accent">defined.</em>
            </h1>
            <p className="mt-8 max-w-xl text-bone/70 text-lg leading-relaxed">
              Six heavyweight pieces. 240 GSM combed cotton. Architectural cuts drafted
              for the ones who draw their own line. The first YOD drop is here.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#drops" className="btn-primary">
                Shop Drop 01
              </Link>
              <Link href="#dna" className="btn-ghost">
                Product DNA
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 md:text-right">
            <dl className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-8 border-t border-iron pt-8">
              <Stat n="01" label="First drop" />
              <Stat n="06" label="Signature pieces" />
              <Stat n="240" label="GSM heavyweight" />
            </dl>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 brand-label text-fog flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-fog to-transparent" />
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-4xl md:text-5xl text-bone leading-none">{n}</dt>
      <dd className="brand-label text-fog mt-2">{label}</dd>
    </div>
  );
}

function VultureEmblem({ className }: { className?: string }) {
  // Simplified geometric stand-in for the brand mark.
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" stroke="currentColor" strokeWidth="0.8">
      <circle cx="200" cy="200" r="190" strokeDasharray="2 4" />
      <path
        d="M200 60 L260 160 L340 180 L270 210 L300 310 L200 250 L100 310 L130 210 L60 180 L140 160 Z"
        strokeLinejoin="round"
      />
      <text
        x="200"
        y="370"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="4"
        fill="currentColor"
        stroke="none"
      >
        WEAR YOUR DEFINITION
      </text>
    </svg>
  );
}
