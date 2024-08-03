
import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './Home';
import Department from './Department';
import hawk from './hawk.jpg';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [selectedMainCategory, setSelectedMainCategory] = useState('');

  const mainCategories = {
    CollegeofArtsandSciences: ["Art and Design", "Music", "Theatre Arts"],
    CollegeofBusinessandPublicAdministration: ["Accountancy", "Aviation Management"],
    CollegeofEducationandHumanDevelopment: ["Early Education", "Higher Education"],
    CollegeofEngineeringandMines: ["Computer Science", "Cybersecurity"],
  };

  const handleMainSelect = (event) => {
    const category = event.target.value;
    setSelectedMainCategory(category);
    navigate(`/home/department/${category}`);
  };

  const handleSubSelect = (event) => {
    const subCategory = event.target.value;
    if (subCategory === "none") {
      navigate(`/home/department/${selectedMainCategory}`);
    } else {
      navigate(`/home/department/${selectedMainCategory}/${subCategory}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <img src={hawk} className="hawk" alt="hawk" />
          <h1 className="alumni-additions">Alumni Additions</h1>
        </div>
        <div className="content-area">
          <select onChange={handleMainSelect} defaultValue="">
            <option value="" disabled>Select a Department</option>
            {Object.keys(mainCategories).map(key => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
          {selectedMainCategory && mainCategories[selectedMainCategory].length > 0 && (
            <select onChange={handleSubSelect} defaultValue="none">
              <option value="none">Select Subcategory (Optional)</option>
              {mainCategories[selectedMainCategory].map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          )}
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/department/:name" element={<Department />} />
            <Route path="/home/department/:name/:sub" element={<Department />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
