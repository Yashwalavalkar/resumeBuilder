import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const Resume3toPrint = () => {
  const personalinfo = useSelector((state) => state.personalInfo);
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

  return (
    <div>
      <div className='row'>
        <div className='col-sm-10 border mt-3' style={{ paddingLeft: '40px', marginRight: "" }} ref={resumeRef}>
          <div className='row '>
            <div className='col-sm-6'>
              <div><h3>{personalinfo.firstName}</h3></div>
              
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
                  {personalinfo.state}
                </div>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div>
            <div>
              <h3 className='text-success'>About</h3>
            </div>
            <div>
              {personalinfo.objective}
            </div>
          </div>

          <div className='row'>
            <h4 className='text-success'>Work Experience</h4>
            <hr></hr>
            {Object.entries(experiences).map(([id, experience]) => (
              <div key={id}>
                <h5 className='text-primary'>Experience {id}</h5>
                <p><b>Job Title: </b>{experience.jobTitle}</p>
                <p><b>Organization Name: </b>{experience.organizationName}</p>
                <p><b>Start Year: </b>{experience.startYear}</p>
                <p><b>End Year: </b>{experience.endYear}</p>
              </div>
            ))}
          </div>

          <div className='row'>
            <div className='col-sm-6'>
              <div>
                <h3 className='text-success'>Education</h3>
              </div>
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
              </div>
            </div>
            <div className='col-sm-6'>
            </div>
            <div><h4 className='text-success'>Skills</h4></div>
            <div>
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
            <div className='bg-success mt-2' style={{ height: '10px' }}></div>
          </div>
        </div>

        <div className='col-sm-2' style={{ paddingLeft: '200px', marginTop: "150px" }}>
          
        </div>
      </div>
    </div>
  );
};
