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
import { updateColor } from '../../api/colorData';
import { useAuth } from '../../utils/context/authContext';
import { createPalette, updatePalette } from '../../api/paletteData';

const initialState = {
  title: '',
  description: '',
  hex1: '',
  hex2: '',
  hex3: '',
  hex4: '',
  hex5: '',
};

function NewPaletteForm({ obj, colors }) {
  const [formInput, setFormInput] = useState(initialState);
  const [show, setShow] = useState(false);

  // Array of strings for capturing hex code values
  const [formData, setFormData] = useState({
    hex1: colors[0],
    hex2: colors[1],
    hex3: colors[2],
    hex4: colors[3],
    hex5: colors[4],
  });

  const router = useRouter();
  const { user } = useAuth();

  // Open/Close Modal functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // For handling text based changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // For handling color changes
  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Capturing the string values and pushing them onto the POST request payload
    const payloadWithHex = {
      ...formInput,
      hex1: formData.hex1,
      hex2: formData.hex2,
      hex3: formData.hex3,
      hex4: formData.hex4,
      hex5: formData.hex5,
    };

    if (obj.fbK) {
      updateColor(formData).then(() => handleClose());
    } else {
      const payload = { ...payloadWithHex, uid: user.uid };
      createPalette(payload).then(({ name }) => {
        const patchPayload = { fbK: name };

        updatePalette(patchPayload).then(() => {
          router.push('/palette/view');
        });
      });
    }
  };

  // Color dependency for ensuring the values are rendering when saving
  useEffect(() => {
    if (obj.fbK) setFormInput(obj);

    setFormData({
      hex1: colors[0] || '',
      hex2: colors[1] || '',
      hex3: colors[2] || '',
      hex4: colors[3] || '',
      hex5: colors[4] || '',
    });
  }, [obj, colors]);

  return (
    <>
      <Button variant="primary" className="save-btn" onClick={handleShow}>
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
                  placeholder="Enter Palette Description"
                  name="description"
                  value={formInput.description}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel controlId="floatingInput3">
                <div className="d-flex flex-row form-height">
                  <FormControl
                    type="text"
                    value={formData.hex1}
                    style={{ backgroundColor: `${formData.hex1}` }}
                    onChange={handleColorChange}
                    disabled
                  />
                  <FormControl
                    type="text"
                    value={formData.hex2}
                    style={{ backgroundColor: `${formData.hex2}` }}
                    onChange={handleColorChange}
                    disabled
                  />
                  <FormControl
                    type="text"
                    value={formData.hex3}
                    style={{ backgroundColor: `${formData.hex3}` }}
                    onChange={handleColorChange}
                    disabled
                  />
                  <FormControl
                    type="text"
                    value={formData.hex4}
                    style={{ backgroundColor: `${formData.hex4}` }}
                    onChange={handleColorChange}
                    disabled
                  />
                  <FormControl
                    type="text"
                    value={formData.hex5}
                    style={{ backgroundColor: `${formData.hex5}` }}
                    onChange={handleColorChange}
                    disabled
                  />
                </div>
              </FloatingLabel>
            </Form.Group>
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
    hex1: PropTypes.string,
    hex2: PropTypes.string,
    hex3: PropTypes.string,
    hex4: PropTypes.string,
    hex5: PropTypes.string,
    fbK: PropTypes.string,
  }),
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

NewPaletteForm.defaultProps = {
  obj: initialState,
};

export default NewPaletteForm;
