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

  if (status === 'ok') {
    return (
      <p className="text-bone/90 text-sm">
        You're on the list. One email when the next drop goes live — nothing else.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 sm:gap-0 w-full max-w-md">
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-transparent border border-iron sm:border-r-0 px-4 py-3 text-bone placeholder:text-fog focus:outline-none focus:border-bone transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-bone text-ink px-6 py-3 brand-label hover:bg-accent transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? '...' : 'Notify me'}
      </button>
    </form>
  );
}
