/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="wordmark reveal d1" role="img" aria-label="YOD — Wear Your Definition">
          <img
            className="wm-img"
            src="/brand/yod-wordmark.webp"
            alt="YOD — Wear Your Definition"
            width={1200}
            height={378}
            fetchPriority="high"
          />
          <span className="tag">Wear your definition</span>
          <svg className="chev" viewBox="0 0 48 26" aria-hidden="true">
            <path
              d="M2 2 24 14 46 2M2 12 24 24 46 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="reveal d2">
          Something is being <em>defined.</em>
        </h1>
        <p className="reveal d3">
          Premium oversized t‑shirts, heavyweight fabric, and a cut that holds its line. The first
          YOD drop is here. Those who define their own world get in first.
        </p>
        <div className="actions reveal d4">
          <a className="btn btn-gold" href="#drops">
            Shop the drop
          </a>
          <a className="btn btn-line" href="https://www.instagram.com/yod.definition/" target="_blank" rel="noopener noreferrer">
            Follow the drop
          </a>
        </div>
        <div className="meta small reveal d4">
          <div><b>01</b>First drop</div>
          <div><b>03</b>Signature pieces</div>
          <div><b>100+</b>Designs to come</div>
        </div>
      </div>
    </section>
  );
}
