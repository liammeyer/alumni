import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/main');
  };

  return (
    <div style={{ backgroundColor: 'grey', height: '100vh', color: 'white' }}>
      <h1>Welcome to Our Website</h1>
      <button onClick={goToMainPage}>Enter Site</button>
    </div>
  );
}

export default HomePage;