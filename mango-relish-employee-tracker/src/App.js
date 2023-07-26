import './App.css';
import React, { useState, useEffect } from 'react';
import EmployeeForm from './Components/EmployeeForm';
import SearchEmployee from './Components/SearchEmployee';
// import ViewEmployees from './Components/ViewEmployees';

function App() {
  const [employee, setEmployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Fetch data from local storage. this useEffect fetches and sets the employee data stored in "local storage" to the 'employee' state variable whenever the value of 'getEmployee' changes. 

  const getEmployee = JSON.parse(localStorage.getItem("employeeAdded"));     //Initialized getEmployee variable to stores parsed Json object using "employeeAdded" key. we use JSON.parse()method because local storage only holds string types of data , JSON.parse converts the values we get

  useEffect(() => {                                                         //useEffect is declared with 2 arguments //useEffect = func that allows us to perform side effects e.g fetch data when comp renders,in this case, we fecth employee data upon first render , 
    if (getEmployee == null) {
      setEmployee([]);                                                      // If getEmployee is not null (meaning there is data stored in "localStorage" under the key "employeeAdded"), we set the employee state to the data obtained from getEmployee using the setEmployee() function. meaning there are employees to display & employee data is now available in 'employee' state variable.
    } else {
      setEmployee(getEmployee);                                              //else set employees in the getEmployee variable. 
    }
  }, [getEmployee]);                                                         //im telling react to run code inside useEffect hook whenever the value of 'getEmployee' changes . When getEmployee changes (when new employee data is fetched or updated), the code inside the useEffect hook checks if the data is null, and if it's not, it sets the employee state to the data obtained from getEmployee, making it available for displaying in the component.

  
  // Handle Employee Selection function : function is used to update the 'selectedEmployee' state  with a new value passed as an argu to function. 
  //allowing comp to keep track of selected employee and update accordingly based on selection. 

  const handleEmployeeSelection = (selectedEmp) => {                         //declared func called handleEmployeeSelection with param selected employee
    setSelectedEmployee(selectedEmp);                       
  };
    // the noraml function syntax for said function :
  // function handleEmployeeSelection(selectedEmp){
  //   setSelectedEmployee(selectedEmp);
  // }

  return (
    <div className="App">
      <div>
        <h1>Mango Relish Employee Login</h1> 
        <SearchEmployee/>   
        {/* <ViewEmployees /> */}
      
        <EmployeeForm employeeList={employee} onEmployeeSelect={handleEmployeeSelection} />
        
      </div>
  {/*{selectedEmployee && ( ... )}: This is a conditional rendering using the JavaScript && operator. If selectedEmployee is truthy (not null, undefined, false, 0, or an empty string), the code inside the parentheses will be rendered. Otherwise, it won't be rendered. */}
      {selectedEmployee && (                                          
        <div>
          <h2>Selected Employee Details:</h2>
          <p>Name: {selectedEmployee.name}</p>
          <p>Surname: {selectedEmployee.surname}</p>
          <p>idNumber: {selectedEmployee.idNumber}</p>
          <p>email: {selectedEmployee.email}</p>
          <p>Position: {selectedEmployee.position}</p>
          <p>image: {selectedEmployee.image}</p>

   
        </div>
      )}

     
    </div>
  );
}

export default App;



