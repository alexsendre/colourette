import React from 'react';
import PaletteBox from '../components/PaletteBox';

function GeneratePage() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center mt-5">Generate Colors</h1>
        <PaletteBox />
        <div className="btn-group">
          <button className="generate-btn" type="button" onClick={() => console.warn('clicked')}>
            GENERATE
          </button>
          <button className="save-btn" type="button" size="lg" onClick={() => console.warn('saved')}>
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}

export default GeneratePage;
