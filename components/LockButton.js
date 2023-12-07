import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function LockButton({ toggleLockClick, isLocked }) {
  return (
    <div>
      <Button size="sm" type="button" className="mt-2 mb-3 lock-btn" onClick={toggleLockClick}>{isLocked ? 'LOCK' : 'UNLOCK'}</Button>
    </div>
  );
}

LockButton.propTypes = {
  toggleLockClick: PropTypes.func.isRequired,
  isLocked: PropTypes.bool.isRequired,
};

export default LockButton;
