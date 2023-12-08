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

  const toggleLock = (index) => {
    setLockedColors((prevLockedColors) => {
      if (prevLockedColors.includes(index)) {
        // unlock color
        return prevLockedColors.filter((lockedIndex) => lockedIndex !== index);
      }
      // lock color
      return [...prevLockedColors, index];
    });
  };

  useEffect(() => {
    randomColor();
  }, []);

  return (
    <>
      <div className="palette-container text-center">
        <div className="palette-box mt-4">
          {
            colors.map((color, index) => (
              <ColorBox color={color} isLocked={lockedColors.includes(index)} lockToggler={() => toggleLock(index)} />
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
