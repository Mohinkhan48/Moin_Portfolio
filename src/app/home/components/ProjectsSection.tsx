'use client';

import React, { useEffect, useRef } from 'react';

import Icon from '@/components/ui/AppIcon';

interface Project {
    id: number;
    name: string;
    description: string;
    lang: string;
    stars?: string;
    forks?: string;
    tag: string;
    href: string;
    isClientProject?: boolean;
}

/* ← PLACEHOLDER: Replace with your actual client projects */
const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'Business Website Development',
        description: 'Designed and developed a responsive business website for a client including landing page, services section, contact form and SEO optimization.',
        lang: 'JavaScript',
        tag: 'web-development · responsive',
        href: '#',
        isClientProject: true,
    },
    {
        id: 2,
        name: 'Portfolio Website for Freelancer',
        description: 'Built a modern portfolio website for a freelancer including responsive UI, performance optimization and mobile friendly design.',
        lang: 'Next.js',
        tag: 'ui-ux · performance',
        href: '#',
        isClientProject: true,
    },
];

const LANG_COLORS: Record<string, string> = {
    TypeScript: '#3178C6',
    Rust: '#CE422B',
    Go: '#00ADD8',
    Python: '#3776AB',
    JavaScript: '#F7DF1E',
    'Next.js': '#68D391',
};

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        if (entry.target.tagName === 'H2') entry.target.classList.add('reveal-active');
                    }
                });
            },
            { threshold: 0.12 }
        );
        const els = sectionRef.current?.querySelectorAll('.reveal');
        els?.forEach((el: Element) => observer.observe(el));
        return () => observer.disconnect();
    }, [sectionRef]);

    return (
        <section id="projects" ref={sectionRef} className="relative z-10 py-28 lg:py-36 opacity-100 bg-terminal-bg">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Section header */}
                <div className="grid lg:grid-cols-12 gap-8 mb-16 reveal">
                    <div className="lg:col-span-5">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-muted mb-3 block">
                            01 / client projects
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-green-primary reveal-active">
                            <span className="text-reveal-wrapper">
                                <span className="text-reveal-content">Projects for</span>
                            </span>
                            <br />
                            <span className="text-reveal-wrapper">
                                <span className="text-reveal-content delay-200 glow-text-dim italic">real clients.</span>
                            </span>
                        </h2>
                    </div>
                    <div className="lg:col-span-7 flex flex-col justify-end">
                        <p className="font-mono text-sm text-green-muted leading-relaxed max-w-lg">
                            {/* ← PLACEHOLDER: Update with your GitHub profile URL */}
                            Check out my other work on{' '}
                            <a href="https://github.com/Mohinkhan48" className="text-phosphor hover:underline">github.com/Mohinkhan48</a>.
                        </p>
                    </div>
                </div>

                {/* GitHub stat bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-terminal-border mb-2 reveal delay-200">
                    {[
                        { label: 'Public Repos', value: '15+' },
                        { label: 'Total Commits', value: '200+' },
                        { label: 'Experience', value: '1+ yr' },
                        { label: 'Location', value: 'Bangalore' },
                    ].map((stat) => (
                        <div key={stat.label} className="terminal-panel p-6 text-center">
                            <div className="font-display text-3xl font-semibold glow-text mb-1">{stat.value}</div>
                            <div className="font-mono text-xs uppercase tracking-widest text-green-muted">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Project rows — Template 2 list-view pattern */}
                <div className="border-t border-terminal-border mt-12">
                    {PROJECTS.map((proj, idx) => (
                        <div
                            key={proj.id}
                            className={`project-row reveal delay-${(idx + 1) * 100} block border-b border-terminal-border px-4 py-7 group relative`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                {/* Index + name */}
                                <div className="md:col-span-4 flex items-center gap-4">
                                    <span className="font-mono text-xs text-green-muted w-6 shrink-0">
                                        0{proj.id}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-mono text-lg font-semibold text-green-primary group-hover:text-phosphor transition-colors duration-200">
                                                <span className="text-phosphor-dim mr-1">~/</span>{proj.name}
                                            </h3>
                                            {proj.isClientProject && (
                                                <span className="px-2 py-0.5 border border-phosphor/30 text-[10px] uppercase tracking-tighter text-phosphor bg-phosphor/5 font-mono">
                                                    CLIENT WORK
                                                </span>
                                            )}
                                        </div>
                                        <span className="font-mono text-xs text-green-muted">{proj.tag}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-5">
                                    <p className="font-mono text-sm text-green-muted leading-relaxed">{proj.description}</p>
                                </div>

                                {/* Meta */}
                                <div className="md:col-span-3 flex items-center gap-5 justify-end">
                                    <div className="flex items-center gap-1.5">
                                        <span
                                            className="w-2.5 h-2.5 rounded-full"
                                            style={{ background: LANG_COLORS[proj.lang] ?? '#666', boxShadow: `0 0 6px ${LANG_COLORS[proj.lang] ?? '#666'}60` }}
                                        />
                                        <span className="font-mono text-xs text-green-muted">{proj.lang}</span>
                                    </div>
                                    <Icon name="ArrowTopRightOnSquareIcon" size={14} className="text-green-muted group-hover:text-phosphor transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View all CTA */}
                <div className="flex justify-center mt-12 reveal delay-500">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 border border-terminal-border px-8 py-3.5 font-mono text-xs uppercase tracking-widest text-green-secondary hover:border-phosphor-dim hover:text-phosphor transition-all duration-300"
                    >
                        {/* ← PLACEHOLDER: Replace with your GitHub URL */}
                        View all on GitHub →
                    </a>
                </div>
            </div>
        </section>
    );
}