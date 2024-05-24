import React, { useState } from "react";
import { SideComponent } from "./SideComponent";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { personalinfoData } from "../redux/action";
export const PersonalInfo = () => {

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  
  // Initialize state for form data
  const [personalinfo, setPersonalinfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    objective: ''
  });
  const dispatch = useDispatch();

  const handleClick = (e) =>{
    dispatch(personalinfoData(personalinfo));
  } 

  // Handle change for input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPersonalinfo((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };
  console.log(personalinfo)
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <SideComponent />
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-3"></div>
            <div>
            <div className="d-flex  align-items-center mt-3 justify-content-evenly mb-2 image-upload-container">
        <div className="image-preview" >
          {preview && <img src={preview} style={{height:'100px',borderRadius:'30px'}}alt="Image Preview" />}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput" className="btn btn-primary m-3">
          Upload Image
        </label>
      </div>

      
    </div>

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-3">
                <label htmlFor="firstName">First Name</label>
                <input
                required
                  type="text"
                  id="firstName"
                  className="form-control"
                  value={personalinfo.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-3">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  value={personalinfo.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={personalinfo.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-3">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="number"
                  id="mobile"
                  className="form-control"
                  value={personalinfo.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <label htmlFor="address">Address</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  id="address"
                  value={personalinfo.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-3">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  value={personalinfo.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-3">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  className="form-control"
                  value={personalinfo.state}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-3">
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="number"
                  id="postalCode"
                  className="form-control"
                  value={personalinfo.postalCode}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <label htmlFor="objective">Objective</label>
                <br />
                <textarea
                  className="form-control"
                  id="objective"
                  style={{ height: "40px" }}
                  value={personalinfo.objective}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-sm-3"></div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-3"></div>

              <div className="col-sm-3 d-flex justify-content-end align-items-center">
                <button
                  className="form-control me-3"
                  style={{ border: "2px solid blue" }}
                >
                  <Link to="/template" className="text-decoration-none">
                    Back
                  </Link>
                </button>

                  <Link
                    to="/workexperience"
                    className="text-decoration-none bg-primary text-white p-2 rounded"
                    onClick={handleClick}
                  >
                    Next
                  </Link>
                  
              </div>

              <div className="col-sm-3"></div>
            </div>

            <div className="col-sm-3 "></div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
