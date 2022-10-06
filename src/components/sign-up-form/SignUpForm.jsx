import React, { useState } from 'react';

import {
  createAuthUserWithemailAndPassword,
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
      const { user } = await createAuthUserWithemailAndPassword(
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
    <div>
      <h1>sign up with our email and password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='displayName'>Display Name</label>
        <input
          type='text'
          id='displayName'
          name='displayName'
          required
          onChange={handleChange}
          value={displayName}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          required
          onChange={handleChange}
          value={email}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          required
          onChange={handleChange}
          value={password}
        />

        <label htmlFor='confirm'>Confirm Password</label>
        <input
          type='password'
          id='confirm'
          name='confirm'
          required
          onChange={handleChange}
          value={confirm}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
