import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='d-flex align-items-center justify-content-between shadow-sm '>
        <img
          src='https://almablog-media.s3.ap-south-1.amazonaws.com/01_Alma_Better_Logo_caa4b55aad.png'
          alt='Alma Better Logo'
          style={{ height: '70px', width: '190px' }}
        />

        <div className='d-flex'>
          <Link to='/template' className='nav-link m-2'>Resume Template</Link>
          <Link to='/myresume' className='nav-link m-2'>My Resume</Link>
          <Link to='/about' className='nav-link m-2'>About Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
