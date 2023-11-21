import React from 'react';
import { useRouter } from 'next/router';

export default function test() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className="text-center mt-5">
      <h1 className="mb-3">LINK WORKS</h1>
      <p>This link is for when clicking on an individual color box component. It will redirect to the specific color when functional.</p>
      <button className="global-btn" type="button" onClick={() => router.push('/generate')}>GO BACK</button>
    </div>
  );
}
