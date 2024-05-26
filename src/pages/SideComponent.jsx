<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
export const SideComponent = () => {
  // Component for the side navigation links
  return (
    <div className="container">
      <div className="d-flex flex-column ">
        <Link className="p-3 text-decoration-none border" to="/personalinfo">
          Personal Info
        </Link>
        <Link className="p-3 text-decoration-none border" to="/workexperience">
          Work Experience
        </Link>
        <Link className="p-3 text-decoration-none border" to="/education">
          Education
        </Link>
        <Link className="p-3 text-decoration-none border" to="/skills">
          Key Skills
        </Link>
      </div>
    </div>
  );
};
=======
import React from 'react'
import { Link } from 'react-router-dom'
export const SideComponent = () => {
  return (
    <div className='container'>
        <div className='d-flex flex-column '>
          <Link className='p-3 text-decoration-none border' to='/personalinfo'>Personal Info</Link>
          <Link className='p-3 text-decoration-none border' to='/workexperience'>Work Experience</Link>
          <Link className='p-3 text-decoration-none border' to='/education'>Education</Link>
          <Link className='p-3 text-decoration-none border' to='/skills'>Key Skills</Link>
        </div>
    </div>
  )
}
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
