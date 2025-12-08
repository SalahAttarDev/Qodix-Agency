import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '/src/styles/Footer.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const brandRef = useRef(null);
    const linksRef = useRef([]);
    const newsletterRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        // Create GSAP timeline for entrance animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 100%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            }
        });

        // Background elements animation
        tl.fromTo('.footer-bg-element',
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
        );

        // Brand section animation
        tl.fromTo(brandRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.5"
        );

        // Links sections stagger animation
        tl.fromTo('.footer-links-group',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out" },
            "-=0.4"
        );

        // Newsletter form animation
        tl.fromTo(newsletterRef.current,
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
            "-=0.3"
        );

        // Footer bottom animation
        tl.fromTo(bottomRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.2"
        );

        // Social icons hover animation setup
        const socialIcons = document.querySelectorAll('.social-icon');
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    y: -3,
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            icon.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Newsletter input animation
        const newsletterInput = document.querySelector('.newsletter-input');
        const newsletterButton = document.querySelector('.newsletter-button');
        
        if (newsletterInput) {
            newsletterInput.addEventListener('focus', () => {
                gsap.to(newsletterInput, {
                    borderColor: "#000014",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            newsletterInput.addEventListener('blur', () => {
                gsap.to(newsletterInput, {
                    borderColor: "rgba(0, 0, 20, 0.1)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }

        if (newsletterButton) {
            newsletterButton.addEventListener('mouseenter', () => {
                gsap.to(newsletterButton, {
                    scale: 1.05,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
            
            newsletterButton.addEventListener('mouseleave', () => {
                gsap.to(newsletterButton, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
        }

        // Floating animation for background elements
        gsap.to('.footer-bg-element', {
            y: 10,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.3
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            socialIcons.forEach(icon => {
                icon.removeEventListener('mouseenter', () => {});
                icon.removeEventListener('mouseleave', () => {});
            });
        };
    }, []);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log('Newsletter subscription:', email);
        
        // Animation for submission
        const form = e.target;
        const button = form.querySelector('.newsletter-button');
        const input = form.querySelector('.newsletter-input');
        
        // Button click animation
        gsap.to(button, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                gsap.to(button, { scale: 1, duration: 0.1 });
            }
        });
        
        // Input success animation
        gsap.to(input, {
            keyframes: {
                "0%": { backgroundColor: "#FFFFFF" },
                "50%": { backgroundColor: "rgba(0, 200, 83, 0.1)" },
                "100%": { backgroundColor: "#FFFFFF" }
            },
            duration: 0.8,
            ease: "power2.inOut"
        });
        
        // Success message
        const successMessage = document.createElement('div');
        successMessage.className = 'newsletter-success';
        successMessage.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#000014" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Subscribed successfully!</span>
        `;
        
        form.appendChild(successMessage);
        
        gsap.fromTo(successMessage,
            { y: -10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
        );
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            gsap.to(successMessage, {
                y: -10,
                opacity: 0,
                duration: 0.3,
                onComplete: () => successMessage.remove()
            });
        }, 3000);
        
        e.target.reset();
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer sec" ref={footerRef}>
            {/* Abstract Background Elements */}
            <div className="footer-bg-elements">
                <div className="footer-bg-element element-1"></div>
                <div className="footer-bg-element element-2"></div>
                <div className="footer-bg-element element-3"></div>
                <div className="footer-bg-grid grid-line-1"></div>
                <div className="footer-bg-grid grid-line-2"></div>
            </div>

            <div className="footer-container">
                <div className="footer-top">
                    {/* Brand Section */}
                    <div className="footer-brand" ref={brandRef}>
                        <div className="footer-logo-wrapper">
                            <img 
                                src="/src/assets/logo/6.svg" 
                                alt="Qodix Logo" 
                                className="footer-logo"
                            />
                        </div>
                        <p className="footer-tagline">
                            Crafting exceptional digital experiences that elevate 
                            brands and drive meaningful results. Where innovation meets 
                            precision.
                        </p>
                        <div className="footer-social">
                            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 4.01C21 4.5 20.02 4.81 19 5C19.53 4.37 20.01 3.73 20.38 3C19.47 3.37 18.51 3.67 17.56 3.86C16.75 2.91 15.51 2.34 14.16 2.34C11.93 2.34 10.13 4.14 10.13 6.37C10.13 6.71 10.16 7.03 10.23 7.34C7.28 7.19 4.74 5.77 3.03 3.45C2.65 4.1 2.45 4.87 2.45 5.67C2.45 7.18 3.2 8.52 4.33 9.3C3.62 9.3 2.96 9.11 2.38 8.82C2.38 8.83 2.38 8.85 2.38 8.87C2.38 10.84 3.86 12.47 5.82 12.83C5.46 12.94 5.08 13 4.69 13C4.42 13 4.16 12.97 3.91 12.92C4.43 14.54 5.96 15.72 7.8 15.76C6.45 16.84 4.67 17.48 2.73 17.48C2.38 17.48 2.04 17.46 1.7 17.42C3.58 18.6 5.77 19.24 8.12 19.24C14.16 19.24 17.5 13.05 17.5 7.82C17.5 7.66 17.5 7.5 17.49 7.34C18.45 6.66 19.26 5.82 19.91 4.85C18.98 5.26 17.99 5.57 16.97 5.74C17.97 5.16 18.77 4.23 19.18 3.11C18.23 3.66 17.2 4.08 16.13 4.32C15.24 3.38 14.01 2.84 12.66 2.84C10.1 2.84 8 4.94 8 7.5C8 7.96 8.06 8.4 8.16 8.83C5.36 8.67 2.9 7.24 1.36 5.01C0.88 5.84 0.62 6.81 0.62 7.83C0.62 9.77 1.67 11.47 3.23 12.44C2.58 12.44 1.97 12.26 1.44 11.96C1.44 11.98 1.44 12 1.44 12.02C1.44 14.17 2.97 15.97 4.94 16.38C4.59 16.48 4.22 16.54 3.84 16.54C3.59 16.54 3.35 16.52 3.11 16.47C3.6 18.24 5.2 19.53 7.12 19.58C5.63 20.76 3.77 21.45 1.76 21.45C1.4 21.45 1.05 21.43 0.7 21.39C2.64 22.56 4.97 23.2 7.48 23.2C16.43 23.2 21.3 16.05 21.3 9.83C21.3 9.66 21.3 9.49 21.29 9.32C22.23 8.66 23 7.82 23.63 6.87C22.71 7.28 21.73 7.59 20.71 7.76C21.71 7.13 22.5 6.18 22.92 5.06C22.01 5.66 21 6.14 19.94 6.48C19.03 5.57 17.81 5.03 16.46 5.03C14.31 5.03 12.56 6.78 12.56 8.93C12.56 9.31 12.61 9.68 12.71 10.03C9.36 9.87 6.35 8.33 4.36 5.97C3.95 6.68 3.73 7.51 3.73 8.39C3.73 10.06 4.57 11.52 5.85 12.36C5.25 12.36 4.69 12.18 4.2 11.89C4.2 11.9 4.2 11.92 4.2 11.93C4.2 13.82 5.6 15.39 7.45 15.74C7.07 15.85 6.67 15.91 6.26 15.91C5.98 15.91 5.71 15.88 5.45 15.83C5.99 17.38 7.42 18.52 9.15 18.55C7.81 19.61 6.09 20.24 4.19 20.24C3.83 20.24 3.48 20.22 3.13 20.18C4.88 21.28 7.02 21.89 9.31 21.89C17.92 21.89 22.76 15.1 22.76 9.5C22.76 9.33 22.75 9.17 22.74 9C23.68 8.32 24.5 7.5 25.14 6.57C24.22 7.02 23.24 7.37 22.22 7.6Z" fill="#000014"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6 9H2V21H6V9Z" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="https://github.com" className="social-icon" aria-label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="#000014"/>
                                </svg>
                            </a>
                            <a href="https://dribbble.com" className="social-icon" aria-label="Dribbble">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.56 4.85C10.97 9.29 12.94 13.95 14.47 18.72" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.97 9.5C9.03 9.75 13.07 10.25 17.11 10.99" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.75 15.99C9.54 12.84 12.35 9.71 15.17 6.6" stroke="#000014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-group" ref={el => linksRef.current[0] = el}>
                        <h4 className="footer-group-title">Solutions</h4>
                        <ul className="footer-links">
                            <li><a href="#web-dev" className="footer-link">Web Development</a></li>
                            <li><a href="#mobile-apps" className="footer-link">Mobile Apps</a></li>
                            <li><a href="#ui-ux" className="footer-link">AI Automation</a></li>
                            <li><a href="#consulting" className="footer-link">Consulting</a></li>
                            <li><a href="#ecommerce" className="footer-link">E-commerce</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="footer-links-group" ref={el => linksRef.current[1] = el}>
                        <h4 className="footer-group-title">Company</h4>
                        <ul className="footer-links">
                            <li><a href="#about" className="footer-link">About Us</a></li>
                            <li><a href="#careers" className="footer-link">Careers</a></li>
                            <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
                            <li><a href="#blog" className="footer-link">Blog</a></li>
                            <li><a href="#contact" className="footer-link">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-links-group newsletter-section" ref={newsletterRef}>
                        <h4 className="footer-group-title">Stay Updated</h4>
                        <p className="newsletter-text">
                            Subscribe for insights, updates, and exclusive content 
                            delivered directly to your inbox.
                        </p>
                        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                            <div className="newsletter-input-wrapper">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter your email" 
                                    className="newsletter-input" 
                                    required 
                                />
                                <div className="input-underline"></div>
                            </div>
                            <button type="submit" className="newsletter-button">
                                <span>Subscribe</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom" ref={bottomRef}>
                    <div className="copyright">
                        © {currentYear} Qodix Digital Solutions. All rights reserved.
                    </div>
                    <ul className="footer-legal">
                        <li><a href="#privacy" className="legal-link">Privacy Policy</a></li>
                        <li><a href="#terms" className="legal-link">Terms of Service</a></li>
                        <li><a href="#cookies" className="legal-link">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="footer-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;