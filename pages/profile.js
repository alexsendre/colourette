/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
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

  if (palettes.length < 1) {
    return (
      <>
        <div className="d-flex flex-column text-center mt-5 mb-5">
          <div className="d-flex justify-content-center mb-5">
            <ProfileCard />
          </div>
          <div className="mt-2">
            <h1>My Palettes</h1>
            <hr className="w-10 center mb-2" />
          </div>
          <p className="display-6">This is where your saved palettes live.
            <br />
            No palettes? No problem!
          </p>
          <Link passHref href="/generate">
            <Button size="lg" className="basic-btn w-25 center mt-2">Generate!</Button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="d-flex flex-column text-center mt-5 mb-5">
      <div className="d-flex justify-content-center mb-5">
        <ProfileCard />
      </div>
      <div className="mt-2">
        <h1>My Palettes</h1>
        <hr className="w-10 center mb-4" />
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {palettes.map((palette) => (
          <PaletteCard key={palette.fbK} paletteObj={palette} onUpdate={getAllPalettes} />
        ))}
      </div>
    </div>
  );
}
