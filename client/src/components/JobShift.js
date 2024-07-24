import React, { useState, useEffect } from "react";

const jobShiftOptions = [
  { value: "part-time", label: "Part-time" },
  { value: "full-time", label: "Full-time" },
  { value: "contract", label: "Contract" },
  { value: "on-call", label: "On-call" },
];

const JobShift = ({ setFormData, jobShift }) => {
  const [selectedShift, setSelectedShift] = useState(jobShift || null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setSelectedShift(jobShift);
  }, [jobShift]);

  const selectShift = (event, value) => {
    event.preventDefault();
    setSelectedShift(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      jobShift: value,
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
          {selectedShift
            ? jobShiftOptions.find((option) => option.value === selectedShift).label
            : "Select Job Shift"}
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            {jobShiftOptions.map((shift) => (
              <div
                key={shift.value}
                className={`dropdown-item ${
                  selectedShift === shift.value ? "selected" : ""
                }`}
                onClick={(event) => selectShift(event, shift.value)}
              >
                {shift.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default JobShift;
