import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Card, CardText } from 'react-bootstrap';
import { deletePalette } from '../api/paletteData';

function PaletteCard({ paletteObj, onUpdate }) {
  const removePalette = () => {
    if (window.confirm(`Remove ${paletteObj.title} forever?`)) {
      deletePalette(paletteObj.fbK).then(() => onUpdate());
    }
  };

  return (
    <Card style={{
      width: '18rem', margin: '10px', backgroundColor: '#999999', color: 'white',
    }}
    >
      <Card.Body className="text-center">
        <Card.Title className="text-center">
          {paletteObj.title}
        </Card.Title>
        <CardText>
          {paletteObj.description}
        </CardText>
        <div className="text-center btn-group">
          <Link href={`/palette/${paletteObj.fbK}`} passHref>
            <Button className="basic-btn">VIEW</Button>
          </Link>
          <Link href={`/palette/${paletteObj.fbK}`} passHref>
            <Button variant="warning" className="basic-btn">EDIT</Button>
          </Link>
          <Link href={`/palette/${paletteObj.fbK}`} passHref>
            <Button variant="danger" className="basic-btn" onClick={removePalette}>DEL</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
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
