import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Dribbble,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Check
} from 'lucide-react';
import '/src/components/Footer/Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const brandRef = useRef(null);
    const linksRef = useRef([]);
    const newsletterRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo('.footer-bg-element',
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" }
        );

        tl.fromTo(brandRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            "-=0.3"
        );

        tl.fromTo('.footer-links-group',
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
            "-=0.2"
        );

        tl.fromTo(newsletterRef.current,
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.4"
        );

        tl.fromTo(bottomRef.current,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
            "-=0.2"
        );

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
        
        const form = e.target;
        const button = form.querySelector('.newsletter-button');
        const input = form.querySelector('.newsletter-input');
        
        gsap.to(button, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                gsap.to(button, { scale: 1, duration: 0.1 });
            }
        });
        
        gsap.to(input, {
            keyframes: {
                "0%": { backgroundColor: "#FFFFFF" },
                "50%": { backgroundColor: "rgba(0, 200, 83, 0.1)" },
                "100%": { backgroundColor: "#FFFFFF" }
            },
            duration: 0.8,
            ease: "power2.inOut"
        });
        
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
            <div className="footer-bg-elements">
                <div className="footer-bg-element element-1"></div>
                <div className="footer-bg-element element-2"></div>
                <div className="footer-bg-element element-3"></div>
                <div className="footer-bg-grid grid-line-1"></div>
                <div className="footer-bg-grid grid-line-2"></div>
            </div>

            <div className="footer-container">
                <div className="footer-top">
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
                                <Twitter size={20} />
                            </a>
                            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com" className="social-icon" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://dribbble.com" className="social-icon" aria-label="Dribbble">
                                <Dribbble size={20} />
                            </a>
                        </div>
                    </div>

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
                            </div>
                            <button type="submit" className="newsletter-button">
                                <span>Subscribe</span>
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

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