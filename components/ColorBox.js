import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LockButton from './LockButton';

function ColorBox({ color, lockedColor }) {
  const [isLocked, setIsLocked] = useState(false);
  const [lockedColors, setLockedColors] = useState([]);
  const [currentColor, setCurrentColor] = useState(color);

  const toggleLock = () => {
    setIsLocked((locked) => {
      if (!locked) {
        setLockedColors([color]);
        setCurrentColor(color);
        console.warn('registered as:', locked, 'unlocked:', lockedColors);
      }
      if (locked) {
        setLockedColors((prevColors) => prevColors.slice(0, -1));
        console.warn('registered as:', locked, 'locked:', lockedColors);
      }
      return !locked;
    });
  };

  useEffect(() => {
    toggleLock();

    if (lockedColor) {
      setCurrentColor(color);
    }
  }, [lockedColor]);

  return (
    <>
      <div className="gen-page-flow">
        <h3>{currentColor}</h3>
        <div className="color-box" style={{ backgroundColor: `${currentColor}` }} />
        <LockButton toggleLockClick={toggleLock} isLocked={isLocked} lockedColor={lockedColors} />
      </div>
    </>
  );
}

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  lockedColor: PropTypes.string.isRequired,
};

export default ColorBox;
