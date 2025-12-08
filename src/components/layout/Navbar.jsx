import React, { useState } from 'react';
import '/src/styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    let navLinks = {
        home: { name: "Home", href: "#home" },
        services: { name: "Services", href: "#services" },
        about: { name: "About", href: "#about" },
        contact: { name: "Contact", href: "#contact" }
    }

    function handleGetInTouch() {
        if (window.innerWidth <= 768) {
            setIsOpen(false); 
        }
    }

    const handleLinkClick = () => {
        if (window.innerWidth <= 768) {
            setIsOpen(false);
        }
    }
    
    return (
        <nav className="navbar sec" >
            <div className="navbar-container">
                <div className="logo">
                    <img src="/src/assets/logo/5.svg" alt="Company Logo" />
                </div>
                
                <div className="nav--links-btn">
                    <ul className={`nav--links ${isOpen ? "active" : ""}`}>
                        <li>
                            <a href={navLinks.home.href} onClick={handleLinkClick}>
                                {navLinks.home.name}
                            </a>
                        </li>
                        <li>
                            <a href={navLinks.services.href} onClick={handleLinkClick}>
                                {navLinks.services.name}
                            </a>
                        </li>
                        <li>
                            <a href={navLinks.about.href} onClick={handleLinkClick}>
                                {navLinks.about.name}
                            </a>
                        </li>
                        <li>
                            <a href={navLinks.contact.href} onClick={handleLinkClick}>
                                {navLinks.contact.name}
                            </a>
                        </li>
                        <li className="mobile-get-in-touch">
                            <button onClick={handleGetInTouch}>
                                Get in touch
                            </button>
                        </li>
                    </ul>
                    <div className="get-in-touch">
                        <button onClick={handleGetInTouch}>
                            Get in touch
                        </button>
                    </div>

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