/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import PaletteCard from '../../components/PaletteCard';
import viewProjectPalettes from '../../api/mergedData';

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
    <>
      <div className="mt-5 text-center">
        <div className="ms-5 mb-5">
          <h1>{projectDetails.name}</h1>
          <hr className="mb-3" />
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="text-center">
          <h3 className="mt-5 text-center">PALETTES</h3>
          <hr className="mb-3 h-p" />
          <Button size="md" className="btn-m mt-2 mb-4" onClick={() => router.push('/projects/new')}>Add Member</Button>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {projectDetails.palettes?.map((palette) => (
            <PaletteCard key={palette.fbK} paletteObj={palette} onUpdate={getDetails} />
          ))}
        </div>
      </div>
    </>
  );
}
