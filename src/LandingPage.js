import React from 'react';
import { useNavigate } from 'react-router-dom';

function home() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/home');
  };

  return (
    <div className="home">
      <h1>Welcome to Alumni Additions</h1>
      <button onClick={goToHomePage}>Enter Site</button>
    </div>
  );
}

export default home;
