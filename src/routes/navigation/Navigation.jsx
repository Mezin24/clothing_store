import React from 'react';
import { Link } from 'react-router-dom';
import CrownLogo from '../../assets/crown.svg';
import { useUserContext } from '../../contexts/userContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useUserContext();
  const signOutHandler = async () => {
    const res = await signOutUser();
    setCurrentUser(null);
  };

  return (
    <div className='navigation'>
      <Link to='/' className='logo-container'>
        <img src={CrownLogo} alt='crown logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          Shop
        </Link>
        {currentUser ? (
          <span className='nav-link' onClick={signOutHandler}>
            Sign Out
          </span>
        ) : (
          <Link className='nav-link' to='/auth'>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;
