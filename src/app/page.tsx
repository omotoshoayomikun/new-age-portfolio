"use client"

import { About } from '@/components/portfolio/About';
import { Achievements } from '@/components/portfolio/Achievements';
import { BackToTop } from '@/components/portfolio/BackToTop';
import { Blog } from '@/components/portfolio/Blog';
import { Contact } from '@/components/portfolio/Contact';
import { Experience } from '@/components/portfolio/Experience';
import { Footer } from '@/components/portfolio/Footer';
import { Hero } from '@/components/portfolio/Hero';
import { Projects } from '@/components/portfolio/Projects';
import { Sidebar } from '@/components/portfolio/Sidebar';
import { Skills } from '@/components/portfolio/Skills';
import { Testimonials } from '@/components/portfolio/Testimonials';
import { sections } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/use-active-section';
import { useReducedMotion, motion } from 'motion/react';
import React, { useMemo } from 'react'

function Index() {

    const reduced = useReducedMotion();
    const ids = useMemo(() => sections.map((section) => section.id), []);
    const active = useActiveSection(ids);


    return (
        <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-dvh"
        >
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
                Skip to content
            </a>

            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
                <Sidebar active={active} />

                <main id="main">
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Achievements />
                    <Testimonials />
                    <Blog />
                    <Contact />
                    <Footer />
                </main>
            </div>

            <BackToTop />
        </motion.div>
    );
}

export default Index