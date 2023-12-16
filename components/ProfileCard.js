/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuth } from '../utils/context/authContext';

function ProfileCard() {
  const { user } = useAuth();

  return (
    <div>
      <div className="text-center float-start profile-card">
        <img src={user.photoURL} alt="User Profile" className="user-img mt-5" />
        <h1 className="display-6 text-white">{user.displayName}</h1>
      </div>
    </div>
  );
}

export default ProfileCard;
