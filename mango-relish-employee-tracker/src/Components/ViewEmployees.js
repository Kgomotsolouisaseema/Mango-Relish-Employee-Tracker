import React, { useState, useEffect } from "react";

function ViewEmployees() {

    
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("employees"));
    setEmployees(storedData);
    console.log(storedData);
  }, []);

  return (
    <div>
      <h2>My Data</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>{emp.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ViewEmployees;
