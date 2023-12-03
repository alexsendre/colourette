import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { postColor, updateColor } from '../../api/colorData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  name: '',
  hex: '',
};

function NewColorForm() {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { ...formInput, uid: user.uid };
    postColor(payload).then(({ name }) => {
      const patchPayload = { fbK: name };
      updateColor(patchPayload).then(() => router.push('/color/view'));
    });
  };

  return (
    <div className="text-center">
      <Form className="color-form" onSubmit={handleSubmit}>
        <h1 className="mt-5">Add a Color!</h1>
        <hr className="w-25 center mb-3" />
        <Form.Group className="mt-4 mb-3 form-input" controlId="ControlInput1">
          <Form.Label>Color Name</Form.Label>
          <Form.Control
            className="input-field"
            type="text"
            placeholder="Red"
            name="name"
            value={formInput.value}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 form-input" controlId="ControlTextarea1">
          <Form.Label>Hex Code</Form.Label>
          <br />
          <Form.Text>Value Only</Form.Text>
          <Form.Control
            className="input-field"
            type="text"
            placeholder="FF0000"
            name="hex"
            value={formInput.value}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="text-center">
          <Button type="submit">
            Add
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewColorForm;
