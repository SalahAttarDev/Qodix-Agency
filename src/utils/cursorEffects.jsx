import gsap from 'gsap';

/**
 * Global cursor effects utility
 * @param {HTMLElement[]} elements - Array of elements to apply effects to
 * @param {Object} cursorRefs - References to cursor elements
 * @param {React.RefObject} cursorRefs.outer - Outer cursor ref
 * @param {React.RefObject} cursorRefs.inner - Inner cursor ref
 * @param {Object} options - Configuration options
 * @param {string} options.scale - Scale amount for inner cursor
 * @param {string} options.hoverGlow - Box shadow for hover state
 * @param {string} options.defaultGlow - Box shadow for default state
 * @param {Object} options.elementStyles - Additional element styles
 */
export  const   applyCursorEffects = (elements, cursorRefs, options = {}) => {
  const {
    scale = 2,
    hoverGlow = '0 25px 60px rgba(0, 0, 20, 0.15)',
    defaultGlow = '0 10px 40px rgba(0, 0, 20, 0.08)',
    elementStyles = {}
  } = options;

  const validElements = elements.filter(el => el && el instanceof HTMLElement);

  validElements.forEach(element => {
    // Mouse enter effect
    const onMouseEnter = () => {
      if (cursorRefs.inner && cursorRefs.inner.current) {
        gsap.to(cursorRefs.inner.current, {
          scale: scale,
          duration: 0.3,
          ease: "power2.out"
        });
      }
      
      // Apply hover styles to element
      gsap.to(element, {
        boxShadow: hoverGlow,
        duration: 0.3,
        ease: "power2.out",
        ...elementStyles.hover
      });
    };

    // Mouse leave effect
    const onMouseLeave = () => {
      if (cursorRefs.inner && cursorRefs.inner.current) {
        gsap.to(cursorRefs.inner.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
      
      // Revert to default styles
      gsap.to(element, {
        boxShadow: defaultGlow,
        duration: 0.3,
        ease: "power2.out",
        ...elementStyles.default
      });
    };

    // Add event listeners
    element.addEventListener('mouseenter', onMouseEnter);
    element.addEventListener('mouseleave', onMouseLeave);

    // Store references for cleanup
    if (!element._cursorEffects) {
      element._cursorEffects = {};
    }
    element._cursorEffects.onMouseEnter = onMouseEnter;
    element._cursorEffects.onMouseLeave = onMouseLeave;
  });

  // Return cleanup function
  return () => {
    validElements.forEach(element => {
      if (element._cursorEffects) {
        element.removeEventListener('mouseenter', element._cursorEffects.onMouseEnter);
        element.removeEventListener('mouseleave', element._cursorEffects.onMouseLeave);
        delete element._cursorEffects;
      }
    });
  };
};

/**
 * Magnetic hover effect for elements
 * @param {HTMLElement[]} elements - Array of elements
 * @param {Function} onMouseMove - Mouse move handler
 */
export const applyMagneticEffect = (elements, onMouseMove) => {
  const validElements = elements.filter(el => el && el instanceof HTMLElement);

  validElements.forEach(element => {
    const magneticHandler = (e) => onMouseMove(e, element);
    
    window.addEventListener('mousemove', magneticHandler);
    
    // Store reference for cleanup
    if (!element._magneticEffect) {
      element._magneticEffect = {};
    }
    element._magneticEffect.handler = magneticHandler;
  });

  // Return cleanup function
  return () => {
    validElements.forEach(element => {
      if (element._magneticEffect && element._magneticEffect.handler) {
        window.removeEventListener('mousemove', element._magneticEffect.handler);
        delete element._magneticEffect;
      }
    });
  };
};

/**
 * Setup custom cursor with device detection
 * @param {React.RefObject} cursorRef - Cursor element ref
 * @returns {Function} Cleanup function
 */
export const setupCustomCursor = (cursorRef) => {
  const updateCursorVisibility = () => {
    if (cursorRef.current) {
      cursorRef.current.style.display = window.innerWidth <= 768 ? 'none' : 'block';
    }
  };

  window.addEventListener('resize', updateCursorVisibility);
  updateCursorVisibility(); // Initial check

  return () => {
    window.removeEventListener('resize', updateCursorVisibility);
  };
};