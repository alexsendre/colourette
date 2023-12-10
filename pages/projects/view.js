import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getProject } from '../../api/projectData';
import { useAuth } from '../../utils/context/authContext';

function ViewProjects() {
  const [projects, setProjects] = useState([]);
  const { user } = useAuth();

  const getAllPalettes = () => {
    getProject(user.uid).then(setProjects);
  };

  useEffect(() => {
    getAllPalettes();
  });

  if (projects.length < 1) {
    return (
      <div>
        <h1 className="text-center mt-4">MY PROJECTS</h1>
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
  return (
    <div key={projects.fbK}>
      <h1 className="text-center mt-4">MY PROJECTS</h1>
      <hr className="mb-4 w-25 center" />
      <div className="mt-3 mb-4 text-center">
        <Link href="/projects/new" passHref>
          <Button variant="primary" size="lg" className="basic-btn">Create New Project?</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <h3>Something here</h3>
      </div>
    </div>
  );
}

export default ViewProjects;
