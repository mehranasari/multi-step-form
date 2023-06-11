import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Confirm = ({ nextStep, prevStep, formData, setFormData }) => {

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

            <Button onClick={e => backProcess(e)} variant="primary">back</Button>
            <Button onClick={e => continueProcess(e)} variant="primary">next</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Confirm
