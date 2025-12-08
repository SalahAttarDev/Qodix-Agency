// src/components/layout/ScrollNavbar.jsx
import React, { useState, useEffect } from 'react';
import { 
  ArrowUp,
  Mail,
  Briefcase,
  Folder
} from 'lucide-react';
import '/src/styles/ScrollNavbar.css';

const ScrollNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <nav className="scroll-navbar">
      <div className="scroll-navbar-container">
        {/* Services Icon */}
        <button
          className="scroll-nav-icon"
          onClick={() => scrollToSection('services')}
          aria-label="Services"
          title="Services"
        >
          <Briefcase size={20} />
        </button>

        {/* Projects Icon */}
        <button
          className="scroll-nav-icon"
          onClick={() => scrollToSection('projects')}
          aria-label="Projects"
          title="Projects"
        >
          <Folder size={20} />
        </button>

        {/* Contact Icon */}
        <button
          className="scroll-nav-icon"
          onClick={() => scrollToSection('contact')}
          aria-label="Contact"
          title="Contact"
        >
          <Mail size={20} />
        </button>

        {/* Up Arrow */}
        <button
          className="scroll-nav-icon up-arrow"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </nav>
  );
};

export default ScrollNavbar;