import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './sign-up-form.scss';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultFormValue = {
  displayName: '',
  email: '',
  password: '',
  confirm: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValue);
  const { displayName, email, password, confirm } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormValue);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert('Paswword do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log('user creation encountered an error', error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an accout?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          name='displayName'
          required
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          name='confirm'
          required
          onChange={handleChange}
          value={confirm}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
