import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshop = await getDoc(userDocRef);
  console.log(userSnapshop);
  console.log(userSnapshop.exists());

  if (!userSnapshop.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithemailAndPassword = async (email, password) => {
  if (!email || !password) return;
  console.log(email, password);

  return await createUserWithEmailAndPassword(auth, email, password);
};
