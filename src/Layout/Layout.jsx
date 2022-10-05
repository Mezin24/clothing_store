import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../routes/navigation/Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
