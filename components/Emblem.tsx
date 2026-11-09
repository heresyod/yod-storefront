/* eslint-disable @next/next/no-img-element */
/* The Emblem section from the coming-soon site, using the original vulture artwork. */
export default function Emblem() {
  return (
    <section className="section emblem-section" aria-label="The Emblem">
      <div className="hero-visual" aria-hidden="true">
        <div className="glow" />
        <svg className="crest-ring" viewBox="0 0 400 400">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(203,181,142,0)" />
              <stop offset="20%" stopColor="rgba(203,181,142,0.6)" />
              <stop offset="50%" stopColor="rgba(203,181,142,0.95)" />
              <stop offset="80%" stopColor="rgba(203,181,142,0.4)" />
              <stop offset="100%" stopColor="rgba(203,181,142,0)" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="196" />
          <circle className="inner" cx="200" cy="200" r="178" />
        </svg>
        <div className="emblem">
          <img src="/brand/vulture.png" alt="" width={811} height={900} />
        </div>
        <div className="caption">
          <span className="label">The Emblem</span>
          <span className="serif">The vulture.</span>
          <span className="sub">Crest of the first collection</span>
        </div>
        <div className="num">
          <span className="idx">01</span>
          <span className="divider" />
          <span className="total">of 03</span>
        </div>
      </div>
    </section>
  );
}
