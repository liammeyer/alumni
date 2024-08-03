import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Department from './Department';
import DepartmentSelection from './DepartmentSelection';
import hawk from './hawk.jpg';  // This image is used properly here
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <img src={hawk} className="hawk" alt="Hawk emblem" />
          <h1 className="alumni-additions">Alumni Additions</h1>
        </div>
      </header>
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/departments" element={<DepartmentSelection />} />
          <Route path="/home/departments/:name" element={<Department />} />
          <Route path="/home/departments/:name/:sub" element={<Department />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
