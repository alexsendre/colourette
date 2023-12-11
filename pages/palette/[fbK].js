import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSinglePalette } from '../../api/paletteData';
import NewPaletteForm from '../../components/forms/NewPaletteForm';

function ViewPalette() {
  const [paletteDetails, setPaletteDetails] = useState({});

  const router = useRouter();
  const { fbK } = router.query;

  const getDetails = () => {
    getSinglePalette(fbK).then(setPaletteDetails);
  };

  useEffect(() => {
    getDetails();
  }, [fbK, paletteDetails]);

  return (
    <div key={paletteDetails.fbK}>
      <div className="d-flex flex-row top-view">
        <div className="mt-5 mx-5 d-flex flex-row">
          <div className="mb-5">
            <h1 className="display-4 fw-bolder">{paletteDetails.title}</h1>
            <hr className="mb-3 w-10" />
            <h3 className="display-5">{paletteDetails.description}</h3>
          </div>
        </div>
        <div className="btn-group edit-btn-view">
          <NewPaletteForm obj={paletteDetails} />
        </div>
      </div>
      <div className="d-flex flex-column mb-5">
        <div className="d-flex flex-wrap justify-content-center gap-5">
          <div className="d-flex flex-column text-center" key={paletteDetails.hex1}>
            <div className="color-display" style={{ backgroundColor: `${paletteDetails.hex1}` }} />
            <h4>{paletteDetails.hex1}</h4>
          </div>
          <div className="d-flex flex-column text-center" key={paletteDetails.hex2}>
            <div className="color-display" style={{ backgroundColor: `${paletteDetails.hex2}` }} />
            <h4>{paletteDetails.hex2}</h4>
          </div>
          <div className="d-flex flex-column text-center" key={paletteDetails.hex3}>
            <div className="color-display" style={{ backgroundColor: `${paletteDetails.hex3}` }} />
            <h4>{paletteDetails.hex3}</h4>
          </div>
          <div className="d-flex flex-column text-center" key={paletteDetails.hex4}>
            <div className="color-display" style={{ backgroundColor: `${paletteDetails.hex4}` }} />
            <h4>{paletteDetails.hex4}</h4>
          </div>
          <div className="d-flex flex-column text-center" key={paletteDetails.hex5}>
            <div className="color-display" style={{ backgroundColor: `${paletteDetails.hex5}` }} />
            <h4>{paletteDetails.hex5}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPalette;
