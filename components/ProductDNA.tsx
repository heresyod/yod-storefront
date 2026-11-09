const DNA = [
  { code: '01', title: '240 GSM combed cotton', body: 'Heavyweight knit that remembers its shape. The hem falls where you left it, wash after wash.' },
  { code: '02', title: 'Architectural cut', body: 'Drop shoulders, panel seams, considered proportions. The piece speaks before any logo does.' },
  { code: '03', title: 'Ribbed neckline', body: 'Double-stitched rib collar bound to resist the stretch-out that kills most oversized tees.' },
  { code: '04', title: 'DTF print durability', body: 'Direct-to-film prints bonded under heat. Rated for 50+ washes without cracking or fade.' }
];

export default function ProductDNA() {
  return (
    <section id="dna" className="section">
      <div className="section-head">
        <span className="small">Product DNA</span>
        <h2>Built as <em>architecture</em></h2>
        <p>Silhouettes shaped by construction, not graphics.</p>
      </div>
      <div className="dna">
        {DNA.map((d) => (
          <div key={d.code}>
            <span className="idx">{d.code}</span>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
