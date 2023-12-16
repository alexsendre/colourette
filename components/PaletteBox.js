/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import NewPaletteForm from './forms/NewPaletteForm';
import ColorBox from './ColorBox';

function PaletteBox() {
  const [colors, setColors] = useState([]);
  const [lockedColors, setLockedColors] = useState([]);

  const randomColor = () => {
    let arr = [];
    // sets 5 color boxes
    for (let index = 0; index < 5; index++) {
      if (lockedColors.includes(index)) {
        // if color is locked, keep existing color
        arr[index] = colors[index];
      } else {
        // if color ≠ locked, generate new
        let randomHex = `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, 0).toUpperCase()}`;
        arr[index] = randomHex;
      }
    }
    setColors(arr);
  };

  const toggleLock = (value) => {
    setLockedColors((prevLockedColors) => {
      // checks for value inside lockedColors array
      if (prevLockedColors.includes(value)) {
        // if value is true (the same value), it unlocks the color
        return prevLockedColors.filter((lockedValue) => lockedValue !== value);
      }
      // if value is not the same, locks color
      return [...prevLockedColors, value];
    });
  };

  // renders an initial palette on first render
  useEffect(() => {
    randomColor();
  }, []);

  return (
    <>
      <div className="palette-container text-center">
        <div className="palette-box mt-4">
          {
            colors.map((color, value) => (
              <ColorBox key={color} color={color} isLocked={lockedColors.includes(value)} lockToggler={() => toggleLock(value)} />
            ))
          }
        </div>
        <div className="mt-3">
          <Button variant="danger" size="lg" style={{ marginRight: '5px' }} className="basic-btn randomize-btn" onClick={() => randomColor()}>RANDOMIZE</Button>
          <NewPaletteForm colors={colors} />
        </div>
      </div>
    </>
  );
}

export default PaletteBox;
