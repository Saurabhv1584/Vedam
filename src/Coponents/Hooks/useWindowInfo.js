import { useState, useEffect } from 'react';

const useWindowInfo = () => {
  // Step 1: Set up state to track window width, height, and orientation
  const [windowInfo, setWindowInfo] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
  });

  // Step 2: Define the resize handler
  const handleResize = () => {
    setWindowInfo({
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
    });
  };

  // Step 3: Set up useEffect to add the resize event listener
  useEffect(() => {
    // Add resize event listener on mount
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once

  // Step 4: Return window info
  return windowInfo;
};

export default useWindowInfo;