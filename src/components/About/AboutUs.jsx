// src/components/layout/AboutUs.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  CheckCircle,
  Users
} from 'lucide-react';
import '/src/components/About/AboutUs.css';

// About data object
const aboutInfo = {
  title: "About Qodix",
  tagline: "Delivering modern, enterprise-grade web solutions for businesses.",
  description: [
    "We specialize in creating high-quality websites and digital solutions tailored for performance and scalability. Our focus is on building robust platforms that drive business growth.",
    "Our team combines expertise in design, development, and digital strategy to help businesses succeed online. We bridge the gap between technical excellence and business objectives.",
    "We focus on delivering professional, clean, and trustworthy solutions for enterprises and growing companies. Each project is approached with precision and attention to detail."
  ],
  values: [
    "Commitment to quality",
    "Transparent communication",
    "Timely delivery",
    "Ongoing support"
  ],
  // You can replace this with your actual company/team image
  imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};

const AboutUs = () => {
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.6,
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
    <section className="about-section" ref={sectionRef} id="about">
      {/* Background Elements */}
      <div className="about-bg-elements">
        <div className="about-wave about-wave-1"></div>
        <div className="about-wave about-wave-2"></div>
        <div className="about-wave about-wave-3"></div>
        <div className="about-grid-line about-line-1"></div>
        <div className="about-grid-line about-line-2"></div>
        <div className="about-grid-line about-line-3"></div>
        <div className="about-vertical-line about-vertical-1"></div>
        <div className="about-vertical-line about-vertical-2"></div>
        <div className="about-vertical-line about-vertical-3"></div>
      </div>

      <div className="about-container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={controls}
          variants={slideUp}
        >
          <div className="section-prefix">
            <Users size={14} />
            <span>WHO WE ARE</span>
          </div>
          
          <h2 className="section-title">{aboutInfo.title}</h2>
          
          <p className="section-tagline">
            {aboutInfo.tagline}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-content"
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
          >
            {/* Description Paragraphs */}
            <motion.div 
              className="description-grid"
              variants={staggerContainer}
            >
              {aboutInfo.description.map((paragraph, index) => (
                <motion.div 
                  key={index} 
                  className="description-block"
                  variants={slideUp}
                >
                  <p className="description-text">{paragraph}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Values Section */}
            <motion.div 
              className="values-section"
              variants={slideUp}
              transition={{ delay: 0.3 }}
            >
              <h3 className="values-title">Our Values</h3>
              <ul className="values-list">
                {aboutInfo.values.map((value, index) => (
                  <motion.li 
                    key={index} 
                    className="value-item"
                    variants={slideUp}
                    transition={{ delay: index * 0.05 + 0.4 }}
                  >
                    <CheckCircle size={18} className="value-icon" />
                    <span>{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="image-content"
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div className="image-wrapper">
              <img 
                src={aboutInfo.imageUrl} 
                alt="Qodix team"
                className="about-image"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;