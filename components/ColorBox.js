import React from 'react';
import PropTypes from 'prop-types';

function ColorBox({ color }) {
  return (
    <>
      <div className="gen-page-flow">
        <h3>{color}</h3>
        <div className="color-box" style={{ backgroundColor: `${color}` }} />
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
