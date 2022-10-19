import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../CSS/view.css";

const View = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    problem: "",
    checkIn: "",
    image: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container p-5 view">
      <div class="row ">
        <div class="col m-5">
          <img
            src={user.image}
            alt=""
            height="350px"
            width="300px"
            className="rounded"
          />
        </div>
        <div class="col m-5">
          <p>
            Name: <span>{user.name}</span>
          </p>
          <p>
            UserName: <span>{user.username}</span>
          </p>
          <p>
            Email: <span>{user.email}</span>
          </p>
          <p>
            Phone Number: <span>{user.phone}</span>
          </p>
          <p>
            Problem: <span>{user.problem}</span>
          </p>
          <p>
            Check In Date: <span>{user.checkIn}</span>
          </p>
        </div>
        <Link to="/form" className="btn btn-outline-warning">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default View;
