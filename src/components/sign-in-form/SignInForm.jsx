import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './sign-in-form.scss';

import {
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

const defaultFormValue = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValue);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormValue);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createAuthUserWithEmailAndPassword(user);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('incorrect password');
      }
      if (error.code === 'auth/user-not-found') {
        alert('no user associated with this email');
      }

      console.log(error.code);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an accout?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          required
          onChange={handleChange}
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
