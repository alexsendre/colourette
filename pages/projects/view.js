import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

function ViewProjects() {
  return (
    <div>
      <h1 className="text-center mt-4">MY PALETTES</h1>
      <hr className="mb-4 w-25 center" />
      <div className="mt-3 mb-4 text-center">
        <h3 className="mb-3">Nothing here.. yet.</h3>
        <Link passHref href="/projects/new">
          <Button size="lg" className="btn-basic">Create Project</Button>
        </Link>
      </div>
    </div>
  );
}

export default ViewProjects;
