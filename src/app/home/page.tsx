import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import HeroSection from './components/HeroSection';
import MarqueeTicker from './components/MarqueeTicker';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

export const metadata: Metadata = {
    title: 'Mohin Khan — AI & ML Engineer · Python Developer',
    description: 'Portfolio of Mohin Khan, Co-Founder of FOXHUNT and AI & ML Engineer specializing in Python, Django, and Machine Learning.',
    openGraph: {
        title: 'Mohin Khan — AI & ML Engineer',
        description: 'Building real-world AI applications with Python and Django.',
    },
};

export default function HomePage() {
    return (
        <main className="min-h-screen bg-terminal-bg">
            <Header />
            <HeroSection />
            <MarqueeTicker />
            <ProjectsSection />
            <TechStackSection />
            <BlogSection />
            <ContactSection />
            <Footer />
        </main>
    );
}