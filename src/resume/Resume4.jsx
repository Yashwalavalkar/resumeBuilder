import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Component for Resume4 page
export const Resume4 = () => {
  // Select data from Redux store
  const personalinfo = useSelector((state) => state.personalInfo);
  const experiences = useSelector((state) => state.workexperience);
  const educationData = useSelector((state) => state.educationInfo);
  const skillList = useSelector((state) => state.skills);
  // Initialize state for file name
  const [fileName, setFileName] = useState("Resume");
  const resumeRef = useRef();
  // Function to handle saving the resume as PDF
  const handleSave = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${fileName}.pdf`);
      })
      .catch((err) => console.error("Error creating PDF:", err));
  };
  // Return JSX for Resume4 component
=======
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const Resume4 = () => {
  const personalinfo = useSelector(state => state.personalInfo);
  const experiences = useSelector((state) => state.workexperience);
  const educationData = useSelector((state) => state.educationInfo);
  const skillList = useSelector((state) => state.skills);

  const [fileName, setFileName] = useState('Resume');
  const resumeRef = useRef();

  const handleSave = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${fileName}.pdf`);
    }).catch((err) => console.error('Error creating PDF:', err));
  };

>>>>>>> 844b61773401de169753446cc89df342540a4cf2
  return (
    <div>
      <div className="row">
        <div
          className="col-sm-6 border mt-3"
          style={{ paddingLeft: "40px" }}
          ref={resumeRef}
        >
<<<<<<< HEAD
          {/* Header section */}
          <div className="row bg-primary text-white">
            <div className="col-sm-6">
              <div>
                <h3 className="">
                  {personalinfo.firstName} {personalinfo.lastName}
                </h3>
              </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
              <ul type="none">
                {personalinfo.email}
                <br></br>
                <div className="d-flex justify-content-end">
                  {personalinfo.mobile}
                  <br></br>
                </div>
                <div className="d-flex justify-content-end">
                  {personalinfo.address}
                  <br></br>
                </div>
                <div className="d-flex justify-content-end">
=======
          <div className="row bg-primary text-white">
            <div className="col-sm-6">
              <div>
                <h3 className="">{personalinfo.firstName} {personalinfo.lastName}</h3>
              </div>
              
            </div>
            <div className='col-sm-6 d-flex justify-content-end'>
              <ul type='none'>
                {personalinfo.email}<br></br>
                <div className='d-flex justify-content-end'>
                  {personalinfo.mobile}<br></br>
                </div>
                <div className='d-flex justify-content-end'>
                  {personalinfo.address}<br></br>
                </div>
                <div className='d-flex justify-content-end'>
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
                  {personalinfo.state}
                </div>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-primary">About</h3>
            </div>
<<<<<<< HEAD
            <div>{personalinfo.objective}</div>
          </div>

          <div className="row">
            {/* Work Experience section */}
            <h4 className="text-primary">Work Experience</h4>
            <hr></hr>
            {Object.entries(experiences).map(([id, experience]) => (
              <div key={id}>
                <h5 className="text-primary">Experience {id}</h5>
                <p>
                  <b>Job Title: </b>
                  {experience.jobTitle}
                </p>
                <p>
                  <b>Organization Name: </b>
                  {experience.organizationName}
                </p>
                <p>
                  <b>Start Year: </b>
                  {experience.startYear}
                </p>
                <p>
                  <b>End Year: </b>
                  {experience.endYear}
                </p>
=======
            <div>
              {personalinfo.objective}
            </div>
          </div>

          <div className='row'>
            <h4 className='text-primary'>Work Experience</h4>
            <hr></hr>
            {Object.entries(experiences).map(([id, experience]) => (
              <div key={id}>
                <h5 className='text-primary'>Experience {id}</h5>
                <p><b>Job Title: </b>{experience.jobTitle}</p>
                <p><b>Organization Name: </b>{experience.organizationName}</p>
                <p><b>Start Year: </b>{experience.startYear}</p>
                <p><b>End Year: </b>{experience.endYear}</p>
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-sm-6">
<<<<<<< HEAD
              {/* Education section */}
=======
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
              <div>
                <h3 className="text-primary">Education</h3>
              </div>
              <div>
<<<<<<< HEAD
                <b>Graduation - </b>
                {educationData.graduation === ""
                  ? "Graduation"
                  : `${educationData.graduation}`}
              </div>
              <div>
                <b>University - </b>
                {educationData.university}
              </div>
              <div>
                <b>Degree - </b>
                {educationData.degree}
              </div>
              <div>
                <div>
                  {educationData.startYear} - {educationData.endYear}
                </div>
=======
                <b>Graduation - </b>{educationData.graduation === '' ? 'Graduation' : `${educationData.graduation}`}
              </div>
              <div>
                <b>University - </b>{educationData.university}
              </div>
              <div>
                <b>Degree - </b>{educationData.degree}
              </div>
              <div>
                <div>{educationData.startYear} - {educationData.endYear}</div>
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <h4 className="text-primary">Skills</h4>
              </div>
              <ul>
                {Object.entries(skillList).map(([id, data]) => (
                  <li key={id}>{data.skill}</li>
                ))}
              </ul>
            </div>
<<<<<<< HEAD
            <div
              className="bg-success container mt-2"
              style={{ height: "10px" }}
            ></div>
          </div>
        </div>
        {/* Save section */}
        <div
          className="col-sm-6"
          style={{ paddingLeft: "200px", marginTop: "150px" }}
        >
=======
            <div className="bg-success container mt-2" style={{ height: "10px" }}></div>
          </div>
        </div>

        <div className="col-sm-6" style={{ paddingLeft: "200px", marginTop: "150px" }}>
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
          <div>
            <h5>Create File Name</h5>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
            <div className="col-sm-3 d-flex mt-2">
<<<<<<< HEAD
              <button
                className="form-control me-3"
                style={{ border: "2px solid blue" }}
              >
=======
              <button className="form-control me-3" style={{ border: "2px solid blue" }}>
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
                <Link to="/skills" className="text-decoration-none">
                  Back
                </Link>
              </button>

              <button className="btn bg-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
