import React, { useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([
    {
      Name: "John",
      Email: "john@gmail.com",
      PhoneNo: "+293 213 234123",
      Address: "New York",
      Date: new Date().toISOString().split("T")[0], // Automatically set the current date
      Type: "Editor",
      Status: "Active",
    },
  ]);
  const handleStatusChange = (index) => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      newUsers[index].Status = newUsers[index].Status === "Active" ? "Inactive" : "Active";
      newUsers[index].Date = new Date().toISOString().split('T')[0]; // Update date when status changes
      return newUsers;
    });
  };
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div
            className="d-flex vh-100 justify-content-center align-items-center"
            style={{ backgroundColor: "#F9F9F6" }}
          >
            <div className="w-50 bg-white rounded p-3">
            <Link to="/create-User" className="btn btn-success">Add User</Link>

              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.Name}</td>
                      <td>{user.Email}</td>
                      <td>{user.PhoneNo}</td>
                      <td>{user.Address}</td>
                      <td>{user.Date}</td>
                      <td>{user.Type}</td>
                      <td>{user.Status}</td>
                      <td>
                        <button onClick={() => handleStatusChange(index)}>
                          {user.Status === "Active"
                            ? "Set Inactive"
                            : "Set Active"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
