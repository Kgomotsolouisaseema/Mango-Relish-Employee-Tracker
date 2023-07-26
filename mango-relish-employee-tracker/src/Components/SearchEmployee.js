import React, { useState } from "react";
import Modal from "react-modal";
import ViewEmployees from "./ViewEmployees";

const SearchEmployee = ({ result }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

//tried and failed as of 26 july 2023 . Modal needs more work kgomotso
const seekEmployees = () => {
  // Convert 'searchValue' to a number before comparing with 'idNumber'
  const searchNumber = parseInt(searchValue, 11);

  // Check if 'result' is valid and an array of objects
  if (Array.isArray(result) && result.length > 0) {
    const employeeFound = result.find((employee) => employee.idNumber === searchNumber);
    console.log(employeeFound);
    if (employeeFound) {
      setSearchResult([employeeFound]);
    } else {
      setSearchResult([]);
    }
  } else {
    setSearchResult([]);
  }

  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};


  return (
    <div>
      <input
        type="text"
        placeholder="Enter ID number"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="button" onClick={seekEmployees}>
        Search Employee
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Search Employee Modal"
      >
        <h2>Employee Details:</h2>
        <ViewEmployees result={searchResult} />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default SearchEmployee;

