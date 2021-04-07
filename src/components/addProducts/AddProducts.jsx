import React from 'react';
import { Form,Container } from 'react-bootstrap';

const AddProducts = (props) => {
  return(
    <Container>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>price</Form.Label>
          <Form.Control type="number"/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>further notes</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Container>
  )
}

export default AddProducts;