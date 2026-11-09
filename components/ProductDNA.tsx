const DNA = [
  {
    code: '01',
    title: '240 GSM Combed Cotton',
    body:
      'Heavyweight knit that remembers its shape. No sag, no slump — the hem falls where you left it, wash after wash.'
  },
  {
    code: '02',
    title: 'Architectural Cut',
    body:
      'Drop shoulders, chest and back panel seams, considered proportions. The piece speaks before any logo does.'
  },
  {
    code: '03',
    title: 'Ribbed Neckline',
    body:
      'Double-stitched rib collar bound to resist the stretch-out that kills most oversized tees in a season.'
  },
  {
    code: '04',
    title: 'DTF Graphic Durability',
    body:
      'Direct-to-film prints bonded under heat. Rated for 50+ washes without cracking, peeling, or fade.'
  }
];

export default function ProductDNA() {
  return (
    <section id="dna" className="relative py-24 md:py-32 border-t border-iron bg-ink">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <div className="brand-label text-fog mb-4">Product DNA</div>
            <h2 className="font-display text-display-lg text-bone leading-[0.95]">
              Built as <em className="not-italic italic">architecture.</em>
            </h2>
            <p className="mt-6 text-fog leading-relaxed">
              Silhouettes shaped by construction, not graphics. Drafted as
              architecture so the piece speaks before any logo does.
            </p>
          </div>

          <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            {DNA.map((d) => (
              <div key={d.code} className="border-t border-iron pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-bone/60 text-sm">{d.code}</span>
                  <h3 className="font-display text-2xl text-bone">{d.title}</h3>
                </div>
                <p className="mt-3 text-fog text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
