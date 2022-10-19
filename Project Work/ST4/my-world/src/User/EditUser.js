import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/edit.css";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  //   alert(id);
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate(`/form`);
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container editUser">
      <div className="w-75 mx-auto shadow rounded p-5">
        <h2 className="text-center mb-4 fs-1">Edit a User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your problem Name"
              name="problem"
              value={problem}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter the checkIn Date"
              name="checkIn"
              value={checkIn}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Paste the URL fo rthe image"
              name="image"
              value={image}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="mt-3 w-100 btn btn-outline-warning rounded btn-block">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
