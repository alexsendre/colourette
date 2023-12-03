/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    randomColor();
  }, []);

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
        <div className="mt-3">
          <Button variant="danger" size="lg" style={{ marginRight: '5px' }} className="basic-btn" onClick={() => randomColor()}>RANDOMIZE</Button>
          <NewPaletteForm colors={colors} />
        </div>
      </div>
    </>
  );
}

export default PaletteBox;
