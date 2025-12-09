import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
    Stethoscope,
    Laptop,
    Smartphone,
    Shield,
    ArrowRight,
    Rocket
} from 'lucide-react';
import './ServicesSection.css';

// EDITABLE SERVICES ARRAY - Update these as needed
const services = [
      {
    id: 1,
    title: "Web Development",
    subtitle: "Professional web solutions",
    icon: Laptop,
    description: "High-performance websites and digital platforms for businesses across all industries.",
    features: [
      "Websites for restaurants, e-commerce, portfolios",
      "Landing pages & full business systems",
      "Responsive + SEO optimized"
    ],
    accentColor: "#43e97b",
    isPremium: false
  },
  {
    id: 2,
    title: "Medical Digital Solutions",
    subtitle: "Premium specialized service",
    icon: Stethoscope,
    description: "Custom digital systems designed specifically for healthcare providers, clinics, and medical practices.",
    features: [
      "Custom medical systems (booking, patient management)",
      "Medical websites & landing pages",
      "HIPAA-inspired secure architecture"
    ],
    accentColor: "#667eea",
    isPremium: true
  },

  {
    id: 3,
    title: "AI, Automation & Mobile Apps",
    subtitle: "Digital transformation",
    icon: Smartphone,
    description: "Intelligent solutions and mobile applications to automate and elevate your business.",
    features: [
      "AI chatbots & business automation",
      "Mobile apps for iOS & Android",
      "Smart workflows & digital transformation"
    ],
    accentColor: "#8b5cf6",
    isPremium: false
  }
];

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const slideUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.5,
                ease: "easeOut"
            } 
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="services-section" id="services" ref={sectionRef}>
            {/* Background Elements */}
            <div className="services-bg-elements">
                <div className="services-wave services-wave-1"></div>
                <div className="services-wave services-wave-2"></div>
                <div className="services-wave services-wave-3"></div>
                <div className="services-grid-line services-line-1"></div>
                <div className="services-grid-line services-line-2"></div>
                <div className="services-grid-line services-line-3"></div>
                <div className="services-vertical-line services-vertical-1"></div>
                <div className="services-vertical-line services-vertical-2"></div>
                <div className="services-vertical-line services-vertical-3"></div>
            </div>

            <div className="services-container">
                {/* Section Header */}
                <motion.div 
                    className="services-header"
                    initial="hidden"
                    animate={controls}
                    variants={slideUp}
                >
                    <div className="header-prefix">
                        <Rocket size={14} />
                        <span>OUR EXPERTISE</span>
                    </div>
                    <h2 className="header-title">What We Offer</h2>
                    <p className="header-subtitle">
                        High-quality digital solutions crafted for your business.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    className="services-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={controls}
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div 
                                key={service.id}
                                className={`service-card ${service.isPremium ? 'premium' : ''}`}
                                variants={slideUp}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="card-inner">
                                    {/* Card Header */}
                                    <div className="card-header">
                                        <div className="service-icon-wrapper">
                                            <div className="service-icon">
                                                <Icon size={22} />
                                            </div>
                                            {service.isPremium && (
                                                <div className="premium-badge">
                                                    <Shield size={12} />
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
                                                    <ArrowRight size={14} />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Card Footer */}
                                    <div className="card-footer">
                                        <button className="explore-button">
                                            <span>Explore Service</span>
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;

// Export the services array for easy editing