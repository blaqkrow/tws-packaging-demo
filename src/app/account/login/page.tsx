'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [tab, setTab] = useState<'login' | 'register'>('login');

  return (
    <section className="section">
      <div className="container">
        <div className="auth-card">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <h1 style={{ fontSize: '24px', marginBottom: 'var(--space-2)' }}>Welcome to TWS</h1>
            <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>Sign in to track orders and manage your account.</p>
          </div>

          <div className="auth-tabs">
            <div className={`auth-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>Sign In</div>
            <div className={`auth-tab ${tab === 'register' ? 'active' : ''}`} onClick={() => setTab('register')}>Register</div>
          </div>

          {tab === 'login' ? (
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/account/orders'; }}>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" defaultValue="demo@twspackaging.sg" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" defaultValue="password" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 'var(--space-3)' }}>
                Sign In
              </button>
              <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--gray-500)', marginTop: 'var(--space-4)' }}>
                <Link href="/" style={{ color: 'var(--amber-600)' }}>Forgot your password?</Link>
              </p>
            </form>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/account/orders'; }}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Wei Ming" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Tan" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+65 9XXX XXXX" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Create a password" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 'var(--space-3)' }}>
                Create Account
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
