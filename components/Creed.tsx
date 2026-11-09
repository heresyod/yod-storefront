import VultureEmblem from './VultureEmblem';

export default function Creed() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 border-t border-iron bg-ash overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-14 md:gap-10 items-center">
        {/* Emblem */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="relative">
            <VultureEmblem className="w-[320px] md:w-[420px] h-auto text-bone/90" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 brand-label text-fog whitespace-nowrap">
              The Emblem · 01 of 03
            </div>
          </div>
        </div>

        {/* Creed copy — verbatim from launch */}
        <div className="md:col-span-7">
          <div className="brand-label text-fog mb-5">The YOD creed</div>
          <h2 className="font-display text-display-lg text-bone leading-[1.05]">
            A quiet rebellion, <em className="not-italic italic">stitched into every seam.</em>
          </h2>
          <p className="mt-8 text-bone/75 text-lg leading-relaxed max-w-xl">
            We build for the ones who stopped chasing trends and started drawing
            their own line. Heavyweight fabric. Architectural cuts. Design stripped
            of noise so what remains is you — and the definition you chose.
          </p>
          <p className="mt-6 brand-label text-fog">The vulture · Crest of the first collection</p>
        </div>
      </div>
    </section>
  );
}
