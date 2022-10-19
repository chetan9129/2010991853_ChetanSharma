import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

function Add({ peps, setFormDataPeps, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [appointementDate, setAppointementDate] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    const id = peps.length + 1;
    const newPeps = {
      id,
      firstName,
      lastName,
      email,
      mobile,
      appointementDate,
    };
    peps.push(newPeps);
    setFormDataPeps(peps);
    setIsAdding(false);
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add People</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          ref={textInput}
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Mobile No.</label>
        <input
          id="mobile"
          type="number"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <label htmlFor="date">Appointement Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={appointementDate}
          onChange={(e) => setAppointementDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
