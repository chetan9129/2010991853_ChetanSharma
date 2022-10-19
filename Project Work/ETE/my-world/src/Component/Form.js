import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/form.css";

const Form = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async (id) => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container formUser">
      <div className="py-4">
        <h1>Patient Dashboard</h1>
        <div className="d-flex">
          <p>
            You are viewing th submmited form details:{" "}
            <img
              src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/clapping-hands_1f44f.gif"
              width="35px"
              height="35px"
              alt=""
            />
          </p>
        </div>

        <table class="table">
          <thead className="table-dark">
            <tr className="">
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Problem</th>
              <th scope="col">Check In</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-striped table-dark">
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <th scope="row">
                  <img
                    src={user.image}
                    alt=""
                    height="50px"
                    width="50px"
                    className="rounded-circle"
                  />
                </th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.problem}</td>
                <td>{user.checkIn}</td>
                <td>
                  <Link
                    class="btn btn-primary mx-2 text-decoration-none"
                    to={`/users/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    to={`/users/edit/${user.id}`}
                    class="btn btn-outline-primary mx-2 text-decoration-none"
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger text-decoration-none"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
