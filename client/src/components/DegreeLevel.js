import React, { useState, useEffect } from 'react';

const degreeOptions = [
  { value: "high-school", label: "High School" },
  { value: "associate", label: "Associate's Degree" },
  { value: "bachelor", label: "Bachelor's Degree" },
  { value: "master", label: "Master's Degree" },
  { value: "phd", label: "PhD" },
];

const DegreeLevel = ({ setFormData, degreeLevel }) => {
  const [selectedDegree, setSelectedDegree] = useState(degreeLevel || null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setSelectedDegree(degreeLevel);
  }, [degreeLevel]);

  const selectDegree = (event, value) => {
    event.preventDefault();
    setSelectedDegree(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      degreeLevel: value,
    }));
    setDropdownOpen(false);
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="dropdown">
        <button onClick={toggleDropdown}>
          {selectedDegree
            ? degreeOptions.find(option => option.value === selectedDegree).label
            : 'Select Degree Level'}
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            {degreeOptions.map((degree) => (
              <div
                key={degree.value}
                className={`dropdown-item ${selectedDegree === degree.value ? 'selected' : ''}`}
                onClick={(event) => selectDegree(event, degree.value)}
              >
                {degree.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DegreeLevel;
