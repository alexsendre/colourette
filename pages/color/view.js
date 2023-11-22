import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getColor } from '../../api/colorData';
import ColorCard from '../../components/ColorCard';

export default function ViewColors() {
  const [colors, setColors] = useState([]);

  const getAllColors = () => {
    getColor().then(setColors);
  };

  useEffect(() => {
    getAllColors();
  });

  return (
    <>
      <h1 className="text-center mt-4">COLORS</h1>
      <hr className="mb-4 w-25 center" />
      <div className="mt-3 mb-4 text-center">
        <Link href="/color/new" passHref>
          <Button variant="primary" size="lg" className="basic-btn">Add a Color</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {colors?.map((color) => (
          <ColorCard key={color.fbK} colorObj={color} onUpdate={getAllColors} />
        ))}
      </div>
    </>
  );
}
