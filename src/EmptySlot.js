// EmptySlot.js

import React, { useEffect } from 'react';

const EmptySlot = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Do nothing, just simulate moles appearing and disappearing
    }, Math.random() * 2000 + 1000);
    return () => clearTimeout(timer);
  }, []);

  return <div className="empty-slot"></div>;
};

export default EmptySlot;
