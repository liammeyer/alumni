import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Alumni from './Alumni.jpg';  // Correctly import the image

function Home() {
  const navigate = useNavigate();

  const goToDepartments = () => {
    navigate('/home/departments');
  };


  return (
    <div className="home-container">
      <img src={Alumni} className="home-image" alt="Alumni" />
      <h1>Alumni Additions: Where Experience Meets Aspiration </h1>
      <button onClick={goToDepartments}>View Departments</button>
    </div>
  );
}

export default Home;
