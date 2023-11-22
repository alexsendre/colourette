import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ColorBox() {
  const [hex, setHex] = useState('#000000');

  const randomHex = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setHex(randomColor);
  };

  return (
    <>
      <div className="gen-page-flow">
        <h3>{hex}</h3>
        <div className="color-box" style={{ backgroundColor: `${hex}` }} />
        <Button className="mb-5 mt-3" variant="success" size="md" onClick={() => randomHex()}>RANDOMIZE</Button>
      </div>
    </>
  );
}

export default ColorBox;

// TODO: look into wrapping return div with an anchor tag that routes to respective fbK on click
// TODO: figure out a function that returns random values so that each color box is randomly generated
// TODO: if ColorBox is LOCKED, use useMemo & useCallback to ensure cached value stays the same until unlocked
