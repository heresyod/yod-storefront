const STEPS = [
  { code: '01', title: 'Tap', body: 'Hold your phone near the inner seam. No app, no sign-in.' },
  { code: '02', title: 'Verify', body: "The chip signs a cryptographic handshake. Counterfeits don't pass." },
  { code: '03', title: 'Unlock', body: 'Drop story, care guide and provenance — tied to this exact piece.' }
];

export default function NFCSection() {
  return (
    <section id="nfc" className="section">
      <div className="section-head">
        <span className="small">Connected apparel</span>
        <h2>Every piece carries <em>a signal</em></h2>
        <p>A passive NFC tag is stitched into the inner seam of every YOD garment. Tap it with any phone to authenticate the piece.</p>
      </div>
      <div className="cards">
        {STEPS.map((s) => (
          <div key={s.code} className="card">
            <div className="body" style={{ borderTop: 0 }}>
              <span className="serif" style={{ fontStyle: 'italic', fontSize: '2.4rem', color: 'var(--gold-soft)', lineHeight: 1 }}>
                {s.code}
              </span>
              <h3 style={{ marginTop: '1.2rem' }}>{s.title}</h3>
              <p className="sub">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="small" style={{ textAlign: 'center', color: 'var(--mist)', marginTop: '3rem' }}>
        Passive · NTAG 424 DNA · No battery · Lifetime of garment
      </p>
    </section>
  );
}
