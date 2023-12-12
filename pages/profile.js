/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import PaletteCard from '../components/PaletteCard';
// import ProjectCard from '../components/ProjectCard';
import { getPalette } from '../api/paletteData';
// import { getProject } from '../api/projectData';

export default function ProfileArea() {
  const [palettes, setPalettes] = useState([]);
  // const [projects, setProjects] = useState([]);
  const { user } = useAuth();

  const getAllPalettes = () => {
    getPalette(user.uid).then(setPalettes);
  };

  // const getAllProjects = () => {
  //   getProject(user.uid).then(setProjects);
  // };

  useEffect(() => {
    getAllPalettes();
    // getAllProjects();
  });

  return (
    <div className="d-flex mt-5">
      <div className="text-center float-start">
        <img src={user.photoURL} alt="User Profile" className="w-10 mt-5" />
        <br />
        <h1 className="display-3">{user.displayName}</h1>
        {/* <hr className="w-25" style={{ margin: '0 auto' }} /> */}
        <div className="text-center mt-5">
          <h1>Saved Palettes</h1>
          <hr className="w-10 center mb-4" />
          <div className="d-flex flex-wrap">
            {palettes.map((palette) => (
              <PaletteCard key={palette.fbK} paletteObj={palette} onUpdate={getAllPalettes} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="text-center mt-5">
        <h1>My Projects:</h1>
        <div className="d-flex flex-wrap">
          {projects.map((proj) => (
            <ProjectCard key={proj.fbK} projectObj={proj} onUpdate={getAllProjects} />
          ))}
        </div> */}
      {/* </div> */}
    </div>
  );
}
