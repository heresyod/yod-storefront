'use client';

import { useState } from 'react';
import { subscribeToDropAlerts } from '@/lib/api';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const r = await subscribeToDropAlerts(email);
      setStatus(r.ok ? 'ok' : 'err');
    } catch {
      setStatus('err');
    }
  };

  return (
    <section className="section notify" id="notify">
      <div className="inner">
        <span className="small" style={{ color: 'var(--gold-soft)' }}>Early access</span>
        <h2 className="serif" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '.08em', marginTop: '.9rem' }}>
          Be first to wear the next drop
        </h2>
        <p style={{ color: 'var(--silver-dim)', marginTop: '1rem', lineHeight: 1.8 }}>
          Leave your email and you&apos;ll hear from us once, before the next drop goes public.
        </p>
        {status === 'ok' ? (
          <div className="thanks">You&apos;re on the list. We&apos;ll be in touch before the drop.</div>
        ) : (
          <form onSubmit={submit}>
            <input
              type="email"
              required
              maxLength={120}
              autoComplete="email"
              placeholder="Your email"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-gold" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending' : 'Notify me'}
            </button>
          </form>
        )}
        {status === 'err' && <div className="err" role="alert">Something went wrong. Please try again.</div>}
        {status !== 'ok' && <small>One email from us per drop. Nothing else.</small>}
      </div>
    </section>
  );
}
