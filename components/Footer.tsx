import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer id="about" className="relative bg-ink border-t border-iron">
      {/* Manifesto band */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="brand-label text-accent mb-4">The YOD creed</div>
            <p className="font-display text-3xl md:text-5xl text-bone leading-[1.1]">
              A house built for the ones who <em className="not-italic text-accent">define</em>,
              not the ones who follow. Heavyweight fabric. Architectural cuts.
              Design stripped of noise so what remains is you.
            </p>
            <p className="mt-10 brand-label text-fog">— Made in India. Worn by intention.</p>
          </div>

          <div className="md:col-span-5 md:pl-10">
            <div className="brand-label text-bone mb-4">Join the drop list</div>
            <p className="text-fog text-sm mb-6 leading-relaxed">
              One email when the next drop lands. No marketing noise, no cross-promo.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="border-t border-iron">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="font-display text-4xl text-bone">YOD</div>
            <p className="brand-label text-fog mt-2">Wear Your Definition</p>
          </div>

          <LinkCol
            title="Shop"
            links={[
              ['Drop 01', '#drops'],
              ['New arrivals', '#drops'],
              ['Size guide', '#size-guide'],
              ['Gift card', '#gift']
            ]}
          />
          <LinkCol
            title="House"
            links={[
              ['About', '#about'],
              ['Our story', '#story'],
              ['Press', '#press'],
              ['NFC Tech', '#nfc']
            ]}
          />
          <LinkCol
            title="Support"
            links={[
              ['Shipping', '#shipping'],
              ['Returns', '#returns'],
              ['Contact', 'mailto:hello@theyod.com'],
              ['Instagram', 'https://www.instagram.com/yod.definition/']
            ]}
          />
        </div>
      </div>

      {/* Base */}
      <div className="border-t border-iron">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="brand-label text-fog">© 2026 YOD · theyod.com</p>
          <p className="brand-label text-fog">Designed for those who wear their definition.</p>
        </div>
      </div>

      {/* Oversized backdrop wordmark */}
      <div aria-hidden className="pointer-events-none overflow-hidden">
        <div className="font-display text-[22vw] leading-none text-smoke text-center select-none -mb-[4vw] -mt-8">
          YOD
        </div>
      </div>
    </footer>
  );
}

function LinkCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="brand-label text-bone mb-5">{title}</div>
      <ul className="space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-fog hover:text-bone text-sm link-underline transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
