import React from "react";
// import './App.css';

const SearchEmployee = ({ result, searchEmployee }) => {
  const searchEmployees = () => {
    for (let i = 0; i < result.length; i++) {
      if (searchEmployee === result[i].idNumber) {
        localStorage.setItem("searchBar", JSON.stringify([result[i]]));
        return;
      }
    }
    // If the employee is not found, you can handle it here, or simply do nothing
  };

  return (
    <div>
      <button type="button" onClick={searchEmployee}>
        Search Employee
      </button>
    </div>
  );
};

export default SearchEmployee;
