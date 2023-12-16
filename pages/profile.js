/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import PaletteCard from '../components/PaletteCard';
import { getPalette } from '../api/paletteData';
import ProfileCard from '../components/ProfileCard';

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
    <div className="mt-5">
      <ProfileCard />
      <div className="d-flex justify-content-around">
        <div className="text-center mt-5">
          <h1>Saved Palettes</h1>
          <hr className="w-10 center mb-4" />
          <div className="d-flex flex-wrap">
            {palettes.map((palette) => (
              <PaletteCard key={palette.fbK} paletteObj={palette} onUpdate={getAllPalettes} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
