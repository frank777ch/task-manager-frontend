import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/schools', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setSchools(response.data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };

  return (
    <div>
      <h2>View Schools</h2>
      <ul>
        {schools.map(school => (
          <li key={school._id}>
            <p>Name: {school.name}</p>
            <p>Address: {school.address}</p>
            <p>Phone: {school.phone}</p>
            <p>Email: {school.email}</p>
            <p>Principal: {school.principal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewSchools;