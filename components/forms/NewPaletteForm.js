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
};

function NewPaletteForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      updateColor(formInput).then(() => router.push('/palette/view'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createPalette(payload).then(({ name }) => {
        const patchPayload = { fbK: name };

        updatePalette(patchPayload).then(() => {
          router.push('/palette/view');
        });
      });
    }
  };

  useEffect(() => {
    if (obj.fbK) setFormInput(obj);
  }, [obj]);

  return (
    <>
      <Button variant="primary" size="lg" className="basic-btn" onClick={handleShow}>
        SAVE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Save Palette</Modal.Title>
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
};

NewPaletteForm.defaultProps = {
  obj: initialState,
};

export default NewPaletteForm;
