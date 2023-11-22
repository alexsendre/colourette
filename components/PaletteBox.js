/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import NewPaletteForm from './forms/NewPaletteForm';
import ColorBox from './ColorBox';

function PaletteBox() {
  const [colors, setColors] = useState([]);

  const randomColor = () => {
    let arr = [];
    for (let index = 0; index < 5; index++) {
      let randomHex = `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, 0).toUpperCase()}`;
      arr[index] = randomHex;
    }
    setColors(arr);
  };
  return (
    <>
      <div className="palette-container text-center">
        <div className="palette-box mt-4">
          {
            colors.map((color) => (
              <ColorBox color={color} />
            ))
          }
        </div>
        <Button variant="danger" className="generate-btn" onClick={() => randomColor()}>RANDOMIZE</Button>
      </div>
      <NewPaletteForm colors={colors} />
    </>
  );
}

export default PaletteBox;
