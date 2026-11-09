import YodMark from './YodMark';

const COLS: { title: string; links: [string, string][] }[] = [
  { title: 'Shop', links: [['Drop 01', '#drops'], ['Size guide', '#size-guide'], ['Shipping', '#shipping'], ['Returns', '#returns']] },
  { title: 'Company', links: [['About YOD', '#about'], ['Our story', '#about']] },
  { title: 'Follow us', links: [['Instagram', 'https://www.instagram.com/yod.definition/'], ['Contact', 'mailto:hello@theyod.com']] }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="fgrid">
        <div>
          <div className="brand">
            <YodMark />
          </div>
          <p className="about">Luxury‑inspired streetwear brand built for the bold, the creators, and the visionaries.</p>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <h4>{c.title}</h4>
            <ul>
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="fbar">
        <span>© 2026 YOD · theyod.com</span>
        <span>Designed for those who wear their definition.</span>
      </div>
    </footer>
  );
}
