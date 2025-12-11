import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    ArrowLeft,
    DollarSign,
    CheckCircle,
    Clock,
    ChevronDown,
    ChevronUp,
    Phone,
    MessageSquare,
    Star
} from 'lucide-react';
import { getServiceBySlug } from './servicesData';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    
    const service = getServiceBySlug(slug);
    
    if (!service) {
        return (
            <div className="service-not-found">
                <h2>Service not found</h2>
                <Link to="/">Back to Home</Link>
            </div>
        );
    }
    
    const Icon = service.icon;
    
    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const fadeIn = {
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

    return (
        <section className="service-detail-section">
            <div className="service-detail-bg">
                <div className="service-detail-wave service-detail-wave-1"></div>
                <div className="service-detail-wave service-detail-wave-2"></div>
                <div className="service-detail-wave service-detail-wave-3"></div>
            </div>

            <div className="service-detail-container">
                <motion.button 
                    className="back-button"
                    onClick={() => navigate('/')}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </motion.button>

                <motion.div 
                    className="service-detail-header"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <div className="service-header-left">
                        <div className="service-title-wrapper">
                            <motion.div 
                                className="service-detail-icon"
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <Icon size={28} />
                            </motion.div>
                            <div>
                                <h1 className="service-detail-title">{service.title}</h1>
                                {service.isPremium && (
                                    <span className="premium-badge-v1">
                                        <Star size={12} />
                                        Premium Service
                                    </span>
                                )}
                            </div>
                        </div>
                        
                        <p className="service-detail-subtitle">
                            {service.description}
                        </p>
                        
                        <div className="service-tags">
                            {service.technologies.slice(0, 5).map((tech, index) => (
                                <span key={index} className="service-tag">{tech}</span>
                            ))}
                        </div>
                        
                        <div className="service-pricing">
                            <div className="price-badge">
                                <DollarSign size={16} />
                                <span>Starting from <strong>{service.startingPrice}</strong></span>
                            </div>
                            <div className="delivery-time">
                                <Clock size={16} />
                                {service.deliveryTime}
                            </div>
                        </div>
                    </div>
                 
                </motion.div>

                <div className="service-content">
                    <div className="service-main-content">
                        <motion.section 
                            className="content-section"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 className="section-title">Service Overview</h2>
                            <p className="overview-text">
                                {service.description} Our comprehensive approach ensures that 
                                every project is delivered with the highest quality standards 
                                and tailored to your specific needs.
                            </p>
                            
                            <div className="features-grid">
                                {service.detailedFeatures.map((feature, index) => {
                                    const FeatureIcon = feature.icon;
                                    return (
                                        <motion.div 
                                            key={index}
                                            className="feature-card"
                                            whileHover={{ y: -5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="feature-icon">
                                                <FeatureIcon size={24} />
                                            </div>
                                            <h3 className="feature-title">{feature.title}</h3>
                                            <p className="feature-description">{feature.description}</p>
                                            <div className="feature-details">
                                                {feature.details.map((detail, idx) => (
                                                    <div key={idx} className="feature-detail">
                                                        <CheckCircle size={14} />
                                                        <span>{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.section>

                        <motion.section 
                            className="content-section"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="section-title">Our Process</h2>
                            <div className="process-timeline">
                                {service.process.map((step, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="process-step"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (index * 0.1) }}
                                    >
                                        <div className="step-number">{index + 1}</div>
                                        <div className="step-content">
                                            <h3 className="step-title">{step}</h3>
                                            <p>Detailed explanation of this phase in our process...</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section 
                            className="content-section"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="section-title">Technologies We Use</h2>
                            <div className="technologies-grid">
                                {service.technologies.map((tech, index) => (
                                    <motion.span 
                                        key={index} 
                                        className="tech-badge"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    <div className="service-sidebar">
                        <motion.section 
                            className="content-section"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ delay: 0.4 }}
                        >
                            <h2 className="section-title">Key Benefits</h2>
                            <div className="benefits-list">
                                {service.benefits.map((benefit, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="benefit-item"
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + (index * 0.1) }}
                                    >
                                        <CheckCircle size={20} />
                                        <span>{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section 
                            className="faq-section"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ delay: 0.5 }}
                        >
                            <h2 className="section-title">Frequently Asked Questions</h2>
                            <div className="faq-list">
                                {service.faqs.map((faq, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="faq-item"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + (index * 0.1) }}
                                    >
                                        <div 
                                            className="faq-question"
                                            onClick={() => toggleFaq(index)}
                                        >
                                            <span>{faq.question}</span>
                                            {openFaqIndex === index ? 
                                                <ChevronUp size={20} /> : 
                                                <ChevronDown size={20} />
                                            }
                                        </div>
                                        {openFaqIndex === index && (
                                            <div className="faq-answer">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section 
                            className="contact-cta"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ delay: 0.6 }}
                        >
                            <h3 className="cta-title">Ready to Get Started?</h3>
                            <p className="cta-description">
                                Contact us today for a free consultation and quote. 
                                Let's discuss how we can help your business grow.
                            </p>
                            <motion.button 
                                className="cta-button secondary"
                                onClick={() => window.location.href = '#contact'}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Phone size={20} />
                                Schedule a Call
                            </motion.button>
                        </motion.section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;