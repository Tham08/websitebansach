import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Routers from '../Routers/Routers';
const Layout = () => {
  return (
    <>
    <Header/>
    <div>
      <Routers/>
    </div>
    <Footer/>
    </>
  );
}

export default Layout