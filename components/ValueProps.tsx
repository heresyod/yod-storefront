const PROPS = [
  { title: 'Premium quality', body: 'Crafted with perfection' },
  { title: '100+ unique designs', body: 'For every kind of you' },
  { title: 'Secure payments', body: 'Safe. Fast. Reliable.' },
  { title: 'Worldwide shipping', body: 'Delivering everywhere' }
];

export default function ValueProps() {
  return (
    <section className="border-t border-iron bg-ink">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {PROPS.map((p) => (
            <div key={p.title} className="text-center md:text-left">
              <div className="brand-label text-bone">{p.title}</div>
              <p className="text-fog text-sm mt-2">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
