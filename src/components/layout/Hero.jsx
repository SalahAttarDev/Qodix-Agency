import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '/src/styles/Hero.css';
import Logo from '../../assets/logo/1.svg'; // Choose appropriate logo

const Hero = () => {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline
    timelineRef.current = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // Animation sequence
    timelineRef.current
      // Logo animation
      .fromTo('.hero-logo', 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 }
      )
      // Headline animation
      .fromTo('.hero-headline', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        "-=0.5"
      )
      // Subheading animation with stagger
      .fromTo('.hero-subheading', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        "-=0.4"
      )
      // Buttons animation
      .fromTo('.hero-buttons', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
        "-=0.3"
      )
      // Background shapes animation
      .fromTo('.grid-line, .wave-shape, .glow-dot', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.05 },
        "-=0.5"
      );

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to('.grid-line', {
        y: scrollY * 0.1,
        duration: 0.5
      });
      gsap.to('.wave-shape', {
        y: scrollY * 0.15,
        duration: 0.5
      });
      gsap.to('.glow-dot', {
        y: scrollY * 0.08,
        duration: 0.5
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      timelineRef.current.kill();
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Abstract Background Elements */}
      <div className="background-elements">
        {/* Grid Lines */}
        <div className="grid-line grid-line-1"></div>
        <div className="grid-line grid-line-2"></div>
        <div className="grid-line grid-line-3"></div>
        <div className="grid-line grid-line-4"></div>
        
        {/* Wave Shapes */}
        <div className="wave-shape wave-1"></div>
        <div className="wave-shape wave-2"></div>
        <div className="wave-shape wave-3"></div>
        
        {/* Glowing Dots */}
        <div className="glow-dot dot-1"></div>
        <div className="glow-dot dot-2"></div>
        <div className="glow-dot dot-3"></div>
        <div className="glow-dot dot-4"></div>
        <div className="glow-dot dot-5"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Logo */}
          <div className="hero-logo-wrapper">
            <img src={Logo} alt="Qodix" className="hero-logo" />
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Premium Digital Solutions for 
            <span className="highlightd"> Enterprise Excellence</span>
          </h1>

          {/* Subheading */}
          <div className="hero-subheading">
            <p className="subtitle-main">High-performance websites & digital platforms</p>
            <p className="subtitle-secondary">
              Built for speed, engineered for reliability, scaled for growth
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button className="cta-button primary">
              <span className="button-text">Get Started</span>
              <svg className="button-icon" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="cta-button secondary">
              <span className="button-text">View Services</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;