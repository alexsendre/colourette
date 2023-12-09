import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getPalette } from '../../api/paletteData';
import { useAuth } from '../../utils/context/authContext';
import PaletteCard from '../../components/PaletteCard';

export default function ViewColors() {
  const [palettes, setPalettes] = useState([]);
  const { user } = useAuth();

  const getAllPalettes = () => {
    getPalette(user.uid).then(setPalettes);
  };

  useEffect(() => {
    getAllPalettes();
  });

  if (palettes.length < 1) {
    return (
      <div>
        <h1 className="text-center mt-4">MY PALETTES</h1>
        <hr className="mb-4 w-25 center" />
        <div className="mt-3 mb-4 text-center">
          <h3 className="mb-3">Nothing here.. yet. Click below to start generating a palette!</h3>
          <Link href="/generate" passHref>
            <Button variant="primary" size="lg" className="basic-btn">Generate Palette</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div key={palettes.fbK}>
      <h1 className="text-center mt-4">MY PALETTES</h1>
      <hr className="mb-4 w-25 center" />
      <div className="mt-3 mb-4 text-center">
        <Link href="/generate" passHref>
          <Button variant="primary" size="lg" className="basic-btn">Generate Another?</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {palettes.map((palette) => (
          <PaletteCard key={palette.fbK} paletteObj={palette} onUpdate={getAllPalettes} />
        ))}
      </div>
    </div>
  );
}
