import React, { useEffect, useState } from 'react';
import SearchEmployee from './SearchEmployee';

const EmployeeForm = () => {
  const getemp = localStorage.getItem("employees")
  let storedData=[];
  if(getemp === "" || getemp === null){
    localStorage.setItem("employees", JSON.stringify([]));
  }else{
     storedData = JSON.parse(getemp);
  }

  
 //SET STATE FOR ALL THE INPUTS
 const[name,setName]=useState(" ")
 const[surname,setSurname]=useState(" ")
 const[idNumber,setIdnumber]=useState(" ")
 const[email,setEmail]=useState(" ")
 const[position,setPosition]=useState(" ")
 const[phoneNumber,setPhoneNumber]=useState(" ")
 const[image,setImage]=useState(" ")
 //Revision
 const [selectedEmployee, setSelectedEmployee] = useState(null);
 const [employee, setEmployee] = useState([]);
 const [employees, setEmployees] = useState(storedData);
 const[searchEmployee , setsearchEmployee]=useState(" ")
 const searchBar = localStorage.getItem("employees")
 const result = JSON.parse(searchBar)
     
  
    // Reset the form after submission
    const addEmployee = (event) => {
        event.preventDefault();
        
    
    let employee = {name,surname,idNumber,position,image}
    setEmployees((employees)=>[...employees,
        {
          name: name,
          surname: surname,
          idNumber: idNumber,
          email: email,
          position: position,
          phoneNumber: phoneNumber,
          image: Image              
        }]);
        console.log(name + " " + surname +" " + idNumber + " " + email + " " + position + " " + phoneNumber);
         alert("Employee Added Successfully");
    };
    
    //Pull Data from local storage

    const getEmployeeByIdNumber = (idNumber)=>{
        const selectedEmployee = employees.find((employee)=> employee.idNumber === idNumber);
        return selectedEmployee;
    }

    
  useEffect(()=>{
    localStorage.setItem("employees", JSON.stringify(employees)); // pushing data to local storage
  }, [employees]);

// // funtion to search employees in local storage using ID NUMEBR
//   function SearchEmployees(){
//     for(let i =0 ; i < result.length ; i++){
//         if(searchEmployee === result[i].idNumber){
//             localStorage.setItem("searchBar",JSON.stringify([result[i]]))
//         }
//     }
    
//   };

  return (
    <div className='form' >
      <div>
        <label>Name: <input type="text" name="name" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)} /></label>
      </div>
      <div>
        <label>Surname:<input type="text" name="surname" placeholder='Enter Surname' onChange={(event)=>setSurname(event.target.value)} /></label>
      </div>
      <div>
        <label>ID Number:<input type="text" name="idNumber" placeholder='Enter ID number' onChange={(event)=>setIdnumber(event.target.value)} /></label>
      </div>
      <div>
        <label> Email:<input type="email" name="email" placeholder='Enter Email' onChange={(event)=>setEmail(event.target.value)} /></label>
      </div>
      <div>

        <label>Employee Position:</label>
        <select onClick={(event)=>setPosition(event.target.value)} id="selectPosition"  >
        <option>Select Position...</option>
        <option >Front End Developer</option>
        <option>Back End Developer</option>
        <option>Product Manager</option>
        <option>UI /UX Designer</option>
        </select> 
      </div>
      <div>
        <label>Phone Number:<input type="tel" name="phoneNumber" placeholder='Enter Phone Number' onChange={(event)=>setPhoneNumber(event.target.value)} /> </label>
      </div>
      <div>
        <label>Image URL:<input type="text" name="image" placeholder='Upload Image' onChange={(event)=>setImage(event.target.value)} /></label>
      </div>
       <button type="submit" onClick={addEmployee}>Submit</button>

      {/* // <input type='button' placeholder='Search Employee' onChange={(event)=>setsearchEmployee(event.target.value)}></input>
      // <button onClick={SearchEmployees}>Search Employee </button>  */}
      <div>


      </div>



    </div>
    
    
  );
}

export default EmployeeForm;
