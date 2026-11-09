export default function NFCSection() {
  return (
    <section
      id="nfc"
      className="relative py-28 md:py-36 overflow-hidden border-t border-iron bg-ink"
    >
      {/* Ambient tech backdrop */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(200,169,106,0.08), transparent 70%), #000'
          }}
        />
        <GridPattern />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="brand-label text-accent mb-5">Connected Apparel</div>
          <h2 className="font-display text-display-lg text-bone">
            Every piece carries <em className="not-italic text-accent">a signal.</em>
          </h2>
          <p className="mt-8 text-bone/70 text-lg leading-relaxed">
            A passive NFC tag is stitched into the inner seam of every YOD garment.
            Tap it with any phone to open the drop story, authenticate the piece,
            and unlock what the garment knows.
          </p>
        </div>

        {/* NFC interaction visual */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 md:gap-10">
          <TapCard
            step="01"
            title="Tap"
            body="Hold your phone near the inner seam. No app, no sign-in."
            icon={<TapIcon />}
          />
          <TapCard
            step="02"
            title="Verify"
            body="Chip signs a cryptographic handshake. Counterfeits don't pass."
            icon={<VerifyIcon />}
          />
          <TapCard
            step="03"
            title="Unlock"
            body="Drop story, care guide, resale ledger — tied to this exact piece."
            icon={<UnlockIcon />}
          />
        </div>

        <div className="mt-20 text-center">
          <div className="brand-label text-fog">
            Passive · NXP NTAG 424 DNA · No battery · Lifetime of garment
          </div>
        </div>
      </div>
    </section>
  );
}

function TapCard({
  step,
  title,
  body,
  icon
}: {
  step: string;
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative border border-iron bg-smoke/40 backdrop-blur-sm p-8 md:p-10 group hover:border-accent/50 transition-colors duration-500">
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-accent text-xs">{step}</span>
        <div className="text-bone/60 group-hover:text-accent transition-colors">{icon}</div>
      </div>
      <h3 className="font-display text-3xl text-bone mb-3">{title}</h3>
      <p className="text-fog text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function GridPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#F5F2EC" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

function TapIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M11 20V9a3 3 0 1 1 6 0v8M11 20l-2-3-2 1 5 9h10l2-8-3-1-2 2M14 15h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VerifyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M16 3 4 8v8c0 7 5 11 12 13 7-2 12-6 12-13V8L16 3Z" strokeLinejoin="round" />
      <path d="m11 16 4 4 7-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UnlockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="6" y="14" width="20" height="14" strokeLinejoin="round" />
      <path d="M11 14V9a5 5 0 0 1 10 0" strokeLinecap="round" />
    </svg>
  );
}
