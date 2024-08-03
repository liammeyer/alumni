import React from 'react';
import { useParams } from 'react-router-dom';
import DepartmentSelection from './DepartmentSelection'; // Ensure this matches the actual filename

function Department() {
  const { name, sub } = useParams();

  return (
    <div>
      <DepartmentSelection selectedMainCategory={name} selectedSubCategory={sub} />
      <h1>Department: {name}</h1>
      {sub && <h2>Subcategory: {sub}</h2>}
    </div>
  );
}

export default Department;
