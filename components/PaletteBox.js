import React from 'react';
import ColorBox from './ColorBox';

function PaletteContainer() {
  return (
    <div className="palette-container text-center">
      <div className="palette-box mt-4">
        {[...Array(5)].map(() => <ColorBox />)}
      </div>
    </div>
  );
}

export default PaletteContainer;

// TODO: generate onClick should generate random colors on ALL unlocked boxes
// TODO: save onClick should capture information and display a save form
