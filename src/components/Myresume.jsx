import React from 'react'
import { useSelector } from 'react-redux';
import { Resume1 } from '../resume/Resume1';
import { Link } from 'react-router-dom';
import { Resume1toPrint } from '../myResumtoPring/Resume1toPrint';
import { Resume2toPrint } from '../myResumtoPring/Resume2toPrint';
import { Resume3toPrint } from '../myResumtoPring/Resume3toPrint';
import { Resume4toPrint } from '../myResumtoPring/Resume4toPrint';
export const Myresume = () => {
  const template = useSelector((state) => state.template);
  return (
    <div>
<div className="row m-5 d-flex justify-content-end">
                      {template === 'templete1' ?
                        <Resume1toPrint/> : template === 'templete2' ?
                          <Resume2toPrint/> : template === 'templete3' ?
                            <Resume3toPrint/> : template === 'templete4' ?
                              <Resume4toPrint/> : ''}
                    </div>
    </div>
  )
}
 