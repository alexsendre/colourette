/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Card, CardText } from 'react-bootstrap';
import { EyeFill, PenFill, Trash2Fill } from 'react-bootstrap-icons';
import { deleteProject } from '../api/projectData';
import { deleteProjectPalettes } from '../api/mergedData';

function ProjectCard({ projectObj, onUpdate }) {
  const removeProject = () => {
    if (window.confirm(`Delete ${projectObj.name}?`)) {
      deleteProject(projectObj.fbK).then(deleteProjectPalettes(projectObj.fbK)).then(() => onUpdate());
    }
  };

  return (
    <div style={{ filter: 'drop-shadow(0 0 0.15rem black)' }}>
      <Card style={{
        width: '18rem', margin: '10px', backgroundColor: 'white', color: 'black', height: '210px',
      }}
      >
        <Card.Body className="text-center">
          <Card.Title className="text-center">
            {projectObj.name}
          </Card.Title>
          <div style={{ height: '100px', overflow: 'scroll' }} className="mb-2">
            <CardText>
              {projectObj.about}
            </CardText>
          </div>
          <div className="text-center btn-group gap-5 palette-btn">
            <Link href={`/projects/${projectObj.fbK}`} passHref>
              <Button className="btn-hide">
                <EyeFill color="black" size={24} />
              </Button>
            </Link>
            <Link href={`/projects/edit/${projectObj.fbK}`} passHref>
              <Button className="btn-hide">
                <PenFill color="black" size={24} />
              </Button>
            </Link>
            <Button variant="danger" className="btn-hide" onClick={removeProject}>
              <Trash2Fill color="black" size={24} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

ProjectCard.propTypes = {
  projectObj: PropTypes.shape({
    fbK: PropTypes.string,
    name: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ProjectCard;
