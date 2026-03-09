import React from 'react';

const ITEMS = [
  'Available for new projects',
  '·',
  'Based in Bangalore, India',
  '·',
  'AI & ML Engineer · Python Developer',
  '·',
  'Python · Django · MySQL · JavaScript',
  '·',
  'REST APIs · Machine Learning',
  '·',
  'Building real-world AI applications',
  '·',
];

export default function MarqueeTicker() {
  return (
    <div className="border-y border-terminal-border overflow-hidden py-4 bg-terminal-surface/30">
      <div className="flex overflow-hidden">
        <div className="marquee-content">
          {[...ITEMS, ...ITEMS]?.map((item, i) => (
            <span
              key={i}
              className={`font-mono text-xs uppercase tracking-widest mx-8 whitespace-nowrap ${item === '·' ? 'text-phosphor' : 'text-green-muted'
                }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden>
          {[...ITEMS, ...ITEMS]?.map((item, i) => (
            <span
              key={i}
              className={`font-mono text-xs uppercase tracking-widest mx-8 whitespace-nowrap ${item === '·' ? 'text-phosphor' : 'text-green-muted'
                }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}