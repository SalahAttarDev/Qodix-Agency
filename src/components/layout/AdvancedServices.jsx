import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCogs, 
    faChartLine, 
    faUsersCog, 
    faCode, 
    faShieldAlt, 
    faCloud,
    faRocket,
    faArrowRight,
    faMobileAlt,
    faGlobe,
    faNetworkWired,
    faChartBar
} from '@fortawesome/free-solid-svg-icons';
import '/src/styles/AdvancedServices.css';

gsap.registerPlugin(ScrollTrigger);

// EDITABLE SERVICES ARRAY - Update these as needed
const extraServices = [
  {
    id: 1,
    title: "Business Automation Systems",
    icon: faCogs,
    description: "Automate repetitive tasks and improve internal operations with tailored digital solutions.",
    features: ["Workflow Automation", "Process Optimization", "Task Management"]
  },
  {
    id: 2,
    title: "Custom Admin Dashboards",
    icon: faChartLine,
    description: "High-end dashboards with analytics, charts, and management tools for better control.",
    features: ["Real-time Analytics", "Custom Reporting", "Data Visualization"]
  },
  {
    id: 3,
    title: "CRM Integration",
    icon: faUsersCog,
    description: "Implement and integrate CRM platforms to manage customers, workflow, and sales pipelines.",
    features: ["Customer Data", "Sales Pipeline", "Marketing Tools"]
  },
  {
    id: 4,
    title: "API & Backend Services",
    icon: faCode,
    description: "Develop or integrate APIs and backend systems to support your business infrastructure.",
    features: ["RESTful APIs", "Microservices", "System Integration"]
  },
  {
    id: 5,
    title: "Cybersecurity Hardening",
    icon: faShieldAlt,
    description: "Professional protection for websites, servers, and digital environments.",
    features: ["Security Audits", "Threat Protection", "Compliance"]
  },
  {
    id: 6,
    title: "Cloud Deployment & Hosting",
    icon: faCloud,
    description: "Deploy scalable, secure cloud environments optimized for performance.",
    features: ["Cloud Migration", "Server Management", "Load Balancing"]
  },
  {
    id: 7,
    title: "Enterprise Mobile Solutions",
    icon: faMobileAlt,
    description: "Secure mobile applications for enterprise workflows and operations.",
    features: ["Cross-platform", "Offline Support", "Secure Sync"]
  },
  {
    id: 8,
    title: "E-commerce Platforms",
    icon: faGlobe,
    description: "Scalable e-commerce solutions with advanced features and integrations.",
    features: ["Payment Gateways", "Inventory Management", "Order Processing"]
  },
  {
    id: 9,
    title: "Data Analytics & BI",
    icon: faChartBar,
    description: "Comprehensive data analysis and business intelligence solutions.",
    features: ["Predictive Analytics", "Data Mining", "Business Intelligence"]
  }
];

const AdvancedServices = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const serviceCardsRef = useRef([]);
    const backgroundShapesRef = useRef([]);

    useEffect(() => {
        // Create GSAP context for proper cleanup
        let ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(headerRef.current,
                {
                    y: 40,
                    opacity: 0,
                    scale: 0.97
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.1,
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
                            y: 50,
                            opacity: 0,
                            scale: 0.98
                        },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            delay: index * 0.15,
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

            // Background shapes floating animation
            backgroundShapesRef.current.forEach((shape, index) => {
                if (shape) {
                    gsap.to(shape, {
                        y: 20,
                        duration: 3 + (index * 0.5),
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: index * 0.3
                    });
                }
            });

            // Hover effects for service cards
            serviceCardsRef.current.forEach((card) => {
                if (card) {
                    const image = card.querySelector('.service-image');
                    const cardInner = card.querySelector('.service-card-inner');
                    
                    card.addEventListener('mouseenter', () => {
                        gsap.to(cardInner, {
                            y: -5,
                            duration: 0.3,
                            ease: "power2.out",
                            boxShadow: '0 20px 40px rgba(0, 0, 20, 0.1)'
                        });
                        
                        if (image) {
                            gsap.to(image, {
                                scale: 1.05,
                                duration: 0.4,
                                ease: "power2.out"
                            });
                        }
                        
                        const icon = card.querySelector('.service-icon');
                        if (icon) {
                            gsap.to(icon, {
                                rotation: 5,
                                duration: 0.3,
                                ease: "power2.out"
                            });
                        }
                    });
                    
                    card.addEventListener('mouseleave', () => {
                        gsap.to(cardInner, {
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out",
                            boxShadow: '0 10px 30px rgba(0, 0, 20, 0.08)'
                        });
                        
                        if (image) {
                            gsap.to(image, {
                                scale: 1,
                                duration: 0.4,
                                ease: "power2.out"
                            });
                        }
                        
                        const icon = card.querySelector('.service-icon');
                        if (icon) {
                            gsap.to(icon, {
                                rotation: 0,
                                duration: 0.3,
                                ease: "power2.out"
                            });
                        }
                    });
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
        <section className="advanced-services-section" id="services" ref={sectionRef}>
            {/* Subtle Background Shapes */}
            <div className="background-shapes">
                <div className="shape shape-1" ref={el => backgroundShapesRef.current[0] = el}></div>
                <div className="shape shape-2" ref={el => backgroundShapesRef.current[1] = el}></div>
                <div className="shape shape-3" ref={el => backgroundShapesRef.current[2] = el}></div>
                <div className="shape shape-4" ref={el => backgroundShapesRef.current[3] = el}></div>
                <div className="shape shape-5" ref={el => backgroundShapesRef.current[4] = el}></div>
            </div>

            {/* Grid Lines Overlay */}
            <div className="grid-overlay"></div>

            <div className="advanced-container">
                {/* Section Header */}
                <div className="section-header" ref={headerRef}>
                    <div className="header-prefix">
                        <FontAwesomeIcon icon={faRocket} />
                        <span>ADVANCED ENTERPRISE SOLUTIONS</span>
                    </div>
                    <h2 className="header-title">NOT JUST HERE — WE STILL CAN OFFER MORE…</h2>
                    <div className="header-line"></div>
                    <p className="header-subtitle">
                        Discover our premium enterprise services designed to elevate your business 
                        operations, enhance security, and drive digital transformation.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                    {extraServices.map((service, index) => (
                        <div 
                            key={service.id}
                            className="service-card"
                            ref={el => serviceCardsRef.current[index] = el}
                        >
                            <div className="service-card-inner">
                                {/* Service Image/Icon Area */}
                                <div className="service-image-area">
                                    <div className="service-image">
                                        <div className="image-overlay"></div>
                                        <div className="service-icon">
                                            <FontAwesomeIcon icon={service.icon} />
                                        </div>
                                        <div className="service-number">0{index + 1}</div>
                                    </div>
                                </div>
                                
                                {/* Service Content */}
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    
                                    <div className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="feature">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <button className="service-button">
                                        <span>Learn More</span>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enterprise CTA */}
                <div className="enterprise-cta">
                    <div className="cta-icon">
                        <FontAwesomeIcon icon={faNetworkWired} />
                    </div>
                    <h3 className="cta-title">Ready for Enterprise Transformation?</h3>
                    <p className="cta-description">
                        Connect with our enterprise solutions team to discuss how we can 
                        elevate your business infrastructure and digital capabilities.
                    </p>
                    <button className="cta-button">
                        <FontAwesomeIcon icon={faChartBar} />
                        <span>Schedule Enterprise Consultation</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AdvancedServices;

