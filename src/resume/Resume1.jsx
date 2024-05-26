<<<<<<< HEAD
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// Component for Resume1 page
export const Resume1 = () => {
  // Select data from Redux store
  const personalinfo = useSelector((state) => state.personalInfo);
  const experiences = useSelector((state) => state.workexperience);
  const educationData = useSelector((state) => state.educationInfo);
  // Initialize state for file name
  const [fileName, setFileName] = useState("Resume");
  const resumeRef = useRef();
  const skillList = useSelector((state) => state.skills);

  // Function to handle saving the resume as PDF
  const handleSave = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 2, scrollY: -window.scrollY })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
          heightLeft -= pdfHeight;
        }

        pdf.save(`${fileName}.pdf`);
      })
      .catch((err) => console.error("Error creating PDF:", err));
  };

  // Return JSX for Resume1 component
=======
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const Resume1 = () => {
  const personalinfo = useSelector((state) => state.personalInfo);
  const experiences = useSelector((state) => state.workexperience);
  const educationData = useSelector((state) => state.educationInfo);
  const [fileName, setFileName] = useState('Resume');
  const resumeRef = useRef();
  const skillList = useSelector((state) => state.skills);

  const handleSave = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 2, scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`${fileName}.pdf`);
    }).catch((err) => console.error('Error creating PDF:', err));
  };

>>>>>>> 844b61773401de169753446cc89df342540a4cf2
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm-12 mt-3"
          style={{ paddingLeft: "12px" }}
          ref={resumeRef}
        >
          <div className="row p-2" style={{ backgroundColor: "aquamarine" }}>
            <div className="col-sm-4 d-flex flex-column">
<<<<<<< HEAD
              {/* Details sections */}
              <h5>
                {personalinfo.firstName} {personalinfo.lastName}
              </h5>
=======
              <h5>{personalinfo.firstName} {personalinfo.lastName}</h5>
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
            </div>
            <div className="col-sm-8">
              <p>{personalinfo.objective}</p>
            </div>
          </div>
<<<<<<< HEAD
          {/* Personal info section */}
=======

>>>>>>> 844b61773401de169753446cc89df342540a4cf2
          <div className="row mt-3 p-2">
            <div className="col-sm-5">
              <h6>Personal Details</h6>
              <ul>
<<<<<<< HEAD
                <b>
                  <li>Email:</li>
                </b>{" "}
                {personalinfo.email}
                <b>
                  <li>Mobile:</li>
                </b>{" "}
                {personalinfo.mobile}
                <b>
                  <li>Address:</li>
                </b>{" "}
                {personalinfo.address}
                <b>
                  <li>Country:</li>
                </b>{" "}
                {personalinfo.state}
=======
                <b><li>Email:</li></b> {personalinfo.email}
                <b><li>Mobile:</li></b> {personalinfo.mobile}
                <b><li>Address:</li></b> {personalinfo.address}
                <b><li>Country:</li></b> {personalinfo.state}
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
              </ul>
              <div>
                <h4 style={{ color: "aquamarine" }}>Skills</h4>
              </div>
              <div className="row">
                {Object.entries(skillList).map(([id, data]) => (
                  <div key={id}>
                    <ul>
                      <li>{data.skill}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-12">
                  <h4 style={{ color: "aquamarine" }}>Work Experience</h4>
                  <hr />
                </div>
              </div>
              <div className="row">
<<<<<<< HEAD
                {/* Mapping skills */}
=======
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
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
                <div className="col-sm-12">
                  <h4 style={{ color: "aquamarine" }}>Education</h4>
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
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="col-sm-12 d-flex justify-content-center mt-3">
          {/* Save options */}
=======
        <div
          className="col-sm-12 d-flex justify-content-center mt-3"
        >
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
          <div>
            <h5>Create File Name</h5>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
            <div className="d-flex mt-2">
<<<<<<< HEAD
              {/* Back button */}
=======
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
              <button className="form-control p-2 me-3">
                <Link to="/skills" className="text-decoration-none">
                  Back
                </Link>
              </button>
<<<<<<< HEAD
              {/* Saving the resume after click button */}
=======
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
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
