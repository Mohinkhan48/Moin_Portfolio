'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((f: typeof form) => ({ ...f, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        /* ← PLACEHOLDER: Connect to your preferred backend / email service */
        console.log('Form submitted:', form);
        setSubmitted(true);
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
        <section id="contact" ref={sectionRef} className="py-10 lg:py-14 border-t border-terminal-border opacity-100">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left: copy + meta */}
                    <div className="lg:col-span-5 reveal">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-muted mb-3 block">
                            04 / contact
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-green-primary mb-4">
                            Open a{' '}
                            <span className="glow-text-dim italic">session.</span>
                        </h2>
                        <p className="font-mono text-sm text-green-muted leading-relaxed mb-4 max-w-sm">
                            Co-Founder of FOXHUNT and AI & ML Engineer specializing in building real-world software solutions. Experienced in developing and delivering multiple client projects using Python, Django, MySQL, and JavaScript. Passionate about creating scalable web applications, AI-driven systems, and high-performance backend architectures that solve real business problems.
                        </p>

                        {/* Contact meta items */}
                        <div className="space-y-8">
                            {[
                                {
                                    icon: 'EnvelopeIcon',
                                    label: 'Email',
                                    value: 'moin26277@gmail.com',
                                    href: 'mailto:moin26277@gmail.com',
                                },
                                {
                                    icon: 'CodeBracketIcon',
                                    label: 'GitHub',
                                    value: 'github.com/Mohinkhan48',
                                    href: 'https://github.com/Mohinkhan48',
                                },
                                {
                                    icon: 'MapPinIcon',
                                    label: 'Location',
                                    value: 'Bangalore, India',
                                    href: '#',
                                },
                            ].map((item) => (
                                <div key={item.label} className="flex gap-5 items-start group">
                                    <div className="w-10 h-10 border border-terminal-border flex items-center justify-center shrink-0 group-hover:border-phosphor-dim transition-colors duration-300">
                                        <Icon name={item.icon as any} size={16} className="text-green-muted group-hover:text-phosphor transition-colors" />
                                    </div>
                                    <div>
                                        <span className="font-mono text-xs uppercase tracking-widest text-green-muted block mb-1">{item.label}</span>
                                        <a
                                            href={item.href}
                                            className="font-mono text-sm text-green-secondary hover:text-phosphor transition-colors duration-200"
                                        >
                                            {item.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Response time note */}
                        <div className="mt-12 pt-8 border-t border-terminal-border">
                            <p className="font-mono text-xs text-green-muted">
                                <span className="text-phosphor mr-2">$</span>
                                avg response time: &lt;24h · based in: BANGALORE, INDIA
                            </p>
                        </div>
                    </div>

                    {/* Right: terminal form */}
                    <div className="lg:col-span-7 reveal delay-200">
                        <div className="terminal-chrome">
                            <div className="terminal-titlebar">
                                <span className="terminal-dot bg-red-500/60" />
                                <span className="terminal-dot bg-yellow-500/60" />
                                <span className="terminal-dot" style={{ background: 'var(--phosphor)', opacity: 0.7 }} />
                                <span className="font-mono text-xs text-green-muted ml-3">
                                    ~/devfolio — contact.sh
                                </span>
                            </div>

                            {submitted ? (
                                <div className="p-10 min-h-[400px] flex flex-col justify-center">
                                    <div className="font-mono text-sm leading-relaxed space-y-3">
                                        <div className="text-phosphor-dim">$ ./send-message.sh --status</div>
                                        <div className="text-green-primary">✓ Message transmitted successfully.</div>
                                        <div className="text-green-muted">Expect a reply within 24 hours.</div>
                                        <div className="text-phosphor mt-4">
                                            <span className="cursor-blink">█</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div>
                                            <label className="font-mono text-xs uppercase tracking-widest text-green-muted block mb-2">
                                                <span className="text-phosphor-dim mr-1">$</span> name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                className="terminal-input"
                                                placeholder="Jane Smith"
                                            />
                                        </div>
                                        <div>
                                            <label className="font-mono text-xs uppercase tracking-widest text-green-muted block mb-2">
                                                <span className="text-phosphor-dim mr-1">$</span> email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                className="terminal-input"
                                                placeholder="jane@company.io"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="font-mono text-xs uppercase tracking-widest text-green-muted block mb-2">
                                            <span className="text-phosphor-dim mr-1">$</span> subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            className="terminal-input"
                                            placeholder="Collaboration / Job offer / Just saying hi"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-mono text-xs uppercase tracking-widest text-green-muted block mb-2">
                                            <span className="text-phosphor-dim mr-1">$</span> message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            required
                                            value={form.message}
                                            onChange={handleChange}
                                            className="terminal-input resize-none"
                                            placeholder="Tell me what you're building..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-phosphor text-terminal-bg font-mono text-xs uppercase tracking-widest font-semibold hover:bg-phosphor-dim transition-all duration-300 flex items-center justify-center gap-3 group"
                                        style={{ boxShadow: '0 0 20px rgba(0,255,65,0.25)' }}
                                    >
                                        <span className="text-terminal-bg/60 group-hover:text-terminal-bg transition-colors">$</span>
                                        ./transmit-message.sh
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}