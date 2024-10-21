import React, { useState, useEffect } from 'react';
import '../App.css';

const GlowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showGlow, setShowGlow] = useState(true);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setShowGlow(false); // Disable glow for screens smaller than lg
    } else {
      setShowGlow(true); // Enable glow for screens lg and above
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Initial check for screen size
    handleResize();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {showGlow && (
        <div
          className="glow"
          style={{
            transform: `translate3d(${position.x - 400}px, ${position.y - 400}px, 0)`,
          }}
        />
      )}
    </>
  );
};

export default GlowCursor;
