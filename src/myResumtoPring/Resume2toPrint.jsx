import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const Resume2toPrint = () => {
  const personalinfo = useSelector((state) => state.personalInfo);
  const experiences = useSelector((state) => state.workexperience);
  const educationData = useSelector((state) => state.educationInfo);
  const skillList = useSelector((state) => state.skills);
  const [fileName, setFileName] = useState('Resume');
  const resumeRef = useRef();

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

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm-12 border mt-3"
          style={{ paddingLeft: "12px" }}
          ref={resumeRef}
        >
          <div className="row p-2 bg-primary">
            <div className="col-sm-4 d-flex flex-column">
              <h5>{personalinfo.firstName}</h5>
            </div>
            <div className="col-sm-8">
              <p>{personalinfo.objective}</p>
            </div>
          </div>

          <div className="row mt-3 p-2">
            <div className="col-sm-5">
              <h3 className='text-primary'>Personal Details</h3>
              <ul>
                <b><li>Email:</li></b> {personalinfo.email}
                <b><li>Mobile:</li></b> {personalinfo.mobile}
                <b><li>Address:</li></b> {personalinfo.address}
                <b><li>Country:</li></b> {personalinfo.state}
              </ul>
              <div>
                <h4 className='text-primary'>Skills</h4>
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
                  <h4 className='text-primary'>Work Experience</h4>
                  <hr />
                </div>
              </div>
              <div className="row">
                {Object.entries(experiences).map(([id, experience]) => (
                  <div key={id}>
                    <h5>Experience {id}</h5>
                    <p><b>Job Title: </b>{experience.jobTitle}</p>
                    <p><b>Organization Name: </b>{experience.organizationName}</p>
                    <p><b>Start Year: </b>{experience.startYear}</p>
                    <p><b>End Year: </b>{experience.endYear}</p>
                  </div>
                ))}
              </div>
              <div className="row mt-5">
                <div className="col-sm-12">
                  <h4 className='text-primary'>Education</h4>
                  <div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
