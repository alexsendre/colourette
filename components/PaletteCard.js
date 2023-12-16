/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Eye, Trash } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { deletePalette } from '../api/paletteData';

function PaletteCard({ paletteObj, onUpdate }) {
  const removePalette = () => {
    if (window.confirm(`Remove ${paletteObj.title}?`)) {
      deletePalette(paletteObj.fbK).then().then(() => onUpdate());
    }
  };

  return (
    <div>
      <div>
        <div style={{ margin: '10px 20px', backgroundColor: 'transparent', color: 'black' }}>
          <div className="d-flex flex-column palette-colors">
            <div className="d-flex flex-row">
              <div key={paletteObj.hex1}>
                <div className="palette-display" style={{ backgroundColor: `${paletteObj.hex1}` }} />
              </div>
              <div key={paletteObj.hex2}>
                <div className="palette-display" style={{ backgroundColor: `${paletteObj.hex2}` }} />
              </div>
              <div key={paletteObj.hex3}>
                <div className="palette-display" style={{ backgroundColor: `${paletteObj.hex3}` }} />
              </div>
              <div key={paletteObj.hex4}>
                <div className="palette-display" style={{ backgroundColor: `${paletteObj.hex4}` }} />
              </div>
              <div key={paletteObj.hex5}>
                <div className="palette-display" style={{ backgroundColor: `${paletteObj.hex5}` }} />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <div className="">
                <p className="palette-title">{paletteObj.title}</p>
              </div>
              <div className="d-flex justify-content-end gap-3">
                <div>
                  <Link href={`/palette/${paletteObj.fbK}`} passHref>
                    <Button className="btn-hide pal-card-btn">
                      <Eye color="black" size={24} />
                    </Button>
                  </Link>
                </div>
                <div>
                  <Button className="btn-hide pal-card-btn" onClick={removePalette}>
                    <Trash color="black" size={21} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PaletteCard.propTypes = {
  paletteObj: PropTypes.shape({
    fbK: PropTypes.string,
    title: PropTypes.string,
    hex1: PropTypes.string,
    hex2: PropTypes.string,
    hex3: PropTypes.string,
    hex4: PropTypes.string,
    hex5: PropTypes.string,
    // description: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PaletteCard;
