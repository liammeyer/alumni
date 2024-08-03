import React from 'react';
import { useParams } from 'react-router-dom';

function Department() {
  const { name, sub } = useParams(); // Access parameters from the route

  // Display the department name and subcategory name dynamically based on the route parameters
  return (
    <div>
    </div>
  );
}

export default Department;
