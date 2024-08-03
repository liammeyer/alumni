import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function DepartmentsSelection({ selectedMainCategory: initialMainCategory, selectedSubCategory: initialSubCategory }) {
  const navigate = useNavigate();
  const [selectedMainCategory, setSelectedMainCategory] = useState(initialMainCategory || '');
  const [subcategories, setSubcategories] = useState([]);

  // Memoize mainCategories to prevent unnecessary re-creations
  const mainCategories = useMemo(() => ({
    CollegeofArtsandSciences: ["Art and Design", "Music", "Theatre Arts"],
    CollegeofBusinessandPublicAdministration: ["Accountancy", "Aviation Management"],
    CollegeofEducationandHumanDevelopment: ["Early Education", "Higher Education"],
    CollegeofEngineeringandMines: ["Computer Science", "Cybersecurity"],
  }), []);

  useEffect(() => {
    if (initialMainCategory) {
      setSelectedMainCategory(initialMainCategory);
      setSubcategories(mainCategories[initialMainCategory] || []);
    }
  }, [initialMainCategory, mainCategories]);

  const handleMainSelect = (event) => {
    const category = event.target.value;
    setSelectedMainCategory(category);
    setSubcategories(mainCategories[category] || []);
    navigate(`/home/departments/${category}`);
  };

  const handleSubSelect = (event) => {
    const subCategory = event.target.value;
    if (subCategory !== "none") {
      navigate(`/home/departments/${selectedMainCategory}/${subCategory}`);
    }
  };

  return (
    <div>
      <select onChange={handleMainSelect} defaultValue={selectedMainCategory || ""}>
        <option value="" disabled>Select a Departments</option>
        {Object.keys(mainCategories).map(key => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      {selectedMainCategory && (
        <select onChange={handleSubSelect} defaultValue={initialSubCategory || "none"}>
          <option value="none">Select Subcategory (Optional)</option>
          {subcategories.map(sub => (
            <option key={sub} value={sub}>{sub}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default DepartmentsSelection;