import React, { useState } from "react";
import { formData } from "../../Component/index";
import Swal from "sweetalert2";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";
import "../../CSS/index.css";
// import Header from "../../Component/Header";
// import Contact from "../../Component/Contact";

function Dashboard() {
  const [formDataPeps, setFormDataPeps] = useState(formData);
  const [selectedPeps, setSelectedPeps] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [peps] = formDataPeps.filter(
      (formDataPeps) => formDataPeps.id === id
    );

    setSelectedPeps(peps);
    setIsEditing(true);
  };
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [peps] = formDataPeps.filter(
          (formDataPeps) => formDataPeps.id === id
        );

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${peps.firstName} ${peps.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setFormDataPeps(
          formDataPeps.filter((formDataPeps) => formDataPeps.id !== id)
        );
      }
    });
  };

  return (
    <div className="indexForm">
      <div className="container">
        <h1 className="formIndex" style={{ margin: "18px" }}>
          Person Form Data
        </h1>
        <p className="formIndexPara">To add more user </p>
        <div style={{ margin: "18px" }}>
          <button onClick={() => setIsAdding(true)} className="button">
            Add People
          </button>
        </div>
        {/* List */}
        {!isAdding && !isEditing && (
          <>
            {/* <Header setIsAdding={setIsAdding} /> */}
            <List
              peps={formDataPeps}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        )}
        {/* Add */}
        {isAdding && (
          <Add
            peps={formDataPeps}
            setFormDataPeps={setFormDataPeps}
            setIsAdding={setIsAdding}
          />
        )}
        {/* Edit */}
        {isEditing && (
          <Edit
            peps={formDataPeps}
            selectedPeps={selectedPeps}
            setFormDataPeps={setFormDataPeps}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
