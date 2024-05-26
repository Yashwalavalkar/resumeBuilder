import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const Resume4toPrint = () => {
  const personalinfo = useSelector((state) => state.personalInfo);
=======
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const Resume4toPrint = () => {
  const personalinfo = useSelector(state => state.personalInfo);
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
  const experiences = useSelector((state) => state.workexperience);
  const educationData = useSelector((state) => state.educationInfo);
  const skillList = useSelector((state) => state.skills);

<<<<<<< HEAD
  const [fileName, setFileName] = useState("Resume");
=======
  const [fileName, setFileName] = useState('Resume');
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
  const resumeRef = useRef();

  const handleSave = () => {
    const input = resumeRef.current;
<<<<<<< HEAD
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
=======
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${fileName}.pdf`);
    }).catch((err) => console.error('Error creating PDF:', err));
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
  };

  return (
    <div>
      <div className="row">
        <div
          className="col-sm-12 border mt-3"
          style={{ paddingLeft: "40px" }}
          ref={resumeRef}
        >
          <div className="row bg-primary text-white">
            <div className="col-sm-6">
              <div>
<<<<<<< HEAD
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
=======
            <div className="bg-success container mt-2" style={{ height: "10px" }}></div>
>>>>>>> 844b61773401de169753446cc89df342540a4cf2
          </div>
        </div>
      </div>
    </div>
  );
};
