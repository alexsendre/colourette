import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <>
      <div
        className="d-flex flex-row text-center justify-content-center align-items-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <div className="d-flex flex-row">
          <div className="d-flex flex-column">
            <h1 className="fw-bolder">
              COLOURETTE
              <br />
              <hr className="h-divider center my-1" />
            </h1>
            <p>Click the button below to login!</p>
            <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
