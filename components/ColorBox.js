import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function ColorBox({ color, isLocked, lockToggler }) {
  return (
    <>
      <div className="gen-page-flow">
        <h3>{color}</h3>
        <div className="color-box" style={{ backgroundColor: `${color}` }} />
        <div>
          <Button size="sm" type="button" className="mt-2 mb-3 lock-btn" onClick={lockToggler}>{isLocked ? 'UNLOCK' : 'LOCK'}</Button>
        </div>
      </div>
    </>
  );
}

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  lockToggler: PropTypes.func.isRequired,
};

export default ColorBox;
