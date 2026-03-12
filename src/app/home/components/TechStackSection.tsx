'use client';

import React, { useEffect, useRef } from 'react';

interface TechItem {
    name: string;
    category: string;
    proficiency: number; /* 0–100 */
    years: string;
    note?: string;
}

/* ← PLACEHOLDER: Replace with your actual tech stack */
const STACK: TechItem[] = [
    { name: 'Django', category: 'backend', proficiency: 92, years: '1y', note: 'Web frameworks' },
    { name: 'JavaScript', category: 'language', proficiency: 88, years: '1y' },
    { name: 'HTML', category: 'frontend', proficiency: 95, years: '1y' },
    { name: 'CSS', category: 'frontend', proficiency: 90, years: '1y' },
    { name: 'MySQL', category: 'database', proficiency: 85, years: '1y' },
    { name: 'Machine Learning', category: 'ai', proficiency: 82, years: '1y', note: 'Scikit-learn, etc.' },
    { name: 'Git', category: 'tooling', proficiency: 80, years: '1y' },
    { name: 'REST APIs', category: 'api', proficiency: 87, years: '1y' },
];

const CATEGORY_COLORS: Record<string, string> = {
    language: 'var(--phosphor)',
    frontend: '#61DAFB',
    backend: '#68D391',
    database: '#F6AD55',
    infra: '#FC8181',
    api: '#B794F4',
    tooling: '#76E4F7',
    ai: '#00FF41',
};

export default function TechStackSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const barsRef = useRef<NodeListOf<HTMLElement> | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        /* Animate progress bars */
                        const bars = entry.target.querySelectorAll<HTMLElement>('.progress-fill');
                        bars.forEach((bar) => {
                            const target = bar.dataset.target ?? '0';
                            setTimeout(() => { bar.style.width = target + '%'; }, 300);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        const els = sectionRef.current?.querySelectorAll('.reveal');
        els?.forEach((el: Element) => observer.observe(el));
        return () => observer.disconnect();
    }, [sectionRef]);

    return (
        <section id="stack" ref={sectionRef} className="relative z-10 py-10 lg:py-14 border-t border-terminal-border bg-terminal-bg opacity-100">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <div className="mb-6 reveal">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-muted mb-3 block">
                        02 / tech stack
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-green-primary reveal-active">
                        <span className="text-reveal-wrapper">
                            <span className="text-reveal-content">Tools of</span>
                        </span>
                        {' '}
                        <span className="text-reveal-wrapper">
                            <span className="text-reveal-content delay-200 glow-text-dim italic">the trade.</span>
                        </span>
                    </h2>
                </div>

                {/* Asymmetric bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-px border border-terminal-border bg-terminal-border">

                    {/* Featured — large card (col-span-5) */}
                    <div className="md:col-span-5 row-span-2 bento-card p-10 flex flex-col justify-between min-h-[340px] reveal">
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest text-green-muted mb-6 block">Primary language</span>
                            <div className="glitch-wrapper" data-text="Python">
                                <span className="font-display text-7xl md:text-8xl font-semibold glow-text leading-none">
                                    Python
                                </span>
                            </div>
                            <p className="font-mono text-sm text-green-muted mt-6 leading-relaxed max-w-xs">
                                Python is my core language for building robust backends, conducting data analysis, and developing machine learning models.
                            </p>
                        </div>
                        {/* Progress bar (Template 1 technique) */}
                        <div className="mt-8">
                            <div className="flex justify-between font-mono text-xs text-green-muted mb-2">
                                <span>proficiency</span><span className="text-phosphor">96%</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-fill" data-target="96" style={{ width: '0%' }} />
                            </div>
                        </div>
                    </div>

                    {/* Right side: 7-col grid of smaller cards */}
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-terminal-border">
                        {STACK.map((tech, idx) => (
                            <div
                                key={tech.name}
                                className={`bento-card p-6 flex flex-col justify-between reveal delay-${Math.min((idx + 1) * 100, 700)}`}
                            >
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span
                                            className="w-2 h-2 rounded-full shrink-0"
                                            style={{
                                                background: CATEGORY_COLORS[tech.category] ?? '#666',
                                                boxShadow: `0 0 6px ${CATEGORY_COLORS[tech.category] ?? '#666'}80`,
                                            }}
                                        />
                                        <span className="font-mono text-xs uppercase tracking-wider text-green-muted">{tech.category}</span>
                                    </div>
                                    <h3 className="font-mono text-base font-semibold text-green-primary mb-1">{tech.name}</h3>
                                    {tech.note && (
                                        <span className="font-mono text-xs text-green-muted italic">{tech.note}</span>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between font-mono text-xs text-green-muted mb-1.5">
                                        <span>{tech.years}</span>
                                        <span className="text-phosphor-dim">{tech.proficiency}%</span>
                                    </div>
                                    <div className="progress-track">
                                        <div
                                            className="progress-fill"
                                            data-target={tech.proficiency}
                                            style={{ width: '0%', background: CATEGORY_COLORS[tech.category] ?? 'var(--phosphor)', boxShadow: `0 0 6px ${CATEGORY_COLORS[tech.category] ?? 'var(--phosphor)'}80` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom note */}
                <p className="font-mono text-xs text-green-muted mt-6 text-right reveal delay-300">
                    + Always learning and exploring new technologies in AI/ML and Web Development.
                </p>
            </div>
        </section>
    );
}