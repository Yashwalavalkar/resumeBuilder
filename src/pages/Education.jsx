import React from 'react'
import { SideComponent } from './SideComponent';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { educationData } from '../redux/action';

const Education = () => {
  const dispatch = useDispatch();
  const [educationdata,setEducationData] = useState({graduation:'',university:'',degree:'',startYear:'',endYear:''});


  const handleClick = () =>{
    dispatch(educationData(educationdata));
  }
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setEducationData((preveData)=>({
      ...preveData,
      [name]:value
    }))
  }
  console.log(educationdata);
  return (
    <div>
      <div className='container'>
      <div className='row'>
        <div className='col-sm-4'><SideComponent/></div>
        <div className='col-sm-8'>
          <div className='row'>
            <div className='col-sm-12 mt-3'>
            <h4>Education</h4>
            <div className='row'>
              <div className='col-sm-2'></div>
              <div className='col-sm-4 p-2'>
                <label>Type</label><br></br>
                <select 
                className='form-control'
                name='graduation'
                value={educationdata.graduation}
                onChange={handleChange}
                >
                  <option>Graduation</option>
                  <option>Post Graduation</option>
                </select>

                <label>University</label><br></br>
                <input 
                className='form-control'
                name='university'
                value={educationdata.university}
                onChange={handleChange}
                type='text'></input>

                <label>Start Year</label><br></br>
                <input 
                 className='form-control'
                 type='date'
                 name='startYear'
                 value={educationdata.startYear}
                 onChange={handleChange}
                 ></input>
              </div>
              <div className='col-sm-4 mt-3 p-2'>
              <br></br><br></br>
                <label>Degree</label><br></br>
                <input 
                className='form-control'
                name='degree'
                value={educationdata.degree}
                onChange={handleChange}
                type='text'></input>
                <label>End Year</label><br></br>
                <input 
                className='form-control'
                name='endYear'
                value={educationdata.endYear}
                onChange={handleChange}
                type='date'></input>
              </div>
              <hr></hr>
              <div className='row'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8 d-flex justify-content-end'>
                <div className="col-sm-3 d-flex justify-content-end align-items-center">
                <button className="form-control me-3" style={{border:'2px solid blue'}}>
                  <Link to="/workexperience" className="text-decoration-none">
                  Back
                </Link>
                </button>
                
                  <Link
                    to="/skills"
                    className="text-decoration-none bg-primary text-white p-2 rounded"
                    onClick={handleClick}
                  >
                    Next
                  </Link>
              </div>
                </div>
                <div className='col-sm-2'></div>
              </div>
              <div className='col-sm-2'></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Education;