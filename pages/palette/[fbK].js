import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getSinglePalette } from '../../api/paletteData';

function ViewPalette() {
  const [paletteDetails, setPaletteDetails] = useState({});
  // const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { fbK } = router.query;

  const getDetails = () => {
    getSinglePalette(fbK).then(setPaletteDetails);
  };

  useEffect(() => {
    getDetails();
  });

  return (
    <>
      <div className="mt-5 mx-5 d-flex flex-row">
        <div className="mb-5">
          <h1 className="display-4 fw-bolder">{paletteDetails.title}</h1>
          <hr className="mb-3 w-10" />
          <h3 className="display-5">{paletteDetails.description}</h3>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-wrap justify-content-center gap-5">
          <div className="d-flex flex-column text-center">
            <div className="color-display" style={{ backgroundColor: `${paletteDetails.hex1}` }} />
            <h4>{paletteDetails.hex1}</h4>
          </div>
          <div className="d-flex flex-column text-center">
            <div className="color-display" style={{ backgroundColor: `${paletteDetails.hex2}` }} />
            <h4>{paletteDetails.hex2}</h4>
          </div>
          <div className="d-flex flex-column text-center">
            <div className="color-display" style={{ backgroundColor: `${paletteDetails.hex3}` }} />
            <h4>{paletteDetails.hex3}</h4>
          </div>
          <div className="d-flex flex-column text-center">
            <div className="color-display" style={{ backgroundColor: `${paletteDetails.hex4}` }} />
            <h4>{paletteDetails.hex4}</h4>
          </div>
          <div className="d-flex flex-column text-center">
            <div className="color-display" style={{ backgroundColor: `${paletteDetails.hex5}` }} />
            <h4>{paletteDetails.hex5}</h4>
          </div>
        </div>
        <div className="btn-group center">
          <Button size="lg" className="basic-btn mt-4 center">EDIT</Button>
          <Button size="lg" variant="danger" className="basic-btn mt-4 center">DELETE</Button>
        </div>
      </div>
    </>
  );
}

export default ViewPalette;
