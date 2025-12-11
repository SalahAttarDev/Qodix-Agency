import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    MessageCircle, 
    X, 
    Phone, 
    Mail, 
    MessageSquare 
} from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    
    const phoneNumber = "+1234567890"; // Replace with your number
    const whatsappMessage = "Hello! I'm interested in your services and would like to learn more.";
    const emailAddress = "contact@yourcompany.com";
    
    const openWhatsApp = () => {
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        setIsOpen(false);
    };
    
    const openPhone = () => {
        window.open(`tel:${phoneNumber}`, '_blank');
        setIsOpen(false);
    };
    
    const openEmail = () => {
        window.open(`mailto:${emailAddress}`, '_blank');
        setIsOpen(false);
    };
    
    const openContactForm = () => {
        window.location.href = '#contact';
        setIsOpen(false);
    };
    
    const buttonVariants = {
        initial: { scale: 0, opacity: 0 },
        animate: { 
            scale: 1, 
            opacity: 1,
            transition: { 
                type: "spring",
                stiffness: 260,
                damping: 20 
            }
        },
        hover: { 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.95 }
    };
    
    const menuVariants = {
        hidden: { 
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };
    
    const menuItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };
    
    const tooltipVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="whatsapp-container">
            {/* Tooltip */}
            <AnimatePresence>
                {isHovering && !isOpen && (
                    <motion.div 
                        className="whatsapp-tooltip"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={tooltipVariants}
                    >
                        <span style={{marginRight:"20px"}}>Need help?</span>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Contact Options Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="whatsapp-menu"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                    >
                        <div className="menu-header">
                            <h4>Quick Connect</h4>
                            <motion.button 
                                className="close-menu-btn"
                                onClick={() => setIsOpen(false)}
                                whileHover={{ rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X size={16} />
                            </motion.button>
                        </div>
                        
                        <div className="menu-items">
                            <motion.button 
                                className="menu-item whatsapp"
                                onClick={openWhatsApp}
                                variants={menuItemVariants}
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="menu-item-icon whatsapp-icon">
                                    <MessageCircle size={20} />
                                </div>
                                <div className="menu-item-content">
                                    <strong>WhatsApp</strong>
                                    <span>Instant chat</span>
                                </div>
                            </motion.button>
                            
                            <motion.button 
                                className="menu-item phone"
                                onClick={openPhone}
                                variants={menuItemVariants}
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="menu-item-icon phone-icon">
                                    <Phone size={20} />
                                </div>
                                <div className="menu-item-content">
                                    <strong>Call Us</strong>
                                    <span>Talk directly</span>
                                </div>
                            </motion.button>
                            
                            <motion.button 
                                className="menu-item email"
                                onClick={openEmail}
                                variants={menuItemVariants}
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="menu-item-icon email-icon">
                                    <Mail size={20} />
                                </div>
                                <div className="menu-item-content">
                                    <strong>Email</strong>
                                    <span>Send a message</span>
                                </div>
                            </motion.button>
                            
                            <motion.button 
                                className="menu-item contact-form"
                                onClick={openContactForm}
                                variants={menuItemVariants}
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="menu-item-icon form-icon">
                                    <MessageSquare size={20} />
                                </div>
                                <div className="menu-item-content">
                                    <strong>Contact Form</strong>
                                    <span>Detailed inquiry</span>
                                </div>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Main WhatsApp Button */}
            <motion.button
                className={`whatsapp-button ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
            >
                {isOpen ? (
                    <X size={24} />
                ) : (
                    <MessageCircle size={24} />
                )}
            </motion.button>
            
            {/* Notification Badge */}
            <motion.div 
                className="notification-badge"
                initial={{ scale: 0 }}
                animate={{ 
                    scale: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 5,
                    times: [0, 0.2, 0.8, 1]
                }}
            />
        </div>
    );
};

export default WhatsAppButton;