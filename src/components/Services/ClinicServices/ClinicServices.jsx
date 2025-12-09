import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHospital, 
    faCalendarCheck, 
    faSearchLocation, 
    faUserShield, 
    faPalette,
    faStethoscope,
    faClipboardCheck,
    faShieldAlt,
    faMobileAlt,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import '/src/components/Services/ClinicServices.css';

gsap.registerPlugin(ScrollTrigger);

const ClinicServices = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const iconsRef = useRef([]);

    const clinicServices = [
        {
            id: 'website',
            title: 'Clinic Website Development',
            description: 'Optimized websites designed for patient trust, clarity, and professional medical presentation.',
            icon: faHospital,
            iconColor: '#000014',
            features: ['Patient Trust Design', 'Mobile Responsive', 'Fast Loading', 'Accessible Design']
        },
        {
            id: 'appointment',
            title: 'Online Appointment System',
            description: 'Automated bookings with calendar sync, reminders, and patient workflow support.',
            icon: faCalendarCheck,
            iconColor: '#000014',
            features: ['Calendar Integration', 'Automated Reminders', 'Waitlist Management', 'Patient Self-Service']
        },
        {
            id: 'seo',
            title: 'Medical SEO & Local Ranking',
            description: 'Improve your clinic\'s visibility on Google for local medical and dental searches.',
            icon: faSearchLocation,
            iconColor: '#000014',
            features: ['Local SEO', 'Google My Business', 'Review Management', 'Map Optimization']
        },
        {
            id: 'portal',
            title: 'Patient Portal & Secure Forms',
            description: 'HIPAA-friendly digital forms, patient registration, and secure access systems.',
            icon: faUserShield,
            iconColor: '#000014',
            features: ['HIPAA Compliance', 'Secure Data', 'Digital Forms', 'Patient Access']
        },
        {
            id: 'branding',
            title: 'Branding & UI/UX for Clinics',
            description: 'Clean medical visuals tailored to healthcare identity and patient experience.',
            icon: faPalette,
            iconColor: '#000014',
            features: ['Medical Branding', 'Patient Journey', 'UI/UX Design', 'Visual Identity']
        }
    ];

    useEffect(() => {
        // Create GSAP timeline for entrance animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
            defaults: { ease: "power3.out", duration: 0.8 }
        });

        // Medical background elements animation
        tl.fromTo('.medical-bg-element',
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, stagger: 0.1 }
        );

        // Header animation
        tl.fromTo('.section-header',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1 },
            "-=0.5"
        );

        // Cards stagger animation
        tl.fromTo('.clinic-card',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.15 },
            "-=0.3"
        );

        // Medical icons subtle floating animation
        iconsRef.current.forEach((icon, index) => {
            if (icon) {
                gsap.to(icon, {
                    y: -10,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.2
                });
            }
        });

        // Parallax for medical graphics
        gsap.to('.medical-graphic', {
            y: 30,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Hover animations setup
        clinicServices.forEach((service, index) => {
            const card = cardsRef.current[index];
            if (card) {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        scale: 1.02,
                        duration: 0.3,
                        ease: "power2.out",
                        boxShadow: "0 20px 40px rgba(0, 0, 20, 0.1)"
                    });
                    
                    // Icon animation on hover
                    const icon = card.querySelector('.card-icon');
                    if (icon) {
                        gsap.to(icon, {
                            scale: 1.1,
                            rotation: 5,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                });
                
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out",
                        boxShadow: "0 10px 30px rgba(0, 0, 20, 0.08)"
                    });
                    
                    const icon = card.querySelector('.card-icon');
                    if (icon) {
                        gsap.to(icon, {
                            scale: 1,
                            rotation: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                });
            }
        });

        // Cross graphic animations
        gsap.to('.cross-graphic', {
            rotation: 360,
            duration: 60,
            repeat: -1,
            ease: "none"
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="clinic-services-section sec" id="clinic-services" ref={sectionRef}>
            {/* Medical Background Elements */}
            <div className="medical-background">
                <div className="medical-bg-element element-1"></div>
                <div className="medical-bg-element element-2"></div>
                <div className="medical-bg-element element-3"></div>
                
                {/* Medical Graphics */}
                <div className="medical-graphic cross-graphic cross-1">
                    <FontAwesomeIcon icon={faStethoscope} />
                </div>
                <div className="medical-graphic cross-graphic cross-2">
                    <FontAwesomeIcon icon={faClipboardCheck} />
                </div>
                <div className="medical-graphic cross-graphic cross-3">
                    <FontAwesomeIcon icon={faShieldAlt} />
                </div>
                
                {/* Molecular Lines */}
                <div className="molecular-line line-1"></div>
                <div className="molecular-line line-2"></div>
                <div className="molecular-line line-3"></div>
                
                {/* Curved Waves */}
                <div className="wave-graphic wave-1"></div>
                <div className="wave-graphic wave-2"></div>
            </div>

            <div className="clinic-container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-tag">
                        <FontAwesomeIcon icon={faStethoscope} />
                        <span>MEDICAL SOLUTIONS</span>
                    </div>
                    <h2 className="section-title">Digital Solutions for Clinics</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">
                        Specialized digital services designed for medical and dental practices, 
                        optimizing patient experience and practice efficiency.
                    </p>
                </div>

                {/* Clinic Services Grid */}
                <div className="clinic-services-grid">
                    {clinicServices.map((service, index) => (
                        <div 
                            key={service.id}
                            className="clinic-card"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="card-header">
                                <div 
                                    className="card-icon"
                                    ref={el => iconsRef.current[index] = el}
                                >
                                    <FontAwesomeIcon 
                                        icon={service.icon} 
                                        style={{ color: service.iconColor }}
                                    />
                                </div>
                                <div className="card-number">0{index + 1}</div>
                            </div>
                            
                            <div className="card-body">
                                <h3 className="card-title">{service.title}</h3>
                                <p className="card-description">{service.description}</p>
                            </div>
                            
                            <div className="card-features">
                                <div className="features-label">
                                    <FontAwesomeIcon icon={faClipboardCheck} />
                                    <span>Key Features</span>
                                </div>
                                <ul className="features-list">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="feature-item">
                                            <FontAwesomeIcon icon={faMobileAlt} className="feature-icon" />
                                            <span className="feature-text">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="card-footer">
                                <button className="card-button">
                                    <span>Learn More</span>
                                    <FontAwesomeIcon icon={faSearchLocation} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Medical Services */}
                <div className="additional-services">
                    <div className="additional-header">
                        <h3 className="additional-title">Comprehensive Clinic Support</h3>
                        <p className="additional-description">
                            Beyond core services, we provide specialized solutions for modern healthcare practices.
                        </p>
                    </div>
                    
                    <div className="additional-grid">
                        <div className="additional-item">
                            <div className="additional-icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <h4 className="additional-item-title">Location Optimization</h4>
                            <p className="additional-item-text">
                                Google Maps integration and local service area targeting
                            </p>
                        </div>
                        
                        <div className="additional-item">
                            <div className="additional-icon">
                                <FontAwesomeIcon icon={faShieldAlt} />
                            </div>
                            <h4 className="additional-item-title">Security Audits</h4>
                            <p className="additional-item-text">
                                HIPAA compliance checks and security vulnerability assessments
                            </p>
                        </div>
                        
                        <div className="additional-item">
                            <div className="additional-icon">
                                <FontAwesomeIcon icon={faClipboardCheck} />
                            </div>
                            <h4 className="additional-item-title">Compliance Support</h4>
                            <p className="additional-item-text">
                                Ongoing compliance monitoring and documentation assistance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicServices;