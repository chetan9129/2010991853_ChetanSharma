import React, { useState } from "react";
// import Swal from "sweetalert2";

function Edit({ peps, setFormDataPeps, selectedPeps, setIsEditing }) {
  const id = selectedPeps.id;

  const [firstName, setFirstName] = useState(selectedPeps.firstName);
  const [lastName, setLastName] = useState(selectedPeps.lastName);
  const [email, setEmail] = useState(selectedPeps.email);
  const [mobile, setMobile] = useState(selectedPeps.mobile);
  const [appointementDate, setAppointementDate] = useState(
    selectedPeps.appointementDate
  );

  const handleUpdate = (e) => {
    e.preventDefault();

    const peop = {
      id,
      firstName,
      lastName,
      email,
      mobile,
      appointementDate,
    };

    for (let i = 0; i < peps.length; i++) {
      if (peps[i].id === id) {
        peps.splice(i, 1, peop);
        break;
      }
    }

    setFormDataPeps(peps);
    setIsEditing(false);
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Form</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
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
        <label htmlFor="mobile">Mobile Number</label>
        <input
          id="mobile"
          type="number"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <label htmlFor="date">Appointment Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={appointementDate}
          onChange={(e) => setAppointementDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
