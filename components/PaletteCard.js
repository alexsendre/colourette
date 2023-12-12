import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Card, CardText } from 'react-bootstrap';
import { deletePalette } from '../api/paletteData';

function PaletteCard({ paletteObj, onUpdate }) {
  const removePalette = () => {
    if (window.confirm(`Remove ${paletteObj.title}?`)) {
      deletePalette(paletteObj.fbK).then().then(() => onUpdate());
    }
  };

  return (
    <div style={{ filter: 'drop-shadow(0 0 0.15rem black)' }}>
      <Card style={{
        width: '18rem', margin: '10px', backgroundColor: 'white', color: 'black', height: '210px',
      }}
      >
        <Card.Body className="text-center">
          <Card.Title className="text-center">
            {paletteObj.title}
          </Card.Title>
          <div style={{ height: '100px', overflow: 'scroll' }} className="mb-2">
            <CardText>
              {paletteObj.description}
            </CardText>
          </div>
          <div className="text-center btn-group palette-btn">
            <Link href={`/palette/${paletteObj.fbK}`} passHref>
              <Button className="basic-btn">👀</Button>
            </Link>
            <Button variant="danger" className="basic-btn" onClick={removePalette}>🗑️</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

PaletteCard.propTypes = {
  paletteObj: PropTypes.shape({
    fbK: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PaletteCard;
