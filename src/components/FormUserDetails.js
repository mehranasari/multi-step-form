import React, { Fragment } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const FormUserDetails = ({ nextStep, prevStep, formData, setFormData }) => {

  const continueProcess = async e => {
    e.preventDefault();
    nextStep(e);
  }

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Form>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={e => onChange(e)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={e => onChange(e)} />
            </Form.Group>
            <Button onClick={e => continueProcess(e)} variant="primary">next</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}


export default FormUserDetails;
