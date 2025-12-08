
import '/src/styles/QodrixHero.css';

import React, { useEffect , useState} from 'react';



const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 4 + 1,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: Math.random() * 10 + 10,
        tx: Math.random() * 100 - 50
      });
    }
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(newParticles);
  }, []);

  const handleStartProject = () => {
    
    console.log('Start Project clicked');
    
  };

  const handleViewWork = () => {
    
    console.log('View Our Work clicked');
    
  };

  return (
    <section className="qodrix-hero sec">
      {/* Background noise texture */}
      <div className="bg-noise"></div>
      
      {/* Floating gradient blobs */}
      <div className="floating-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      {/* Floating particles */}
      <div className="particles">
        {particles.map(particle => (
          <div 
            key={particle.id} 
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              '--tx': `${particle.tx}px`
            }}
          ></div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="hero-content">
   
        
        <h1 className="hero-headline">
          We Build High-Performance Websites That Grow Your Business.
        </h1>
        
        <p className="hero-subtext">
          Qodrix is a full-service digital agency specializing in modern web development, 
          app creation, backend systems, and IT consulting. We deliver fast, secure, 
          scalable digital products.
        </p>
        
        <div className="hero-cta">
          <button 
            className="cta-button cta-primary"
            onClick={handleStartProject}
          >
            Start Your Project
          </button>
          <button 
            className="cta-button cta-secondary"
            onClick={handleViewWork}
          >
            View Our Work
          </button>
        </div>
      </div>
      
      {/* Device mockup */}
      <div className="device-mockup">
        <div className="mockup-screen">
          <div className="mockup-header">
            <div className="mockup-dot dot-red"></div>
            <div className="mockup-dot dot-yellow"></div>
            <div className="mockup-dot dot-green"></div>
          </div>
          <div className="mockup-content">
            <div className="mockup-sidebar">
              <div className="mockup-line short"></div>
              <div className="mockup-line short"></div>
              <div className="mockup-line short"></div>
              <div className="mockup-line short"></div>
            </div>
            <div className="mockup-main">
              <div className="mockup-line wide"></div>
              <div className="mockup-line medium"></div>
              <div className="mockup-line wide"></div>
              <div className="mockup-line medium"></div>
              <div className="mockup-line wide"></div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;