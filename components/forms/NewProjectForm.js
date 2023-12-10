import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createProject, updateProject } from '../../api/projectData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  name: '',
  about: '',
};

function NewProjectForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.fbK) {
      updateProject(formInput).then(() => router.push('/projects/view'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createProject(payload).then(({ name }) => {
        const patchPayload = { fbK: name };

        updateProject(patchPayload).then(() => {
          router.push('/projects/view');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <h2 className=" text-center mt-4">
        {obj.fbK ? 'Update' : 'Create'} Project
      </h2>

      <Form.Group
        className="mb-3 mt-3"
      >
        <FloatingLabel controlId="floatingInput1" label="Project Name" className="mb-3">
          <Form.Control
            type="text"
            autoComplete="off"
            maxLength={24}
            placeholder="Name your project"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group
        className="mb-3 mt-3"
      >
        <FloatingLabel controlId="floatingInput2" label="Project Description" className="mb-3">
          <Form.Control
            type="textarea"
            autoComplete="off"
            maxLength={120}
            placeholder="Describe your project"
            name="about"
            value={formInput.about}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="text-center">
        <Button className="center" type="submit">
          {obj.fbK ? 'Update' : 'Create'}
        </Button>
      </Form.Group>
    </Form>
  );
}

NewProjectForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    fbK: PropTypes.string,
  }),
};

NewProjectForm.defaultProps = {
  obj: initialState,
};

export default NewProjectForm;
