/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function ProfileArea() {
  const { user } = useAuth();

  return (
    <div className="d-flex flex-column">
      <div className="text-center float-start">
        <img src={user.photoURL} alt="User Profile" className="w-25 mt-5" />
        <br />
        <h1>{user.displayName}</h1>
        <hr className="w-25" style={{ margin: '0 auto' }} />
      </div>
      <div className="text-center mt-5">
        <h1>Saved Palettes</h1>
        <p>Saved palettes go below here...</p>
      </div>
    </div>
  );
}
