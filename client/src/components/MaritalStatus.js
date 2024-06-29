import React, { useState } from 'react'

const maritalStatusOptions = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
  { value: "separated", label: "Separated" },
];

const MaritalStatus = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectStatus = (value) => {
    setSelectedStatus(value);
    setDropdownOpen(false);
  };
  return (
    <>
      <div className="dropdown">
      <button onClick={() => setDropdownOpen(!dropdownOpen)}>
        {selectedStatus ? maritalStatusOptions.find(option => option.value === selectedStatus).label : 'Select Marital Status'}
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu">
          {maritalStatusOptions.map((status) => (
            <div
              key={status.value}
              className={`dropdown-item ${selectedStatus === status.value ? 'selected' : ''}`}
              onClick={() => selectStatus(status.value)}
            >
              {status.label}
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default MaritalStatus
