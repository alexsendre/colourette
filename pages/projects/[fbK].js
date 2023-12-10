/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import PaletteCard from '../../components/PaletteCard';
import { viewProjectPalettes } from '../../api/mergedData';

export default function ViewTeam() {
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
          <Button size="lg" className="basic-btn back-btn mt-2" onClick={() => router.push('/projects/view')}>Back</Button>
        </div>
        <div>
          <h1>{projectDetails.name}</h1>
          <hr className="mb-3 w-10 center" />
          <h4>{projectDetails.about}</h4>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="text-center">
          <h3 className="mt-3 text-center">PALETTES</h3>
          <hr className="mb-3 w-25 center" />
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {projectDetails.palettes?.map((palette) => (
            <PaletteCard key={palette.fbK} paletteObj={palette} onUpdate={getDetails} />
          ))}
        </div>
      </div>
    </div>
  );
}
