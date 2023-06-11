import React, { useState, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';


const UserForm = props => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    job: '',
    city: '',
    bio: '',
  })

  const [step, setStep] = useState(1);

  const { firstName, lastName, email, job, city, bio } = formData;

  //Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  }

  //Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  }

  switch (step) {
    case 1:
      return (
        <Fragment>
          <FormUserDetails nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />
          {/* <Button onClick={e => nextStep(e)}>me</Button> */}
        </Fragment>
      )
    case 2:
      return (
        <FormPersonalDetails nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData}></FormPersonalDetails>
      )
    case 3:
      return (<Confirm nextStep={nextStep} prevStep={prevStep} formData={formData}></Confirm>)
    default:
      return <h1>I don't know why eslint get this error</h1>
  }
}

export default UserForm
