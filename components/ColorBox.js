import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'react-bootstrap';

function ColorBox({ color }) {
  // const [lock, setLock] = useState(false);
  // const [prevData, setPrevData] = useState([]);

  // const handleUnlock = () => setLock(false);
  // const handleLock = () => setLock(true);

  // const lockColors = (e) => {
  //   e.preventDefault();
  //   console.warn('this is e', e);
  //   console.warn('this is lock', lock);
  //   if (e.target.value === 'LOCK') {
  //     // e.preventDefault();
  //     setLock(true);
  //   } else if (e.target.value === 'UNLOCK') {
  //     setLock(false);
  //   }
  // };

  return (
    <>
      <div className="gen-page-flow">
        <h3>{color}</h3>
        <div className="color-box" style={{ backgroundColor: `${color}` }} />
        {/* <Button size="sm" type="submit" className="mt-1 mb-3 lock-btn" onClick={lockColors}>LOCK</Button> */}
      </div>
    </>
  );
}

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorBox;

// TODO: look into wrapping return div with an anchor tag that routes to respective fbK on click
// TODO: figure out a function that returns random values so that each color box is randomly generated
// TODO: if ColorBox is LOCKED, use useMemo & useCallback to ensure cached value stays the same until unlocked
