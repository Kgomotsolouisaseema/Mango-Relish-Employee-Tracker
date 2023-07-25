import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    idNumber: '',
    email: '',
    position: '',
    phoneNumber: '',
    image: ''
  });
  //SET STATE FOR ALL THE INPUTS
const [name,setName]=useState(" ")
const[surname,setSurname]=useState(" ")
const[idNumber,setIdnumber]=useState(" ")
const[email,setEmail]=useState(" ")
const[position,setPosition]=useState(" ")
const[phoneNumber,setPhoneNumber]=useState(" ")
const[image,setImage]=useState(" ")

const handleSubmit = (event) => {event.preventDefault();
    
    // Reset the form after submission
    setFormData({
      name: name,
      surname: surname,
      idNumber: idNumber,
      email: email,
      position: position,
      phoneNumber: phoneNumber,
      image: Image
    });
    console.log(name + " " + surname +" " + idNumber + " " + email + " " + position + " " + phoneNumber);
  };

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
        <label>Employee Position:<input type="text" name="position" placeholder='Position' onChange={(event)=>setPosition(event.target.value)} /></label>
        <select>
            <options>Front End Developer</options>
            <options>Back End Developer</options>
            <options>Product Manager</options>
            <options>UI /UX Designer</options>
        </select>
      </div>
      <div>
        <label>Phone Number:<input type="tel" name="phoneNumber" placeholder='Enter Phone Number' onChange={(event)=>setPhoneNumber(event.target.value)} /> </label>
      </div>
      <div>
        <label>Image URL:<input type="text" name="image" placeholder='Upload Image' onChange={(event)=>setImage(event.target.value)} />
        </label>
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EmployeeForm;
