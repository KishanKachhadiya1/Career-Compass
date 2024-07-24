import React, { useState, useEffect } from "react";

const languagesOptions = [
  { value: "english", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "gujarati", label: "Gujarati" },
  { value: "french", label: "French" },
  { value: "spanish", label: "Spanish" },
  { value: "german", label: "German" },
  { value: "chinese", label: "Chinese" },
  { value: "japanese", label: "Japanese" },
];

const Languages = ({ languages, setFormData, disabled }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setSelectedLanguages(languages);
  }, [languages]);

  const toggleLanguage = (value) => {
    if (disabled) return;
    setSelectedLanguages((prevLanguages) => {
      const newLanguages = prevLanguages.includes(value)
        ? prevLanguages.filter((language) => language !== value)
        : [...prevLanguages, value];

      setFormData((prevFormData) => ({
        ...prevFormData,
        languages: newLanguages,
      }));

      return newLanguages;
    });
  };

  const selectedLanguagesLabels = selectedLanguages
    .map(
      (language) =>
        languagesOptions.find((option) => option.value === language)?.label
    )
    .join(", ");

  const toggleDropdown = () => {
    if (disabled) return;
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="dropdown">
        <button onClick={toggleDropdown} disabled={disabled}>
          {selectedLanguages.length > 0
            ? selectedLanguagesLabels
            : "Select Languages"}
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            {languagesOptions.map((language) => (
              <div
                key={language.value}
                className={`dropdown-item ${
                  selectedLanguages.includes(language.value) ? "selected" : ""
                }`}
                onClick={() => toggleLanguage(language.value)}
              >
                {language.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Languages;
