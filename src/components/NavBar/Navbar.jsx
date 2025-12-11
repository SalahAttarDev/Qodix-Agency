import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '/src/components/NavBar/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = [
        { id: "home", name: "Home", href: "/#home" },
        { id: "services", name: "Services", href: "/#services" },
        { id: "about", name: "About", href: "/#about" },
        { id: "contact", name: "Contact", href: "/#contact" }
    ];

    const handleGetInTouch = () => {
        if (window.innerWidth <= 768) {
            setIsOpen(false); 
        }
        // Scroll to contact section on home page
        if (window.location.pathname === '/') {
            const element = document.getElementById('contact');
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        } else {
            // Navigate to home page with contact section
            navigate('/#contact');
        }
    }

    const handleLinkClick = (href, e) => {
        e.preventDefault();
        
        if (window.innerWidth <= 768) {
            setIsOpen(false);
        }

        // Handle navigation
        if (href.includes('/#')) {
            const [path, hash] = href.split('#');
            
            if (window.location.pathname === '/') {
                // On home page, scroll to section
                const element = document.getElementById(hash);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            } else {
                // On other pages, navigate to home page first
                navigate(`/${hash ? '#' + hash : ''}`);
                
                // Scroll to section after navigation
                setTimeout(() => {
                    if (hash) {
                        const element = document.getElementById(hash);
                        if (element) {
                            window.scrollTo({
                                top: element.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                }, 100);
            }
        } else {
            navigate(href);
        }
    }

    const handleLogoClick = (e) => {
        e.preventDefault();
        navigate('/');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <nav className="navbar sec">
            <div className="navbar-container">
                <div className="logo">
                    <a 
                        href="/" 
                        onClick={handleLogoClick}
                        style={{ textDecoration: 'none', display: 'inline-block' }}
                    >
                        <img src="/src/assets/logo/5.svg" alt="Company Logo" />
                    </a>
                </div>
                
                <div className="nav--links-btn">
                    <ul className={`nav--links ${isOpen ? "active" : ""}`}>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a 
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(link.href, e)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
        
                    </ul>
     
                    <button 
                        className="menu-toggle" 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;