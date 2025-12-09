import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faStethoscope, 
    faLaptopCode, 
    faRobot,
    faCalendarCheck,
    faShieldAlt,
    faChartLine,
    faArrowRight,
    faRocket,
    faBrain
} from '@fortawesome/free-solid-svg-icons';
import { 
  applyCursorEffects, 
  applyMagneticEffect, 
  setupCustomCursor 
} from '/src/utils/cursorEffects.jsx'; // Adjust path as needed
import './ServicesSection.css';

gsap.registerPlugin(ScrollTrigger);

// EDITABLE SERVICES ARRAY - Update these as needed
const services = [
  {
    id: 1,
    title: "Medical Digital Solutions",
    subtitle: "Premium specialized service",
    icon: faStethoscope,
    description: "Custom digital systems designed specifically for healthcare providers, clinics, and medical practices.",
    features: [
      "Custom medical systems (booking, patient management)",
      "Medical websites & landing pages",
      "HIPAA-inspired secure architecture"
    ],
    accentColor: "#667eea", // Soft blue
    isPremium: true
  },
  {
    id: 2,
    title: "Web Development",
    subtitle: "Professional web solutions",
    icon: faLaptopCode,
    description: "High-performance websites and digital platforms for businesses across all industries.",
    features: [
      "Websites for restaurants, e-commerce, portfolios",
      "Landing pages & full business systems",
      "Responsive + SEO optimized"
    ],
    accentColor: "#43e97b", // Soft green
    isPremium: false
  },
  {
    id: 3,
    title: "AI, Automation & Mobile Apps",
    subtitle: "Digital transformation",
    icon: faRobot,
    description: "Intelligent solutions and mobile applications to automate and elevate your business.",
    features: [
      "AI chatbots & business automation",
      "Mobile apps for iOS & Android",
      "Smart workflows & digital transformation"
    ],
    accentColor: "#000000ff", // Soft purple
    isPremium: false
  }
];

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const serviceCardsRef = useRef([]);
    const cursorRef = useRef(null);
    const cursorInnerRef = useRef(null);
    const buttonRefs = useRef([]);
    const ctaButtonRef = useRef(null);

    // Magnetic hover effect
    useEffect(() => {
        const cards = serviceCardsRef.current.filter(Boolean);
        
        const handleMouseMove = (e) => {
            if (!cursorRef.current) return;
            
            // Update cursor position
            cursorRef.current.style.left = `${e.clientX}px`;
            cursorRef.current.style.top = `${e.clientY}px`;
            
            // Magnetic effect for cards
            cards.forEach(card => {
                if (!card) return;
                
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                
                // If cursor is within magnetic radius
                if (distance < 200) {
                    const strength = (1 - distance / 200) * 10;
                    const moveX = (distanceX / distance) * strength;
                    const moveY = (distanceY / distance) * strength;
                    
                    gsap.to(card, {
                        x: moveX,
                        y: moveY,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                } else {
                    // Return to original position
                    gsap.to(card, {
                        x: 0,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            });
        };

        // Apply cursor effects to cards
        const cleanupCards = applyCursorEffects(
          cards,
          { inner: cursorInnerRef },
          {
            scale: 2,
            hoverGlow: '0 25px 60px rgba(0, 0, 20, 0.15)',
            defaultGlow: '0 10px 40px rgba(0, 0, 20, 0.08)'
          }
        );

        // Apply cursor effects to all buttons
        const allButtons = [
          ...buttonRefs.current.filter(Boolean),
          ctaButtonRef.current
        ].filter(Boolean);

        const cleanupButtons = applyCursorEffects(
          allButtons,
          { inner: cursorInnerRef },
          {
            scale: 1.5,
            hoverGlow: '0 15px 40px rgba(0, 0, 20, 0.2)',
            defaultGlow: '0 5px 20px rgba(0, 0, 20, 0.1)',
            elementStyles: {
              hover: { scale: 1.05 },
              default: { scale: 1 }
            }
          }
        );

        // Setup magnetic effect
        const cleanupMagnetic = applyMagneticEffect(cards, handleMouseMove);
        
        // Setup cursor visibility
        const cleanupCursor = setupCustomCursor(cursorRef);

        return () => {
            cleanupCards();
            cleanupButtons();
            // cleanupMagnetic();
            cleanupCursor();
        };
    }, []);

    // Entrance animations
    useEffect(() => {
        let ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(headerRef.current,
                {
                    y: 40,
                    opacity: 0,
                    scale: 0.98
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "top 60%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Service cards stagger animation
            serviceCardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.fromTo(card,
                        {
                            y: 60,
                            opacity: 0,
                            scale: 0.95
                        },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            delay: index * 0.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                                end: "top 60%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });

            // Cleanup function
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="services-section" id="services" ref={sectionRef}>
            {/* Custom Cursor */}
            <div className="custom-cursor" ref={cursorRef}>
                <div className="cursor-inner" ref={cursorInnerRef}></div>
            </div>
            <div className="projects-bg-elements">
                <div className="projects-wave projects-wave-1"></div>
                {/* Horizontal grid lines */}
                <div className="projects-grid-line projects-line-1"></div>
                <div className="projects-grid-line projects-line-2"></div>
                <div className="projects-grid-line projects-line-3"></div>
                {/* Vertical lines */}
                <div className="projects-vertical-line projects-vertical-1"></div>
                <div className="projects-vertical-line projects-vertical-2"></div>
                <div className="projects-vertical-line projects-vertical-3"></div>
            </div>
            {/* Background Elements */}
            <div className="background-elements">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="services-container">
                {/* Section Header */}
                <div className="services-header" ref={headerRef}>
                    <div className="header-prefix">
                        <FontAwesomeIcon icon={faRocket} />
                        <span>OUR EXPERTISE</span>
                    </div>
                    <h2 className="header-title">What We Offer</h2>
                    <div className="header-line"></div>
                    <p className="header-subtitle">
                        High-quality digital solutions crafted for your business.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div 
                            key={service.id}
                            className={`service-card ${service.isPremium ? 'premium' : ''}`}
                            ref={el => serviceCardsRef.current[index] = el}
                            style={{ '--accent-color': service.accentColor }}
                        >
                            <div className="card-inner">
                                {/* Card Header */}
                                <div className="card-header">
                                    <div className="service-icon-wrapper">
                                        <div className="service-icon">
                                            <FontAwesomeIcon icon={service.icon} />
                                        </div>
                                        {service.isPremium && (
                                            <div className="premium-badge">
                                                <FontAwesomeIcon icon={faShieldAlt} />
                                                <span>Premium</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="service-number">0{index + 1}</div>
                                </div>
                                
                                {/* Card Body */}
                                <div className="card-body">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-subtitle">{service.subtitle}</p>
                                    <p className="service-description">{service.description}</p>
                                    
                                    <div className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="feature">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Card Footer */}
                                <div className="card-footer">
                                    <button 
                                      className="explore-button"
                                      ref={el => buttonRefs.current[index] = el}
                                    >
                                        <span>Explore Service</span>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                          
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

               
            </div>
        </section>
    );
};

export default ServicesSection;

// Export the services array for easy editing
