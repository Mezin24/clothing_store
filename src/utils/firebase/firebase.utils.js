import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyABfvrlHCuhCNCtVDHdcm8RFf0575W8abM',
  authDomain: 'clothing-store-110d6.firebaseapp.com',
  projectId: 'clothing-store-110d6',
  storageBucket: 'clothing-store-110d6.appspot.com',
  messagingSenderId: '880279482327',
  appId: '1:880279482327:web:421f8677873abfdaffe592',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
