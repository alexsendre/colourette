import React from 'react';
import PropTypes from 'prop-types';
import LockButton from './LockButton';

function ColorBox({ color, toggleLock }) {
  // const [isLocked, setIsLocked] = useState(false);
  // const [lockedColors, setLockedColors] = useState([]);

  // const toggleLock = () => {
  //   setIsLocked((locked) => {
  //     if (!locked) {
  //       setLockedColors([color]);
  //       console.warn('registered as:', locked, 'unlocked:', lockedColors);
  //     }
  //     if (locked) {
  //       setLockedColors((prevColors) => prevColors.slice(0, -1));
  //       console.warn('registered as:', locked, 'locked:', lockedColors);
  //     }
  //     return !locked;
  //   });
  // // };

  // useEffect(() => {
  //   toggleLock();
  // }, [color]);

  return (
    <>
      <div className="gen-page-flow">
        <h3>{color}</h3>
        <div className="color-box" style={{ backgroundColor: `${color}` }} />
        <LockButton toggleLockClick={toggleLock} />
      </div>
    </>
  );
}

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  toggleLock: PropTypes.func.isRequired,
};

export default ColorBox;

// TODO: figure out a function that returns random values so that each color box is randomly generated
// TODO: if ColorBox is LOCKED, use useMemo & useCallback to ensure cached value stays the same until unlocked
