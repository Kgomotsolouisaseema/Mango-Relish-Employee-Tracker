// import logo from './logo.svg';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';

import { useState, useEffect } from 'react';

function App() {
  const [employee, setEmployee] = useState([]); // Task State
  //fetching from local storage 
  const getEmployee = JSON.parse(localStorage.getItem("employeeAdded"));
  useEffect(()=>{
    if(getEmployee == null){
      setEmployee([])
    }else{
      setEmployee(getEmployee);
    }

  },[])
  //Add Employee
  const addEmployee = (employee)=>{
    const idNumber = ""
    const newEmployee = {idNumber , ...employee}
    setEmployee([...employee ,newEmployee]);
    alert("Employee Added Succecfully")

    localStorage.setItem("EmployeeAdded" , JSON.stringify([...employee,newEmployee]))
  }
//Delete Employee
const deleteEmployee = (idNumber)=>{
  const deleteEmployee = employee.filter((idNumber)=>employee.idNumber !== idNumber);
  setEmployee(deleteEmployee);
  alert("you have successfully deleted an employee")
  localStorage.setItem("employeeAdded" , JSON.stringify(deleteEmployee));
}
//edit employee

const editEmployee = (idNumber)=>{
  const text = prompt("Employee Name");
  const number = prompt("ID number");
  let data = JSON.parse(localStorage.getItem('employeeAdded'));
  const mydata = data.map(n =>{
    if(n.idNumber === idNumber){
      return {
        ...n,
        text :text,
        number:number
      }
    }
    return n;
  }) 
  alert("you have edited an employee")
  localStorage.setItem("employeeAdded" , JSON.stringify(mydata));
  window.location.reload();
}


  return (
    <div className="App">
      <div> 
      <h2 >Mango Relish Employee Login </h2>
      <EmployeeForm/>
      </div>
      

    </div>
  );
}

export default App;
