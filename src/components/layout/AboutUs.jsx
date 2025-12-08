// src/components/layout/AboutUs.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  TrendingUp, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import '/src/styles/AboutUs.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// About data object for easy updates
const aboutInfo = {
  title: "About Qodix",
  tagline: "Delivering modern, enterprise-grade web solutions for businesses.",
  description: [
    "We specialize in creating high-quality websites and digital solutions tailored for performance and scalability. Our focus is on building robust platforms that drive business growth.",
    "Our team combines expertise in design, development, and digital strategy to help businesses succeed online. We bridge the gap between technical excellence and business objectives.",
    "We focus on delivering professional, clean, and trustworthy solutions for enterprises and growing companies. Each project is approached with precision and attention to detail."
  ],
  stats: [
    { value: "50+", label: "Projects Delivered" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support" },
    { value: "Enterprise", label: "Grade Solutions" }
  ],
  expertise: [
    { 
      name: "Web Development", 
      icon: Code,
      description: "Custom solutions built with modern frameworks and best practices"
    },
    { 
      name: "UI/UX Design", 
      icon: Palette,
      description: "User-centric designs that combine aesthetics with functionality"
    },
    { 
      name: "Digital Strategy", 
      icon: TrendingUp,
      description: "Data-driven strategies to maximize online presence and growth"
    },
    { 
      name: "Enterprise Solutions", 
      icon: Shield,
      description: "Scalable architectures for large-scale business applications"
    }
  ],
  values: [
    "Commitment to quality and excellence",
    "Transparent communication",
    "Timely project delivery",
    "Ongoing support and maintenance"
  ]
};

const AboutUs = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const textContentRef = useRef(null);
  const visualContentRef = useRef(null);

  useEffect(() => {
    // Check if section is already in view on load
    const checkInitialView = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView) {
        // If already in viewport, animate immediately
        animateSection();
      } else {
        // Otherwise, wait for scroll trigger
        setupScrollTrigger();
      }
    };

    const animateSection = () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      
      // Background elements
      tl.fromTo('.bg-shape',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1 }
      )
      
      // Header
      .fromTo(headerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.3"
      )
      
      // Text content
      .fromTo('.description-block',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        "-=0.2"
      )
      
      // Values section
      .fromTo('.values-section',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      
      // Stats cards
      .fromTo('.stat-card',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 },
        "-=0.3"
      )
      
      // Expertise cards
      .fromTo('.expertise-card',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      )
      
      // CTA section
      .fromTo('.about-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.2"
      );
    };

    const setupScrollTrigger = () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%", // Triggers when 80% of element is in viewport
        onEnter: animateSection,
        once: true, // Only trigger once
        markers: false // Set to true for debugging
      });
    };

    // Add small delay to ensure DOM is ready
    setTimeout(() => {
      checkInitialView();
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="premium-about-section" ref={sectionRef} id="about">
      {/* Background Abstract Elements */}
      <div className="about-bg-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
        <div className="bg-grid-line line-1"></div>
        <div className="bg-grid-line line-2"></div>
        <div className="bg-grid-line line-3"></div>
      </div>

      <div className="about-container">
        {/* Section Header */}
        <div className="section-header" ref={headerRef}>
          <div className="section-prefix">
            <div className="prefix-line"></div>
            <span className="prefix-text">WHO WE ARE</span>
            <div className="prefix-line"></div>
          </div>
          
          <h2 className="section-title">{aboutInfo.title}</h2>
          
          <p className="section-tagline">
            {aboutInfo.tagline}
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Column - Text Content */}
          <div className="text-content" ref={textContentRef}>
            {/* Description Paragraphs */}
            <div className="description-grid">
              {aboutInfo.description.map((paragraph, index) => (
                <div key={index} className="description-block">
                  <p className="description-text">{paragraph}</p>
                </div>
              ))}
            </div>

            {/* Key Values */}
            <div className="values-section">
              <h3 className="values-title">Our Commitment</h3>
              <ul className="values-list">
                {aboutInfo.values.map((value, index) => (
                  <li key={index} className="value-item">
                    <CheckCircle size={18} className="value-icon" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Stats & Expertise */}
          <div className="visual-content" ref={visualContentRef}>
            {/* Stats Cards */}
            <div className="stats-grid">
              {aboutInfo.stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Expertise Cards */}
            <div className="expertise-grid">
              {aboutInfo.expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="expertise-card">
                    <div className="expertise-icon">
                      <Icon size={24} />
                    </div>
                    <h4 className="expertise-title">{item.name}</h4>
                    <p className="expertise-description">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to elevate your digital presence?</h3>
            <p className="cta-description">
              Partner with Qodix for professional, enterprise-grade solutions tailored to your business needs.
            </p>
            <a href="#contact" className="cta-button">
              <span>Start a Conversation</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;