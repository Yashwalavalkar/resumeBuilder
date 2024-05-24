import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SideComponent } from "../pages/SideComponent";
import { Link } from "react-router-dom";
import { skillData } from '../redux/action';

export const Skills = () => {
  const [skills, setSkills] = useState([{ skill: '' }]);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(skillData(skills));
  }

  const addSkill = () => {
    setSkills([...skills, { skill: '' }]);
  };

  const handleSkillChange = (index, event) => {
    const newSkills = skills.map((skill, i) => {
      if (i === index) {
        return { ...skill, skill: event.target.value };
      }
      return skill;
    });
    setSkills(newSkills);
  };

  const template = useSelector((state) => state.template);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-4'>
          <SideComponent />
        </div>
        <div className='col-sm-8'>
          <div className="row">
            <div className="col-sm-12 mt-3">
              <h4>Key Skills</h4>
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                  {skills.map((skill, index) => (
                    <div className="row mb-2" key={index}>
                      <input
                        className='form-control'
                        id={`skill-${index}`}
                        type='text'
                        value={skill.skill}
                        onChange={(e) => handleSkillChange(index, e)}
                      />
                    </div>
                  ))}
                </div>
                <div className="col-sm-3"></div>
                <div className='col-sm-12 d-flex justify-content-center mt-3'>
                  <button className='btn text-primary' onClick={addSkill}>Add New</button>
                </div>
                <div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-4 d-flex justify-content-end">
                      {template === 'templete1' ?
                        <Link className='text-decoration-none bg-primary text-white p-2 rounded' to='/resume1'
                          onClick={handleClick}
                        >VIEW
                        </Link> : template === 'templete2' ?
                          <Link className='bg-primary p-2 text-white rounded text-decoration-none' onClick={handleClick} to='/resume2'>VIEW</Link> : template === 'templete3' ?
                            <Link className='text-white bg-primary rounded p-2 text-decoration-none' to='/resume3' onClick={handleClick}>VIEW</Link> : template === 'templete4' ?
                              <Link className='text-white bg-primary p-2 rounded text-decoration-none' onClick={handleClick} to='/resume4'>VIEW</Link> : ''}
                    </div>
                    <div className="col-sm-2"></div>
                  </div>
                </div>
                <div className="col-sm-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
