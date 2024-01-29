// MoleContainer.js

import React, { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

const MoleContainer = ({ setScore }) => {
  const [displayMole, setDisplayMole] = useState(false);

  const handleClick = () => {
    if (displayMole) {
      setScore((prevScore) => prevScore + 1);
      setDisplayMole(false);
    }
  };

  const moleOrEmpty = displayMole ? <Mole onClick={handleClick} /> : <EmptySlot />;

  return <div className="mole-container" onClick={handleClick}>{moleOrEmpty}</div>;
};

export default MoleContainer;
