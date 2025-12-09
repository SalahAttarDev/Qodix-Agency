// src/components/layout/ProjectsSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Briefcase } from 'lucide-react';
import '/src/components/Projects/ProjectsSection.css';

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
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Simplified animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardHover = {
    initial: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      {/* Background Elements */}
      <div className="projects-bg-elements">
        <div className="projects-wave projects-wave-1"></div>
        <div className="projects-wave projects-wave-2"></div>
        <div className="projects-wave projects-wave-3"></div>
        <div className="projects-grid-line projects-line-1"></div>
        <div className="projects-grid-line projects-line-2"></div>
        <div className="projects-grid-line projects-line-3"></div>
        <div className="projects-vertical-line projects-vertical-1"></div>
        <div className="projects-vertical-line projects-vertical-2"></div>
        <div className="projects-vertical-line projects-vertical-3"></div>
      </div>

      <div className="projects-container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={controls}
          variants={slideUp}
        >
          <div className="section-prefix">
            <Briefcase size={14} />
            <span>SELECTED WORK</span>
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
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project) => (
            <motion.article 
              key={project.id}
              className="project-card"
              variants={slideUp}
              whileHover="hover"
              initial="initial"
            >
              {/* Image Container */}
              <div className="project-image-container">
                <div className="image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="image-overlay">
                    <a 
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="preview-button"
                    >
                      <ExternalLink size={18} />
                      <span>Live Preview</span>
                    </a>
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
                  <a 
                    href={project.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <ArrowUpRight size={20} />
                  </a>
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

      
      </div>
    </section>
  );
};

export default ProjectsSection;