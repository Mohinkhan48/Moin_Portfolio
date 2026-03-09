import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/Mohinkhan48' },
];

export default function Footer() {
  return (
    <footer className="border-t border-terminal-border py-8 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo + links */}
        <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
          <AppLogo size={28} />
          {footerLinks?.map((l) => (
            <Link
              key={l?.label}
              href={l?.href}
              className="font-mono text-sm font-medium text-green-muted hover:text-phosphor transition-colors duration-200"
            >
              {l?.label}
            </Link>
          ))}
        </div>

        {/* Socials + copyright */}
        <div className="flex items-center gap-5 flex-wrap justify-center">
          {socials?.map((s) => (
            <a
              key={s?.label}
              href={s?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm font-medium text-green-muted hover:text-phosphor transition-colors duration-200"
            >
              {s?.label}
            </a>
          ))}
          <span className="font-mono text-xs text-green-muted">
            © {new Date()?.getFullYear()} · Privacy · Terms
          </span>
        </div>
      </div>
    </footer>
  );
}