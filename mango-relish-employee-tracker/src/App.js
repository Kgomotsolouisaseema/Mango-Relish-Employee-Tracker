import './App.css';
import React, { useState, useEffect } from 'react';
import EmployeeForm from './Components/EmployeeForm';
import SearchEmployee from './Components/SearchEmployee';
import ViewEmployees from './Components/ViewEmployees';

function App() {
  const [employee, setEmployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Fetch data from local storage
  const getEmployee = JSON.parse(localStorage.getItem("employeeAdded"));

  useEffect(() => {
    if (getEmployee == null) {
      setEmployee([]);
    } else {
      setEmployee(getEmployee);
    }
  }, []);

  // Add Employee
  const addEmployee = (employeeData) => {
    const newEmployee = { idNumber: Date.now(), ...employeeData };
    setEmployee([...employee, newEmployee]);
    alert("Employee Added Successfully");

    localStorage.setItem("employeeAdded", JSON.stringify([...employee, newEmployee]));
  };

  // Delete Employee
  const deleteEmployee = (idNumber) => {
    const updatedEmployeeList = employee.filter((emp) => emp.idNumber !== idNumber);
    setEmployee(updatedEmployeeList);
    alert("You have successfully deleted an employee");

    localStorage.setItem("employeeAdded", JSON.stringify(updatedEmployeeList));
  };

  // Edit Employee
  const editEmployee = (idNumber) => {
    const text = prompt("Employee Name");
    const number = prompt("ID number");
    let data = JSON.parse(localStorage.getItem('employees'));
    const mydata = data.map(n => {
      if (n.idNumber === idNumber) {
        return {
          ...n,
          name: text,
          idNumber: number
        };
      }
      return n;
    });
    alert("You have edited an employee");
    localStorage.setItem("employees", JSON.stringify(mydata));
    window.location.reload();

    
  };

  // Handle Employee Selection
  const handleEmployeeSelection = (selectedEmp) => {
    setSelectedEmployee(selectedEmp);
  };

  return (
    <div className="App">
      <div>
        <h1>Mango Relish Employee Login</h1>
        <EmployeeForm employeeList={employee} onEmployeeSelect={handleEmployeeSelection} />
        <SearchEmployee/>
      </div>

      {selectedEmployee && (
        <div>
          <h2>Selected Employee Details:</h2>
          <p>Name: {selectedEmployee.name}</p>
          <p>Surname: {selectedEmployee.surname}</p>
          <p>idNumber: {selectedEmployee.idNumber}</p>
          <p>email: {selectedEmployee.email}</p>
          <p>Position: {selectedEmployee.position}</p>
          <p>image: {selectedEmployee.image}</p>

          {/* <button onClick={() => editEmployee(selectedEmployee.idNumber)}>Edit</button>
          <button onClick={() => deleteEmployee(selectedEmployee.idNumber)}>Delete</button> */}
        </div>
      )}

      <ViewEmployees />
      
    </div>
  );
}

export default App;
