<<<<<<< HEAD
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

//Here the selected resume is to displayed
=======
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

>>>>>>> 844b61773401de169753446cc89df342540a4cf2
export const Resume1toPrint = () => {
  const personalinfo = useSelector((state) => state.personalInfo);
  const experiences = useSelector((state) => state.workexperience);
  const educationData = useSelector((state) => state.educationInfo);
<<<<<<< HEAD
  const resumeRef = useRef();
  const skillList = useSelector((state) => state.skills);

  return (
    <div className="container">
      {/* Displayed the Secelct resume */}
=======
  const [fileName, setFileName] = useState('Resume');
  const resumeRef = useRef();
  const skillList = useSelector((state) => state.skills);

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

  return (
    <div className="container">
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
      <div className="row">
        <div
          className="col-sm-10 border mt-3"
          style={{ paddingLeft: "12px", marginRight: "" }}
          ref={resumeRef}
        >
          <div className="row p-2" style={{ backgroundColor: "aquamarine" }}>
            <div className="col-sm-4 d-flex  flex-column">
<<<<<<< HEAD
              <h5>
                {personalinfo.firstName} {personalinfo.lastName}
              </h5>
            </div>
            <div>
              {/* displayed the objective of the project */}
=======
              <h5>{personalinfo.firstName}</h5>
              
            </div>
            <div>
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
              <p>{personalinfo.objective}</p>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4"></div>
          </div>

          <div className="row mt-3 p-2">
            <div className="col-sm-5">
<<<<<<< HEAD
              {/* display  the personala details */}
              <h6>Personal Details</h6>
              <ul>
                <b>
                  <li>Email</li>
                </b>
                {personalinfo.email}
                <b>
                  <li>Mobile</li>
                </b>
                {personalinfo.mobile}
                <b>
                  <li>Address</li>
                </b>
                {personalinfo.address}
                <b>
                  <li>Country</li>
                </b>
                {personalinfo.state}
              </ul>
              <div>
                <h4 style={{ color: "aquamarine" }}>Skills</h4>
              </div>
              {/* displaye the skill  */}
=======
              <h6>Personal Details</h6>
              <ul>
                <b><li>Email</li></b>
                {personalinfo.email}
                <b><li>Mobile</li></b>
                {personalinfo.mobile}
                <b><li>Address</li></b>
                {personalinfo.address}
                <b><li>Country</li></b>
                {personalinfo.state}
              </ul>
              <div>
                    <h4 style={{ color: "aquamarine" }}>Skills</h4>
                  </div>
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
              <div className="row">
                {Object.entries(skillList).map(([id, data]) => (
                  <div key={id}>
                    <ul>
                      <li>{data.skill}</li>
                    </ul>
<<<<<<< HEAD
                  </div>
                ))}
              </div>
=======
                    
                  </div>
                ))}
              </div>

              
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
            </div>
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-10">
<<<<<<< HEAD
                  {/* display the wrok experience */}
=======
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
                  <h4 style={{ color: "aquamarine" }}>Work Experience</h4>
                </div>
                <hr />
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
              </div>

              <div className="row">
                <h4>Work Experience List</h4>
                {Object.entries(experiences).map(([id, experience]) => (
                  <div key={id}>
                    <h5>Experience {id}</h5>
                    <p>Job Title: {experience.jobTitle}</p>
                    <p>Start Year: {experience.startYear}</p>
                    <p>Organization Name: {experience.organizationName}</p>
                    <p>End Year: {experience.endYear}</p>
                  </div>
                ))}
              </div>

              <div className="row mt-5">
                <div className="col-sm-10">
                  <div>
                    <h4 style={{ color: "aquamarine" }}>Education</h4>
                  </div>
<<<<<<< HEAD
                  {/* Display the education details */}
                  <div>
                    <b>Graduation - </b>
                    {educationData.graduation === ""
                      ? "Graducation"
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

                  <div>
                    <b>Graduation - </b>{educationData.graduation===''?'Graducation':`${educationData.graduation}`}
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
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
              </div>

              <div className="row mt-5">
<<<<<<< HEAD
=======
                
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-2"
          style={{ paddingLeft: "140px", marginTop: "150px" }}
<<<<<<< HEAD
        ></div>
=======
        >
          
          
        </div>
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
      </div>
    </div>
  );
};
