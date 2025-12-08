import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '/src/styles/ContactSection.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const contactRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        // Create GSAP timeline for entrance animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top 100%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            }
        });

        // Background elements animation
        tl.fromTo('.contact-bg-element',
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
        );

        // Header animation
        tl.fromTo('.contact-header',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.5"
        );

        // Contact info animation
        tl.fromTo('.contact-info',
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );

        // Form animation
        tl.fromTo('.contact-form-wrapper',
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.4"
        );

        // Form fields stagger animation
        tl.fromTo('.form-group, .form-row',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
            "-=0.3"
        );

        // Floating animation for background elements
        gsap.to('.contact-bg-element', {
            y: 20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.5
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create a button click animation
        const button = e.target.querySelector('.submit-button');
        if (button) {
            gsap.to(button, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    gsap.to(button, { scale: 1, duration: 0.1 });
                }
            });
        }

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("Form submitted:", formData);
        
        // Form submission success animation
        gsap.to('.contact-form', {
            keyframes: {
                "0%": { opacity: 1 },
                "50%": { opacity: 0.3 },
                "100%": { opacity: 1 }
            },
            duration: 0.5,
            ease: "power2.inOut"
        });

        // Success message animation
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#000014" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Message sent successfully!</span>
        `;
        
        formRef.current.appendChild(successMessage);
        
        gsap.fromTo(successMessage,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );

        // Remove success message after 3 seconds
        setTimeout(() => {
            gsap.to(successMessage, {
                y: -20,
                opacity: 0,
                duration: 0.3,
                onComplete: () => successMessage.remove()
            });
        }, 3000);

        // Reset form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: ""
        });
        
        setIsSubmitting(false);
    };

    return (
        <section className="contact-section sec" id="contact" ref={contactRef}>
            {/* Abstract Background Elements */}
            <div className="contact-bg-elements">
                <div className="contact-bg-element element-1"></div>
                <div className="contact-bg-element element-2"></div>
                <div className="contact-bg-element element-3"></div>
                <div className="contact-bg-element element-4"></div>
                <div className="contact-bg-element element-5"></div>
                <div className="contact-grid-line grid-line-1"></div>
                <div className="contact-grid-line grid-line-2"></div>
                <div className="contact-grid-line grid-line-3"></div>
            </div>

            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">Get in Touch</h2>
                    <p className="contact-subtitle">Let's Build Something Exceptional Together</p>
                    <div className="contact-divider"></div>
                </div>

                <div className="contact-content">
                    {/* Left Side - Contact Info */}
                    <div className="contact-info" ref={infoRef}>
                        <div className="info-header">
                            <h3 className="info-title">Connect With Us</h3>
                            <p className="info-description">
                                Have a project in mind? Let's discuss how we can help elevate your digital presence.
                            </p>
                        </div>
                        
                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#000014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 6L12 13L2 6" stroke="#000014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="info-content">
                                    <h4 className="info-label">Email</h4>
                                    <p className="info-value">contact@qodix.com</p>
                                    <p className="info-secondary">support@qodix.com</p>
                                </div>
                            </div>
                            
                            <div className="info-item">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C19.04 20.92 17.18 20.48 15.54 19.68C14.19 19 12.89 18 11.89 16.94C10.62 15.6 9.56 14.09 8.77 12.44C8.26 11.27 7.99 10.16 7.99 9.09C7.99 8.54 8.44 8.09 8.99 8.09H11.99C12.54 8.09 12.99 7.64 12.99 7.09C12.99 5.04 13.99 3.09 15.49 2.09C16.04 1.78 16.49 2.09 16.49 2.74V5.74C16.49 6.29 16.94 6.74 17.49 6.74C18.79 6.74 20.05 7.04 21.19 7.64C21.68 7.89 21.99 8.36 21.99 8.92V11.92C21.99 12.47 21.54 12.92 20.99 12.92C20.45 12.92 19.99 12.47 19.99 11.92V9.92" stroke="#000014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="info-content">
                                    <h4 className="info-label">Phone</h4>
                                    <p className="info-value">+1 (555) 123-4567</p>
                                    <p className="info-secondary">Mon-Fri, 9AM-6PM EST</p>
                                </div>
                            </div>
                            
                            <div className="info-item">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#000014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="info-content">
                                    <h4 className="info-label">Office</h4>
                                    <p className="info-value">456 Business Avenue</p>
                                    <p className="info-secondary">New York, NY 10001</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-cta">
                            <p className="cta-text">Prefer a quick chat?</p>
                            <button className="schedule-button">
                                <span>Schedule a Call</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="contact-form-wrapper" ref={formRef}>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-header">
                                <h3 className="form-title">Send us a Message</h3>
                                <p className="form-subtitle">We typically respond within 24 hours</p>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName" className="form-label">
                                        First Name <span className="required">*</span>
                                    </label>
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="John"
                                            required
                                            className="form-input"
                                        />
                                        <div className="input-underline"></div>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="lastName" className="form-label">
                                        Last Name <span className="required">*</span>
                                    </label>
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Doe"
                                            required
                                            className="form-input"
                                        />
                                        <div className="input-underline"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email Address <span className="required">*</span>
                                </label>
                                <div className="input-wrapper">
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        required
                                        className="form-input"
                                    />
                                    <div className="input-underline"></div>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <div className="input-wrapper">
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="form-input"
                                    />
                                    <div className="input-underline"></div>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    Your Message <span className="required">*</span>
                                </label>
                                <div className="textarea-wrapper">
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        rows="5"
                                        required
                                        className="form-textarea"
                                    />
                                    <div className="textarea-underline"></div>
                                </div>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="button-loading"></span>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;