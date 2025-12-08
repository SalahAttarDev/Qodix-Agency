import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '/src/styles/AboutUs.css';



gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const aboutRef = useRef(null);
    const visualRef = useRef(null);
    const highlightsRef = useRef([]);

    useEffect(() => {
        // Create GSAP timeline for entrance animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
            defaults: { ease: "power3.out" }
        });

        // Background elements animation
        tl.fromTo('.bg-element',
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, stagger: 0.1 }
        );

        // Section header animation
        tl.fromTo('.section-title',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9 },
            "-=0.5"
        );

        // Description animation
        tl.fromTo('.description-text',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.4"
        );

        // Visual side animation
        tl.fromTo(visualRef.current,
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1 },
            "-=0.3"
        );

        // Highlights stagger animation
        tl.fromTo('.highlight-item',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
            "-=0.2"
        );

        // Floating animation for background elements
        gsap.to('.bg-element', {
            y: 20,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.3
        });

        // Subtle parallax for geometric pattern
        gsap.to('.geometric-pattern', {
            y: 50,
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="about-section sec" id="about" ref={aboutRef}>
            {/* Abstract Background Elements */}
            <div className="background-elements">
                <div className="bg-element element-1"></div>
                <div className="bg-element element-2"></div>
                <div className="bg-element element-3"></div>
                <div className="bg-element element-4"></div>
                
                {/* Geometric Lines */}
                <div className="geometric-line line-1"></div>
                <div className="geometric-line line-2"></div>
                <div className="geometric-line line-3"></div>
                
                {/* Glowing Nodes */}
                <div className="glow-node node-1"></div>
                <div className="glow-node node-2"></div>
                <div className="glow-node node-3"></div>
                <div className="glow-node node-4"></div>
            </div>

            <div className="about-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">About Qodix</h2>
                    <div className="title-divider"></div>
                </div>

                <div className="about-content">
                    {/* Left Side: Text Content */}
                    <div className="text-content">
                        <div className="description">
                            <p className="description-text">
                                Qodix is a premier web agency dedicated to delivering 
                                <span className="highlight"> high-quality websites</span>, 
                                <span className="highlight"> modern UX/UI</span>, and 
                                <span className="highlight"> scalable digital solutions</span> 
                                for businesses and enterprises.
                            </p>
                            
                            <p className="description-text">
                                We maintain professional standards through 
                                <strong> reliable development</strong> and 
                                <strong> clean code</strong>, ensuring every project delivers 
                                <strong> business-focused results</strong> and establishes 
                                <strong> long-term partnerships</strong>.
                            </p>
                        </div>

                        {/* Key Highlights */}
                        <div className="highlights-grid">
                            <div 
                                className="highlight-item"
                                ref={el => highlightsRef.current[0] = el}
                            >
                                <div className="highlight-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 17L12 22L22 17" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 12L12 17L22 12" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="highlight-content">
                                    <h3 className="highlight-title">Enterprise-grade Web Development</h3>
                                    <p className="highlight-description">
                                        Robust solutions for large-scale business operations
                                    </p>
                                </div>
                            </div>
                            
                            <div 
                                className="highlight-item"
                                ref={el => highlightsRef.current[1] = el}
                            >
                                <div className="highlight-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 9H15M9 15H15" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="highlight-content">
                                    <h3 className="highlight-title">Custom Digital Solutions</h3>
                                    <p className="highlight-description">
                                        Tailored applications for specific business needs
                                    </p>
                                </div>
                            </div>
                            
                            <div 
                                className="highlight-item"
                                ref={el => highlightsRef.current[2] = el}
                            >
                                <div className="highlight-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 6V12L16 14" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="highlight-content">
                                    <h3 className="highlight-title">High Performance & Security</h3>
                                    <p className="highlight-description">
                                        Optimized solutions with enterprise security
                                    </p>
                                </div>
                            </div>
                            
                            <div 
                                className="highlight-item"
                                ref={el => highlightsRef.current[3] = el}
                            >
                                <div className="highlight-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 10L12 4L6 10" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 4V20" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20 20H4" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="highlight-content">
                                    <h3 className="highlight-title">Modern & Scalable Architecture</h3>
                                    <p className="highlight-description">
                                        Future-proof technology for growth
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Visual Content */}
                    <div className="visual-content" ref={visualRef}>
                        <div className="visual-container">
                            {/* Dark Geometric Pattern */}
                            <div className="geometric-pattern">
                                <div className="pattern-element elem-1"></div>
                                <div className="pattern-element elem-2"></div>
                                <div className="pattern-element elem-3"></div>
                                <div className="pattern-element elem-4"></div>
                                <div className="pattern-element elem-5"></div>
                                <div className="pattern-element elem-6"></div>
                            </div>
                            
                            {/* Professional Visual */}
                            <div className="office-visual">
                                <div className="visual-overlay">
                                    <div className="overlay-content">
                                        <div className="qodix-logo">
                                            <svg width="60" height="60" viewBox="0 0 120 120" fill="none">
                                                <rect x="20" y="20" width="80" height="80" rx="10" stroke="#F8FAFC" strokeWidth="4"/>
                                                <path d="M40 40L80 80M80 40L40 80" stroke="#F8FAFC" strokeWidth="4"/>
                                                <circle cx="60" cy="60" r="20" stroke="#F8FAFC" strokeWidth="4"/>
                                            </svg>
                                        </div>
                                        <h4 className="overlay-title">Digital Excellence</h4>
                                        <p className="overlay-subtitle">Crafting enterprise solutions since 2015</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;