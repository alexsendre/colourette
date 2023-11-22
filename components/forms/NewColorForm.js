import React from 'react';
import Form from 'react-bootstrap/Form';

// const initialState = {
//   name: '',
//   hex: '',
// };

function NewColorForm() {
  return (
    <div className="text-center">
      <Form className="color-form">
        <h1 className="mt-5">Add a Color!</h1>
        <Form.Group className="mt-4 mb-3 form-input" controlId="ControlInput1">
          <Form.Label>Color Name</Form.Label>
          <Form.Control className="input-field" type="text" placeholder="Red" />
        </Form.Group>
        <Form.Group className="mb-3 form-input" controlId="ControlTextarea1">
          <Form.Label>Hex Code</Form.Label>
          <br />
          <Form.Text>Hex value ONLY, nothing else please!</Form.Text>
          <Form.Control className="input-field" type="text" placeholder="FF0000" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewColorForm;
