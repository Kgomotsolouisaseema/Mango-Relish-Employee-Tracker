
import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

function ViewEmployees() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("employees"));
    setEmployees(storedData);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Employee List :</h2>
      <button onClick={openModal}>View Employees</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Employee List"
      >
        <h2>Employee List</h2>
        <ul>
          {employees.map((emp) => (
            <li key={`${emp.id}-${emp.idNumber}`}> {/*  //resolve the 2 child elements error */}
            {/* // <li key={emp.idNumber}> */}
              {emp.name}{emp.surname}{emp.id}{emp.position}{emp.email}
              <img id="setview" src={emp.image} alt="employeeimage" width={100} />
            </li>
          ))}
        </ul>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default ViewEmployees;

