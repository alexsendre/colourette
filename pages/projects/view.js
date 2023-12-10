import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getProject } from '../../api/projectData';
import ProjectCard from '../../components/ProjectCard';

function ViewProjects() {
  const [projects, setProjects] = useState([]);
  const { user } = useAuth();

  const getAllProjects = () => {
    getProject(user.uid).then(setProjects);
  };

  useEffect(() => {
    getAllProjects();
  });

  if (projects.length < 1) {
    return (
      <div>
        <h1 className="text-center mt-4">PROJECTS</h1>
        <hr className="mb-4 w-25 center" />
        <div className="mt-3 mb-4 text-center">
          <h3 className="mb-3">Nothing here.. yet. Click below to create a project!</h3>
          <Link href="/projects/new" passHref>
            <Button variant="primary" size="lg" className="basic-btn">Create Project</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div key={projects.fbK}>
      <h1 className="text-center mt-4">PROJECTS</h1>
      <hr className="mb-4 w-25 center" />
      <div className="mt-3 mb-4 text-center">
        <Link href="/projects/new" passHref>
          <Button variant="primary" size="lg" className="basic-btn">Create Project</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {projects.map((project) => (
          <ProjectCard key={project.fbK} projectObj={project} onUpdate={getAllProjects} />
        ))}
      </div>
    </div>
  );
}

export default ViewProjects;
