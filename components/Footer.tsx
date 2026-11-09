import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-iron">
      {/* Early-access band — verbatim launch copy */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="brand-label text-fog mb-4">Early access</div>
            <p className="font-display text-4xl md:text-6xl text-bone leading-[1.05]">
              Be first to <em className="not-italic italic">wear it.</em>
            </p>
            <p className="mt-6 text-fog max-w-md leading-relaxed">
              Leave your email and you'll hear from us once, on launch day,
              before the drop goes public.
            </p>
          </div>

          <div className="md:col-span-5 md:pl-10 flex flex-col justify-end">
            <NewsletterForm />
            <p className="mt-4 brand-label text-fog">
              One email from us when we launch. Nothing else.
            </p>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="border-t border-iron">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="font-display text-4xl text-bone">YOD</div>
            <p className="brand-label text-fog mt-2">Wear Your Definition</p>
            <p className="mt-6 text-fog text-sm max-w-xs leading-relaxed">
              Luxury-inspired streetwear brand built for the bold, the creators,
              and the visionaries.
            </p>
          </div>

          <LinkCol
            title="Company"
            links={[
              ['About YOD', '#about'],
              ['Our story', '#about'],
              ['Press', '#press']
            ]}
          />
          <LinkCol
            title="Shop"
            links={[
              ['Drop 01', '#drops'],
              ['Size guide', '#size-guide'],
              ['Shipping', '#shipping'],
              ['Returns', '#returns']
            ]}
          />
          <LinkCol
            title="Follow us"
            links={[
              ['Instagram', 'https://www.instagram.com/yod.definition/'],
              ['Contact', 'mailto:hello@theyod.com']
            ]}
          />
        </div>
      </div>

      {/* Base — verbatim launch footer */}
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
