import React from 'react';
import { Link } from 'react-router-dom';
import CrownLogo from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <Link to='/' className='logo-container'>
        <img src={CrownLogo} alt='crown logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          Shop
        </Link>
        <Link className='nav-link' to='/sign-in'>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
