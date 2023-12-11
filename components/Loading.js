import React from 'react';
import {
  Spinner,
} from 'react-bootstrap';

export default function Loading() {
  return (
    <div className="text-center mt-3">
      <Spinner
        animation="border"
        style={{
          color: 'black',
          width: '40px',
          height: '40px',
        }}
      />
    </div>
  );
}
