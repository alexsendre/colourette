import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';

function ColorCard({ colorObj }) {
  return (
    <Card style={{
      width: '18rem', margin: '10px', backgroundColor: `#${colorObj.hex}`, color: 'white',
    }}
    >
      <Card.Body>
        <Card.Title className="text-center">
          {colorObj.name}
          <br />
          #{colorObj.hex}
        </Card.Title>
        <div className="text-center">
          <Link href={`/color/${colorObj.fbK}`} passHref>
            <Button className="basic-btn">👀</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

ColorCard.propTypes = {
  colorObj: PropTypes.shape({
    fbK: PropTypes.string,
    name: PropTypes.string,
    hex: PropTypes.string,
  }).isRequired,
};

export default ColorCard;
