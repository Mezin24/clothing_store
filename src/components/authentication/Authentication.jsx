import './authentication.scss';

import SignUpForm from '../sign-up-form/SignUpForm';
import SignInForm from '../sign-in-form/SignInForm';

const Authentication = () => {
  return (
    <div className='authintication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
