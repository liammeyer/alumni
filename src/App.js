import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Department from './Department';
import hawk from './hawk.jpg';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleSelect = (event) => {
    navigate(`/department/${event.target.value}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <img src={hawk} className="hawk" alt="hawk" />
          <h1 className="alumni-additions">Alumni Additions</h1>
        </div>
        <div className="content-area">
          <select onChange={handleSelect} defaultValue="">
            <option value="" disabled>Select a Department</option>
            <option value="Education">Education</option>
            <option value="Aviation">Aviation</option>
            <option value="Engineering">Engineering</option>
          </select>
          <Routes>
            <Route path="/department/:name" element={<Department />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
