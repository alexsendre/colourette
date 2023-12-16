/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { LockFill } from 'react-bootstrap-icons';

function ColorBox({ color, isLocked, lockToggler }) {
  return (
    <>
      <div className="mt-2">
        <h3>{color}</h3>
        <Button variant="light" type="button" className="mb-2 btn-hide" onClick={lockToggler}>
          <div className="color-box" style={{ backgroundColor: `${color}` }}>
            <p>
              {isLocked ? <LockFill color="black" size={48} /> : ''}
            </p>
          </div>
        </Button>
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
