'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'projects', href: '#projects' },
  { label: 'stack', href: '#stack' },
  { label: 'writing', href: '#writing' },
  { label: 'contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-terminal-bg/90 backdrop-blur-md border-b border-terminal-border' : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3 group">
          <AppLogo size={32} />
          <span className="font-mono text-sm font-medium tracking-widest uppercase glow-text-dim group-hover:glow-text transition-all duration-300">
            MOHIN.KHAN
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks?.map((link) => (
            <Link
              key={link?.label}
              href={link?.href}
              className="font-mono text-xs uppercase tracking-widest text-green-muted hover:text-phosphor transition-colors duration-200 relative group"
            >
              <span className="text-phosphor-dim opacity-60 mr-1">./</span>
              {link?.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-phosphor group-hover:w-full transition-all duration-300 shadow-phosphor-sm" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 terminal-panel glow-border glow-border-hover font-mono text-xs uppercase tracking-widest text-phosphor hover:bg-phosphor/10 transition-all duration-300"
        >
          <span className="cursor-blink text-phosphor">_</span>
          hire me
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-phosphor font-mono text-xs"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '[×]' : '[≡]'}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-terminal-bg/95 backdrop-blur-md border-b border-terminal-border px-6 py-6 flex flex-col gap-5">
          {navLinks?.map((link) => (
            <Link
              key={link?.label}
              href={link?.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm uppercase tracking-widest text-green-secondary hover:text-phosphor transition-colors"
            >
              <span className="text-phosphor-dim mr-2">$</span>{link?.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}