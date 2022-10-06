import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../sign-up-form/SignUpForm';
import SignInForm from '../sign-in-form/SignInForm';

const Authentication = () => {
  return (
    <div>
      <h1>SignIn</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
