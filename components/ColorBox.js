import Link from 'next/link';
import React from 'react';

function ColorBox() {
  return (
    <Link passHref href="/test">
      <div className="color-box">
        Hex Code
      </div>
    </Link>
  );
}

export default ColorBox;

// TODO: look into wrapping return div with an anchor tag that routes to respective fbK on click
// TODO: figure out a function that returns random values so that each color box is randomly generated
// TODO: if ColorBox is LOCKED, use useMemo & useCallback to ensure cached value stays the same until unlocked
