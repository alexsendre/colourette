/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import PaletteCard from '../components/PaletteCard';
import { getPalette } from '../api/paletteData';

export default function ProfileArea() {
  const [palettes, setPalettes] = useState([]);
  const { user } = useAuth();

  const getAllPalettes = () => {
    getPalette(user.uid).then(setPalettes);
  };

  useEffect(() => {
    getAllPalettes();
  });

  return (
    <div className="d-flex flex-column">
      <div className="text-center float-start">
        <img src={user.photoURL} alt="User Profile" className="w-25 mt-5" />
        <br />
        <h1>{user.displayName}</h1>
        <hr className="w-25" style={{ margin: '0 auto' }} />
      </div>
      <div className="text-center mt-5">
        <h1>Saved Palettes</h1>
        <p>Saved palettes go below here...</p>
        <div className="d-flex flex-wrap">
          {palettes.map((palette) => (
            <PaletteCard key={palette.fbK} paletteObj={palette} onUpdate={getAllPalettes} />
          ))}
        </div>
      </div>
    </div>
  );
}
