import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
  { value: "separated", label: "Separated" },
];

const MaritalStatus = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <div>
      <Select
        name="maritalStatus"
        options={options}
        className="basic-single-select"
        classNamePrefix="select"
        value={selectedOption}
        onChange={handleChange}
      />
      {selectedOption && (
        <div className="selected-status">Selected: {selectedOption.label}</div>
      )}
    </div>
  );
};

export default MaritalStatus;
