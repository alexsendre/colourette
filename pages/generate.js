import React from 'react';
import PaletteBox from '../components/PaletteBox';

function GeneratePage() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center mt-5">Generate Colors</h1>
        <hr className="center w-25" />
        <div>
          <PaletteBox />
        </div>
      </div>
    </>
  );
}

export default GeneratePage;
