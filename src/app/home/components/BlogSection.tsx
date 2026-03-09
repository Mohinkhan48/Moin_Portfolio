'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Post {
    id: number;
    date: string;
    readTime: string;
    tag: string;
    title: string;
    excerpt: string;
    href: string;
}

/* ← PLACEHOLDER: Replace with your actual blog posts */
const POSTS: Post[] = [
    {
        id: 1,
        date: 'Feb 18, 2026',
        readTime: '9 min read',
        tag: 'performance',
        title: 'Why your Node.js app is slower than you think (and how to profile it properly)',
        excerpt: 'V8 flamegraphs, clinic.js, and the three bottlenecks that show up in every Express app I\'ve ever audited.',
        href: '#',
    },
    {
        id: 2,
        date: 'Jan 29, 2026',
        readTime: '12 min read',
        tag: 'rust',
        title: 'Compiling Rust to WASM for a 10× speedup in browser-side data processing',
        excerpt: 'A practical walkthrough of replacing a critical JS hot-path with a Rust/WASM module without breaking your bundle.',
        href: '#',
    },
    {
        id: 3,
        date: 'Jan 07, 2026',
        readTime: '6 min read',
        tag: 'open-source',
        title: 'Lessons from 1,000 GitHub stars: what makes developers actually adopt your library',
        excerpt: 'DX, docs, and the three things most library authors get wrong in the first two weeks after launch.',
        href: '#',
    },
    {
        id: 4,
        date: 'Dec 14, 2025',
        readTime: '8 min read',
        tag: 'systems',
        title: 'Building a distributed rate limiter with Redis and the token bucket algorithm',
        excerpt: 'From theory to a production-tested Go implementation handling 40k req/s across 12 pods.',
        href: '#',
    },
];

export default function BlogSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    /* Drag-to-scroll */
    const onMouseDown = (e: React.MouseEvent) => {
        isDown = true;
        startX = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
        scrollLeft = scrollRef.current?.scrollLeft ?? 0;
    };
    const onMouseLeave = () => { isDown = false; };
    const onMouseUp = () => { isDown = false; };
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDown || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current.offsetLeft ?? 0);
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
            { threshold: 0.1 }
        );
        const els = sectionRef.current?.querySelectorAll('.reveal');
        els?.forEach((el: Element) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="writing" ref={sectionRef} className="py-28 lg:py-36 border-t border-terminal-border opacity-100">
            <div className="max-w-[1400px] mx-auto px-6 mb-12">
                <div className="flex items-end justify-between reveal">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-muted mb-3 block">
                            03 / writing
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-green-primary">
                            <span className="text-reveal-wrapper">
                                <span className="text-reveal-content">From the</span>
                            </span>{' '}
                            <span className="text-reveal-wrapper">
                                <span className="text-reveal-content delay-200 glow-text-dim italic">terminal.</span>
                            </span>
                        </h2>
                    </div>
                    <Link
                        href="#"
                        className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-green-muted hover:text-phosphor transition-colors border-b border-terminal-border hover:border-phosphor-dim pb-0.5"
                    >
                        {/* ← PLACEHOLDER: Replace with your blog URL */}
                        All posts →
                    </Link>
                </div>
            </div>

            {/* Horizontal scroll container */}
            <div
                ref={scrollRef}
                className="h-scroll-container px-6 pb-4"
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                <div className="flex gap-5" style={{ width: 'max-content' }}>
                    {POSTS.map((post, idx) => (
                        <Link
                            key={post.id}
                            href={post.href}
                            className={`reveal delay-${idx * 100} block w-80 md:w-96 shrink-0 terminal-chrome p-8 group glow-border-hover transition-all duration-400`}
                            style={{ minHeight: '280px' }}
                        >
                            {/* Meta row */}
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-xs text-phosphor-dim border border-terminal-border px-2 py-0.5">
                                        {post.tag}
                                    </span>
                                </div>
                                <span className="font-mono text-xs text-green-muted">{post.readTime}</span>
                            </div>

                            {/* Title */}
                            <h3 className="font-display text-xl font-semibold text-green-primary leading-snug mb-4 group-hover:text-phosphor transition-colors duration-200">
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="font-mono text-sm text-green-muted leading-relaxed mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-terminal-border">
                                <span className="font-mono text-xs text-green-muted">{post.date}</span>
                                <Icon
                                    name="ArrowTopRightOnSquareIcon"
                                    size={14}
                                    className="text-green-muted group-hover:text-phosphor transition-colors"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile: all posts link */}
            <div className="px-6 mt-8 md:hidden">
                <Link href="#" className="font-mono text-xs uppercase tracking-widest text-green-muted hover:text-phosphor transition-colors">
                    View all posts →
                </Link>
            </div>
        </section>
    );
}