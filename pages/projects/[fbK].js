/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import PaletteCard from '../../components/PaletteCard';
import { viewProjectPalettes } from '../../api/mergedData';

export default function ViewProjects() {
  const [projectDetails, setProjectDetails] = useState({});

  const router = useRouter();

  const { fbK } = router.query;

  const getDetails = () => {
    viewProjectPalettes(fbK).then(setProjectDetails);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <div className="mt-5 mb-5 text-center">
        <div className="d-flex justify-content-start">
          <Button size="sm" className="basic-btn back-btn mt-2" onClick={() => router.push('/projects/view')}>BACK</Button>
        </div>
        <div>
          <h1 className="display-4 fw-bolder">{projectDetails.name}</h1>
          <hr className="mb-3 w-25 center" />
          <h4 className="display-6">{projectDetails.about}</h4>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="text-center">
          <h3 className="mt-3 text-center">PALETTES</h3>
          <hr className="mb-3 w-10 center" />
          <Button size="md" className="basic-btn mb-3" onClick={() => router.push('/generate')}>Generate Palette</Button>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {(projectDetails.palettes < 1) ? 'No palettes linked yet!' : projectDetails.palettes?.map((palette) => (
            <PaletteCard key={palette.fbK} paletteObj={palette} onUpdate={getDetails} />
          ))}
        </div>
      </div>
    </div>
  );
}
