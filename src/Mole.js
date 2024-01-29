// Mole.js

import React, { useEffect } from 'react';

const Mole = ({ onClick }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClick();
    }, Math.random() * 2000 + 1000); // Random time between 1 and 3 seconds
    return () => clearTimeout(timer);
  }, [onClick]);

  return <div className="mole">🦔</div>;
};

export default Mole;
