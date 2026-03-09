export default {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                phosphor: {
                    DEFAULT: '#00FF41',
                    dim: '#00CC33',
                    faint: '#007A1F',
                    glow: 'rgba(0,255,65,0.15)',
                },
                terminal: {
                    bg: '#050905',
                    surface: '#0A0F0A',
                    card: 'rgba(0,255,65,0.03)',
                    border: 'rgba(0,255,65,0.12)',
                },
                green: {
                    primary: '#C8FAD6',
                    secondary: '#6EE88A',
                    muted: '#3A6644',
                },
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
                display: ['Fraunces', 'Georgia', 'serif'],
            },
            fontSize: {
                '10xl': ['10rem', { lineHeight: '1' }],
                '11xl': ['12rem', { lineHeight: '1' }],
            },
            animation: {
                blink: 'blink 1s step-end infinite',
                grain: 'grain 0.5s steps(1) infinite',
                marquee: 'marquee-scroll 40s linear infinite',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                blink: {
                    '0%, 49%': { opacity: '1' },
                    '50%, 100%': { opacity: '0' },
                },
            },
            backgroundImage: {
                'scanlines': "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
            },
            boxShadow: {
                'phosphor-sm': '0 0 8px rgba(0,255,65,0.4)',
                'phosphor': '0 0 16px rgba(0,255,65,0.3), 0 0 40px rgba(0,255,65,0.1)',
                'phosphor-lg': '0 0 32px rgba(0,255,65,0.4), 0 0 80px rgba(0,255,65,0.2)',
                'terminal': '0 0 0 1px rgba(0,255,65,0.12), 0 0 12px rgba(0,255,65,0.06)',
            },
        },
    },
    plugins: [],
};