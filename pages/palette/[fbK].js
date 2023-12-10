import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSinglePalette } from '../../api/paletteData';
import NewPaletteForm from '../../components/forms/NewPaletteForm';
import { getPalettedColors } from '../../api/palettedColors';

function ViewPalette() {
  const [paletteDetails, setPaletteDetails] = useState({});
  const [palettedColors, setPalettedColors] = useState([]);

  const router = useRouter();
  const { fbK } = router.query;

  const getDetails = () => {
    getSinglePalette(fbK).then((details) => {
      setPaletteDetails(details);
      getPalettedColors(details.fbK).then((colors) => {
        setPalettedColors(colors);
      });
    });
  };

  useEffect(() => {
    getDetails();
  }, [fbK, paletteDetails]);

  return (
    <div key={paletteDetails.fbK}>
      <div className="mt-5 mx-5 d-flex flex-row">
        <div className="mb-5">
          <h1 className="display-4 fw-bolder">{paletteDetails.title}</h1>
          <hr className="mb-3 w-10" />
          <h3 className="display-5">{paletteDetails.description}</h3>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-wrap justify-content-center gap-5">
          {palettedColors.map((color) => (
            <>
              <div className="d-flex flex-column text-center" key={color.hex1}>
                <div className="color-display" style={{ backgroundColor: `${color.hex1}` }} />
                <h4>{color.hex1}</h4>
              </div>
              <div className="d-flex flex-column text-center" key={color.hex2}>
                <div className="color-display" style={{ backgroundColor: `${color.hex2}` }} />
                <h4>{color.hex2}</h4>
              </div>
              <div className="d-flex flex-column text-center" key={color.hex3}>
                <div className="color-display" style={{ backgroundColor: `${color.hex3}` }} />
                <h4>{color.hex3}</h4>
              </div>
              <div className="d-flex flex-column text-center" key={color.hex4}>
                <div className="color-display" style={{ backgroundColor: `${color.hex4}` }} />
                <h4>{color.hex4}</h4>
              </div>
              <div className="d-flex flex-column text-center" key={color.hex5}>
                <div className="color-display" style={{ backgroundColor: `${color.hex5}` }} />
                <h4>{color.hex5}</h4>
              </div>
            </>
          ))}
        </div>
        <div className="btn-group center mt-4 mb-5">
          <NewPaletteForm obj={paletteDetails} />
        </div>
      </div>
    </div>
  );
}

export default ViewPalette;
