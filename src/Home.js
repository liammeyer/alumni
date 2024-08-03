import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const goToDepartments = () => {
        navigate('/home/department');
    };

    return (
        <div>
            <h1>Welcome to Alumni Additions</h1>
            <p>This is the home page of our site. From here, you can navigate to various departments and learn more about what we offer.</p>
            <button onClick={goToDepartments}>View Departments</button>
        </div>
    );
}

export default Home;
