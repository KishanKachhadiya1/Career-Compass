import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "english", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "gujarati", label: "Gujarati" },
  { value: "french", label: "French" },
  { value: "spanish", label: "Spanish" },
  { value: "german", label: "German" },
  { value: "chinese", label: "Chinese" },
  { value: "japanese", label: "Japanese" },
];

const LanguageDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };
  return (
    <div>
      <Select
        isMulti
        name="languages"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        value={selectedOptions}
        onChange={handleChange}
      />
      <div>
        {selectedOptions.map((option) => (
          <span key={option.value} className="language-badge">
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;
