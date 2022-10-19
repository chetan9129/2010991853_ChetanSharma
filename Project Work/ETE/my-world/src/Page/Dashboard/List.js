import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "../../CSS/list.css";

function List({ peps, handleEdit, handleDelete }) {
  return (
    <div className="cointable">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No.</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Appointement Date</th>
            <th>Cause of Admit</th>
            <th colspan={2} className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {peps.length > 0 ? (
            peps.map((peps, i) => (
              <tr key={peps.id}>
                <td>{i + 1}</td>
                <td>{peps.fullName}</td>
                <td>{peps.email}</td>
                <td>{peps.mobile}</td>
                <td>{peps.appointementDate} </td>
                <td>{peps.diseaseName}</td>
                <td className="text-right">
                  <Button
                    onClick={() => handleEdit(peps.id)}
                    className="button muted-button"
                    variant="warning"
                  >
                    Edit
                  </Button>
                </td>
                <td className="text-left">
                  <Button
                    onClick={() => handleDelete(peps.id)}
                    className="button muted-button"
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Peoples</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default List;
