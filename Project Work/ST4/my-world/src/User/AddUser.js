import React, { useState } from "react";
import axios from "axios";
import { useHistory, useNavigate } from "react-router-dom";
import "../CSS/addUser.css";

const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    problem: "",
    checkIn: "",
    image: "",
  });

  const { name, username, email, phone, problem, checkIn, image } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    navigate(`/form`);
  };
  return (
    <div className="container addUser">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your problem Name"
              name="problem"
              value={problem}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter the checkIn Date"
              name="checkIn"
              value={checkIn}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Paste the URL for the image"
              name="image"
              value={image}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-outline-warning w-100 btn-block">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
