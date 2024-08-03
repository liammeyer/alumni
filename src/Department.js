import React from 'react';
import { useParams } from 'react-router-dom';
import DepartmentSelection from './DepartmentSelection';

function Department() {
    const { name, sub } = useParams(); // Fetching URL parameters
    return (
        <div>
            <DepartmentSelection 
                key={`${name}-${sub}`}  // Adding a key to force update
                selectedMainCategory={name} 
                selectedSubCategory={sub} 
            />
        </div>
    );
}

export default Department;
