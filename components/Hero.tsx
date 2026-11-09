'use client';

import Link from 'next/link';
import VultureEmblem from './VultureEmblem';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] md:min-h-screen flex items-end overflow-hidden noise bg-ink">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 70% 30%, #141414 0%, #000 60%), linear-gradient(180deg, #050505 0%, #000 100%)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
          <VultureEmblem className="w-[min(90vw,920px)] h-auto text-bone" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.9) 100%)'
          }}
        />
      </div>

      <div className="relative w-full max-w-[1500px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-32">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="brand-label text-fog mb-6">Launching soon</div>
            <h1 className="font-display text-display-xl text-bone">
              Something is being <em className="not-italic italic">defined.</em>
            </h1>
            <p className="mt-8 max-w-xl text-bone/70 text-lg leading-relaxed">
              Premium oversized t-shirts, heavyweight fabric, and a cut that holds
              its line. The first YOD drop lands on theyod.com soon. Those who
              define their own world get in first.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#drops" className="btn-primary">
                Shop the drop
              </Link>
              <a
                href="https://www.instagram.com/yod.definition/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Follow the drop
              </a>
            </div>
          </div>

          <div className="md:col-span-4 md:text-right">
            <dl className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-8 border-t border-iron pt-8">
              <Stat n="01" label="First drop" />
              <Stat n="03" label="Signature pieces" />
              <Stat n="100+" label="Designs to come" />
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
