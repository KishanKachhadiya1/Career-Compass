// MaritalStatus.js

import React from "react";
import Select from "react-select";

const options = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
  { value: "separated", label: "Separated" },
];

const MaritalStatus = ({ selectedStatus, onChange }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

  return (
    <Select
      name="maritalStatus"
      options={options}
      className="basic-single-select"
      classNamePrefix="select"
      value={options.find(option => option.value === selectedStatus)} // Set selected value
      onChange={handleChange}
    />
  );
};

export default MaritalStatus;
