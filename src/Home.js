import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToDepartments = () => {
    navigate('/home/departments'); // Corrected to point to '/home/departments'
  };

  return (
    <div>
      <h1>Welcome to Alumni Additions</h1>
      <button onClick={goToDepartments}>View Departments</button>
    </div>
  );
}

export default Home;
