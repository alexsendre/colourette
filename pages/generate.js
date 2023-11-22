import React from 'react';
import PaletteBox from '../components/PaletteBox';
import NewPaletteForm from '../components/forms/NewPaletteForm';

function GeneratePage() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center mt-5">Generate Colors</h1>
        <div>
          <PaletteBox />
          <NewPaletteForm />
        </div>
      </div>
    </>
  );
}

export default GeneratePage;
