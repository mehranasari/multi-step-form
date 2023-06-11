import React from 'react'

import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const FormPersonalDetails = ({ nextStep, prevStep, formData, setFormData }) => {

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const continueProcess = async e => {
    e.preventDefault();
    nextStep(e);
  }

  const backProcess = async e => {
    e.preventDefault();
    prevStep(e);
  }


  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={e => onChange(e)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Job</Form.Label>
              <Form.Control type="text" placeholder="Job" name="job" value={formData.job} onChange={e => onChange(e)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control type="text" placeholder="Bio" name="bio" value={formData.bio} onChange={e => onChange(e)} />
            </Form.Group>
            <Button onClick={e => backProcess(e)} variant="primary">back</Button>
            <Button onClick={e => continueProcess(e)} variant="primary">next</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

FormPersonalDetails.propTypes = {

}

export default FormPersonalDetails
