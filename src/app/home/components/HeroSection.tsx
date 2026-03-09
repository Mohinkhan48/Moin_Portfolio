'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';

/* ── Typewriter hook ── */
function useTypewriter(lines: string[], speed = 45, pauseMs = 1200, loop = false) {
    const [displayed, setDisplayed] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        // Reset when lines change
        if (lines.length === 0) {
            setDisplayed([]);
            setCurrentLine(0);
            setCurrentChar(0);
            setDone(false);
            return;
        }

        if (currentLine >= lines.length) {
            if (loop) {
                const t = setTimeout(() => {
                    setDisplayed([]);
                    setCurrentLine(0);
                    setCurrentChar(0);
                    setDone(false);
                }, pauseMs * 1.5); // Slightly longer pause before loop
                return () => clearTimeout(t);
            }
            setDone(true);
            return;
        }

        if (currentChar < lines[currentLine].length) {
            const t = setTimeout(() => {
                setCurrentChar((c: number) => c + 1);
            }, speed);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => {
                setDisplayed((d: string[]) => [...d, lines[currentLine]]);
                setCurrentLine((l: number) => l + 1);
                setCurrentChar(0);
            }, pauseMs);
            return () => clearTimeout(t);
        }
    }, [currentLine, currentChar, lines, speed, pauseMs, loop]);

    const activeText = currentLine < lines.length
        ? lines[currentLine].slice(0, currentChar)
        : '';

    return { displayed, activeText, done };
}

const BOOT_LINES = [
    '> Initializing DevFolio v2.6.0...',
    '> Loading developer profile... [OK]',
    '> Mounting open-source modules... [OK]',
    '> Starting interactive shell...',
];

export default function HeroSection() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const { displayed, activeText, done } = useTypewriter(BOOT_LINES, 38, 600);

    // Static Name as requested
    const nameText = 'MOHIN KHAN';
    const nameDone = true;

    // Roles animated immediately on mount
    const subLines = useMemo(() => (isMounted) ? ['AI & ML ENGINEER · PYTHON DEVELOPER'] : [], [isMounted]);
    const { activeText: subText } = useTypewriter(subLines, 40, 1000, true);
    // ^ Starts immediately, 1s pause between loops

    if (!isMounted) {
        return <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 bg-terminal-bg" />;
    }

    return (
        <section className="relative z-10 min-h-screen flex flex-col justify-center pt-24 pb-20 lg:pb-28 px-6 overflow-hidden bg-terminal-bg">
            {/* ── Background depth layers ── */}
            {/* Layer 1: animated gradient blob */}
            <div
                className="absolute inset-0 -z-20 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 80% 60% at 20% 60%, rgba(0,255,65,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(0,204,51,0.04) 0%, transparent 70%)',
                }}
            />
            {/* Layer 2: grid pattern */}
            <div
                className="absolute inset-0 -z-10 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0,255,65,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.08) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />
            {/* Layer 3: bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-48 -z-10 pointer-events-none bg-gradient-to-t from-terminal-bg to-transparent" />

            {/* ── CRT vignette ── */}
            <div className="crt-vignette" />

            {/* ── Main 12-col grid ── */}
            <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-end">

                {/* Left: Identity + headline */}
                <div className="lg:col-span-7">
                    {/* Terminal boot sequence */}
                    <div className="terminal-chrome mb-10 max-w-lg">
                        <div className="terminal-titlebar">
                            <span className="terminal-dot bg-red-500/60" />
                            <span className="terminal-dot bg-yellow-500/60" />
                            <span className="terminal-dot" style={{ background: 'var(--phosphor)', opacity: 0.7 }} />
                            <span className="font-mono text-xs text-green-muted ml-3">~/devfolio — bash</span>
                        </div>
                        <div className="p-5 min-h-[130px] font-mono text-sm leading-relaxed">
                            {displayed.map((line: string, i: number) => (
                                <div key={i} className="text-phosphor-dim mb-1">{line}</div>
                            ))}
                            {!done && (
                                <div className="text-phosphor">
                                    {activeText}
                                    <span className="cursor-blink text-phosphor">█</span>
                                </div>
                            )}
                            {done && (
                                <div className="text-phosphor">
                                    {'> '}<span className="text-green-primary">System ready. Welcome.</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Main Title only */}

                    <h1
                        className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[1.0] mb-6 min-h-[1.2em]"
                    >
                        <span className="glow-text block uppercase">
                            {nameText}
                        </span>
                    </h1>

                    {/* Sub-tagline with typewriter effect */}
                    <p className="font-mono text-base text-green-muted max-w-md leading-relaxed mb-10 min-h-[3em]">
                        {subText}
                        {nameDone && (
                            <span className="cursor-blink ml-1 text-phosphor inline-block">█</span>
                        )}
                    </p>
                </div>

                {/* Right: Stats column */}
                <div className="lg:col-span-5 flex flex-col gap-8 self-end">
                    <div className="grid grid-rows-3 gap-0 border border-terminal-border">
                        {/* Stat 1 */}
                        <div className="border-b border-terminal-border p-8 flex flex-col justify-between terminal-panel glow-border-hover group transition-all duration-300">
                            <span className="font-mono text-xs uppercase tracking-widest text-green-muted mb-3">Projects Delivered</span>
                            <div>
                                <span className="font-display text-5xl font-semibold glow-text">10+</span>
                                <span className="font-mono text-xs text-green-muted ml-2">completed</span>
                            </div>
                        </div>
                        {/* Stat 2 */}
                        <div className="border-b border-terminal-border p-8 flex flex-col justify-between terminal-panel glow-border-hover group transition-all duration-300">
                            <span className="font-mono text-xs uppercase tracking-widest text-green-muted mb-3">GitHub Contributions</span>
                            <div>
                                <span className="font-display text-5xl font-semibold glow-text">200+</span>
                                <span className="font-mono text-xs text-green-muted ml-2">commits</span>
                            </div>
                        </div>
                        {/* Stat 3 */}
                        <div className="p-8 flex flex-col justify-between terminal-panel glow-border-hover group transition-all duration-300">
                            <span className="font-mono text-xs uppercase tracking-widest text-green-muted mb-3">Experience</span>
                            <div>
                                <span className="font-display text-5xl font-semibold glow-text">1+</span>
                                <span className="font-mono text-xs text-green-muted ml-2">years building</span>
                            </div>
                        </div>
                    </div>

                    {/* FOXHUNT Company Card (Moved Below Stats) */}
                    <div className="terminal-panel border border-terminal-border p-8 glow-border-hover group transition-all duration-300 relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-2 h-2 rounded-full bg-phosphor animate-pulse shadow-[0_0_8px_rgba(0,255,65,0.8)]" />
                            <h3 className="font-display text-2xl font-bold tracking-wider glow-text uppercase">FOXHUNT</h3>
                        </div>

                        <p className="font-mono text-sm text-green-muted leading-relaxed mb-8">
                            FOXHUNT is a technology startup focused on building AI-powered systems, intelligent web platforms, and scalable digital solutions for startups and businesses.
                        </p>

                        <a
                            href="https://foxhunt.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-phosphor/30 font-mono text-[10px] uppercase tracking-[0.2em] text-phosphor hover:bg-phosphor/10 hover:border-phosphor transition-all duration-300 group/btn"
                        >
                            Visit foxhunt.in
                            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* ── CTAs ── */}
            <div className="max-w-[1400px] mx-auto w-full mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Link
                    href="#projects"
                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-phosphor text-terminal-bg font-mono text-xs uppercase tracking-widest font-semibold hover:bg-phosphor-dim transition-all duration-300 group"
                    style={{ boxShadow: '0 0 24px rgba(0,255,65,0.3)' }}
                >
                    ./view-projects
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3.5 border border-terminal-border font-mono text-xs uppercase tracking-widest text-green-secondary hover:border-phosphor-dim hover:text-phosphor transition-all duration-300"
                >
                    @Mohinkhan48
                </a>
                {/* Scroll hint */}
                <div className="ml-auto hidden lg:flex items-center gap-2 font-mono text-xs text-green-muted">
                    <span>scroll</span>
                    <span className="animate-bounce">↓</span>
                </div>
            </div>
        </section>
    );
}