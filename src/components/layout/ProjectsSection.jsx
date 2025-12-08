// src/components/layout/ProjectsSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion,  useInView, useAnimation } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import '/src/styles/ProjectsSection.css';

// Premium project data with just image, title, description, and live preview
const projects = [
  {
    id: 1,
    title: "Luxury E-Commerce Platform",
    description: "A premium shopping experience with intuitive navigation and seamless checkout flow designed for high-end retail.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    livePreview: "https://example.com/project1",
    category: "E-Commerce"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Streamlined platform for healthcare providers offering appointment scheduling and patient record management.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    livePreview: "https://example.com/project2",
    category: "Healthcare"
  },
  {
    id: 3,
    title: "Digital Banking Interface",
    description: "Modern banking application with intuitive dashboard design and secure transaction capabilities.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    livePreview: "https://example.com/project3",
    category: "FinTech"
  },
  {
    id: 4,
    title: "Learning Platform",
    description: "Interactive educational platform with engaging course delivery and progress tracking features.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    livePreview: "https://example.com/project4",
    category: "Education"
  },
  {
    id: 5,
    title: "Corporate Dashboard",
    description: "Comprehensive business intelligence dashboard for data visualization and performance metrics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    livePreview: "https://example.com/project5",
    category: "Analytics"
  },
  {
    id: 6,
    title: "Travel Experience App",
    description: "Intuitive travel planning application with destination discovery and itinerary management.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    livePreview: "https://example.com/project6",
    category: "Travel"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="projects" className="premium-projects-section" ref={sectionRef}>
      <div className="projects-container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={controls}
          variants={headerVariants}
        >
          <div className="section-prefix">
            <div className="prefix-line"></div>
            <span className="prefix-text">SELECTED WORK</span>
            <div className="prefix-line"></div>
          </div>
          
          <h2 className="section-title">Featured Projects</h2>
          
          <p className="section-subtitle">
            A curated collection of premium digital experiences designed for clarity, 
            performance, and meaningful user impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project) => (
            <motion.article 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Image Container */}
              <div className="project-image-container">
                <div className="image-wrapper">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <motion.a 
                        href={project.livePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="preview-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                        <span>Live Preview</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="category-badge">
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <motion.a 
                    href={project.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                    whileHover={{ x: 2 }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.a>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-footer">
                  <a 
                    href={project.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-project-btn"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={itemVariants}
          transition={{ delay: 0.8 }}
        >
          <div className="cta-content">
            <h3 className="cta-title">Have a project in mind?</h3>
            <p className="cta-description">
              Let's create something exceptional together. Reach out to discuss your next digital experience.
            </p>
            <motion.a 
              href="#contact"
              className="cta-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start a Conversation</span>
              <ArrowUpRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;