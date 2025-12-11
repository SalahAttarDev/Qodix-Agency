import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Stethoscope,
    Laptop,
    Smartphone,
    Sparkles,
    ArrowRight,
    Rocket,
    Star
} from 'lucide-react';
import { services } from './servicesData';
import './ServicesSection.css';

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
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            } 
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const cardHover = {
        rest: { 
            y: 0,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        hover: { 
            y: -8,
            scale: 1.02,
            transition: { 
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="services-section" id="services" ref={sectionRef}>
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
                <motion.div 
                    className="services-header"
                    initial="hidden"
                    animate={controls}
                    variants={slideUp}
                >
                    <motion.div 
                        className="header-prefix"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Rocket size={14} />
                        <span>OUR EXPERTISE</span>
                    </motion.div>
                    <h2 className="header-title">What We Offer</h2>
                    <p className="header-subtitle">
                        High-quality digital solutions crafted for your business.
                    </p>
                </motion.div>

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
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                variants={cardHover}
                            >
                                <div className="card-inner">
                                    <div className="card-header">
                                        <div className="service-icon-wrapper">
                                            <motion.div 
                                                className="service-icon"
                                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Icon size={22} />
                                            </motion.div>
                                            {service.isPremium && (
                                                <motion.div 
                                                    className="premium-badge"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.3 + (index * 0.1), type: "spring" }}
                                                >
                                                    <Star size={10} />
                                                    <span>Premium</span>
                                                </motion.div>
                                            )}
                                        </div>
                                        <div className="service-number">0{index + 1}</div>
                                    </div>
                                    
                                    <div className="card-body">
                                        <h3 className="service-title">{service.title}</h3>
                                        <p className="service-subtitle">{service.subtitle}</p>
                                        <p className="service-description">{service.description}</p>
                                        
                                        <div className="service-features">
                                            {service.features.map((feature, idx) => (
                                                <motion.div 
                                                    key={idx} 
                                                    className="feature"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.4 + (idx * 0.1) }}
                                                >
                                                    <ArrowRight size={14} />
                                                    <span>{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="card-footer">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Link 
                                                to={`/services/${service.slug}`} 
                                                className="explore-button"
                                            >
                                                <span>Explore Service</span>
                                                <motion.div
                                                    animate={{ x: 0 }}
                                                    whileHover={{ x: 4 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <ArrowRight size={16} />
                                                </motion.div>
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                                
                                {service.isPremium && (
                                    <div className="premium-overlay"></div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;