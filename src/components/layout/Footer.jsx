import React from 'react';
import '/src/styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log('Newsletter subscription:', email);
        e.target.reset();
        
        // Show success message (optional)
        alert('Thank you for subscribing!');
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer sec">
            <div className="footer-container">
                <div className="footer-top">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <div className="footer-logo-wrapper">
                            <img 
                                src="/src/assets/logo/6.svg" 
                                alt="Company Logo" 
                                className="footer-logo"
                            />
                        </div>
                        <p className="footer-tagline">
                            We craft exceptional digital experiences that elevate 
                            brands and drive meaningful results. Innovation meets 
                            precision in every project.
                        </p>
                        <div className="footer-social">
                            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
                                <span>𝕏</span>
                            </a>
                            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                                <span>in</span>
                            </a>
                            <a href="https://github.com" className="social-icon" aria-label="GitHub">
                                <span>⚙️</span>
                            </a>
                            <a href="https://dribbble.com" className="social-icon" aria-label="Dribbble">
                                <span>🏀</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-group">
                        <h4>Solutions</h4>
                        <ul className="footer-links">
                            <li><a href="#web-dev">Web Development</a></li>
                            <li><a href="#mobile-apps">Mobile Apps</a></li>
                            <li><a href="#ui-ux">AI Automation</a></li>
                            <li><a href="#consulting">Consulting</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="footer-links-group">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-links-group newsletter-section">
                        <h4>Stay Updated</h4>
                        <p className="newsletter-text">
                            Subscribe to our newsletter for insights, updates, and 
                            exclusive content delivered to your inbox.
                        </p>
                    <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            className="newsletter-input" 
                            required 
                        />
                        <button type="submit" className="newsletter-button">
                            Subscribe
                        </button>
                    </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="copyright">
                        © {currentYear} Qodrix Tech. All rights reserved.
                    </div>
                    <ul className="footer-legal">
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#cookies">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-decoration"></div>
        </footer>
    );
};

export default Footer;