import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function DepartmentSelection({ selectedMainCategory: initialMainCategory, selectedSubCategory: initialSubCategory }) {
  const navigate = useNavigate();
  const [selectedMainCategory, setSelectedMainCategory] = useState(initialMainCategory || '');
  const [subcategories, setSubcategories] = useState([]);

  // Define mainCategories only once using useMemo
  const mainCategories = useMemo(() => ({
    CollegeOfArtsAndSciences: ["Art and Design", "Music", "Theatre Arts"],
    CollegeOfBusinessAndPublicAdministration: ["Accountancy", "Aviation Management"],
    CollegeOfEducationAndHumanDevelopment: ["Early Education", "Higher Education"],
    CollegeOfEngineeringAndMines: ["Computer Science", "Cybersecurity"],
  }), []);

  
  // Function to format department names with spaces
  const formatDepartmentName = (name) => {
    // Insert a space before all caps, except for the first character
    return name.replace(/(?<!^)([A-Z])/g, ' $1');
  };
  

  // Effect to update subcategories when initialMainCategory changes
  useEffect(() => {
    if (initialMainCategory) {
      setSelectedMainCategory(initialMainCategory);
      setSubcategories(mainCategories[initialMainCategory] || []);
    }
  }, [initialMainCategory, mainCategories]);

  // Handlers for selection changes
  const handleMainSelect = (event) => {
    const category = event.target.value;
    setSelectedMainCategory(category);
    setSubcategories(mainCategories[category] || []);
    navigate(`/home/departments/${category}`); // Corrected path
};

const handleSubSelect = (event) => {
    const subCategory = event.target.value;
    navigate(`/home/departments/${selectedMainCategory}/${subCategory}`); // Corrected path
};


return (
    <div>
      <select onChange={handleMainSelect} defaultValue={selectedMainCategory || ""}>
        <option value="" disabled>Select a Department</option>
        {Object.keys(mainCategories).map(key => (
          <option key={key} value={key}>{formatDepartmentName(key)}</option>
        ))}
      </select>
      {selectedMainCategory && (
        <select onChange={handleSubSelect} defaultValue={initialSubCategory || "none"}>
          <option value="none">Select Subcategory (Optional)</option>
          {subcategories.map(sub => (
            <option key={sub} value={sub}>{formatDepartmentName(sub)}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default DepartmentSelection;
