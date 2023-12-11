import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FloatingLabel,
  Form,
  FormControl,
  Modal,
} from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { createPalette, updatePalette } from '../../api/paletteData';
import { getProject } from '../../api/projectData';

const initialState = {
  title: '',
  description: '',
  project_id: '',
};

const colorsInitialState = {
  hex1: '',
  hex2: '',
  hex3: '',
  hex4: '',
  hex5: '',
};

function NewPaletteForm({ obj, colors }) {
  const [show, setShow] = useState(false);
  // Open/Close Modal functions

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();
  const { user } = useAuth();

  const [formInput, setFormInput] = useState(initialState);
  const [projects, setProjects] = useState([]);
  // Array of strings for capturing hex code values
  const [formData, setFormData] = useState(obj.fbK ? {} : {
    hex1: colors[0],
    hex2: colors[1],
    hex3: colors[2],
    hex4: colors[3],
    hex5: colors[4],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.fbK) {
      updatePalette(formInput).then(() => handleClose());
    } else {
      const dataPayload = {
        ...formInput,
        hex1: formData.hex1,
        hex2: formData.hex2,
        hex3: formData.hex3,
        hex4: formData.hex4,
        hex5: formData.hex5,
        uid: user.uid,
      };

      // creates palette node with title, description, fbK and uid values.
      createPalette(dataPayload).then(({ name }) => {
        const patchPayload = { fbK: name };

        updatePalette(patchPayload).then(() => {
          router.push('/palette/view');
        });
      });
    }
    handleClose();
  };

  // For handling text based changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Color dependency for ensuring the values are rendering when saving
  useEffect(() => {
    if (obj.fbK) {
      setFormInput(obj);
    }

    getProject(user.uid).then(setProjects);

    setFormData({
      hex1: colors[0] || '',
      hex2: colors[1] || '',
      hex3: colors[2] || '',
      hex4: colors[3] || '',
      hex5: colors[4] || '',
    });
  }, [obj.fbK, colors]);

  return (
    <>
      <Button size="lg" className="save-btn" onClick={handleShow}>
        {obj.fbK ? 'EDIT' : 'SAVE'}
      </Button>

      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{obj.fbK ? 'Update' : 'Save'} Palette</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <FloatingLabel controlId="floatingInput1" label="Palette Title" className="mb-3">
                <FormControl
                  maxLength={24}
                  autoComplete="new-password"
                  type="text"
                  placeholder="Enter Palette Title"
                  name="title"
                  value={formInput.title}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel controlId="floatingInput1" label="Palette Description" className="mb-3">
                <FormControl
                  type="textarea"
                  autoComplete="off"
                  maxLength={256}
                  placeholder="Enter Palette Description"
                  name="description"
                  value={formInput.description}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Form.Group>

            {obj.fbK ? '' : (
              <Form.Group
                className="mb-3"
              >
                <FloatingLabel controlId="floatingInput3" label="Link Project" className="mb-3 f-w f-c">
                  <Form.Select
                    name="project_id"
                    onChange={handleChange}
                    value={formInput.project_id}
                  >
                    <option value="">Select Project</option>
                    {
                projects.map((proj) => (
                  <option
                    key={proj.fbK}
                    value={proj.fbK}
                  >
                    {proj.name}
                  </option>
                ))
              }
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            )}

            {obj.fbK ? ''
              : (
                <Form.Group>
                  <FloatingLabel controlId="floatingInput3">
                    <div className="d-flex flex-row form-height">
                      <FormControl
                        type="text"
                        className="color-text"
                        value={formData.hex1}
                        style={{ backgroundColor: `${formData.hex1}` }}
                        disabled
                      />
                      <FormControl
                        type="text"
                        className="color-text"
                        value={formData.hex2}
                        style={{ backgroundColor: `${formData.hex2}` }}
                        disabled
                      />
                      <FormControl
                        type="text"
                        className="color-text"
                        value={formData.hex3}
                        style={{ backgroundColor: `${formData.hex3}` }}
                        disabled
                      />
                      <FormControl
                        type="text"
                        className="color-text"
                        value={formData.hex4}
                        style={{ backgroundColor: `${formData.hex4}` }}
                        disabled
                      />
                      <FormControl
                        type="text"
                        className="color-text"
                        value={formData.hex5}
                        style={{ backgroundColor: `${formData.hex5}` }}
                        disabled
                      />
                    </div>
                  </FloatingLabel>
                </Form.Group>
              )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

NewPaletteForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    fbK: PropTypes.string,
  }),
  colors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

NewPaletteForm.defaultProps = {
  obj: initialState,
  colors: colorsInitialState,
};

export default NewPaletteForm;
