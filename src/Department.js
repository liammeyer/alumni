import React from 'react';
import { useParams } from 'react-router-dom';

function Department() {
  let { name } = useParams();
  return (
    <div>
      {/* Additional content for each department could be added here */}
    </div>
  );
}

export default Department;
