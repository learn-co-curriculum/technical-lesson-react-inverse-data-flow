import React, { useState } from "react";
import Employee from "./Employee";

function EmployeeList({ employees }) {

  return (
    <div>
      <h3>All Employees</h3>
      <table>
        <tbody>
          <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Role</th>
              <th>Remove</th>
          </tr>
          {employees.map((employee) => (
              <Employee key={employee.id} employee={employee}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
