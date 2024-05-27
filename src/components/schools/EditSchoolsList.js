import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditSchoolsList = () => {
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

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

  const handleEdit = (id) => {
    navigate(`/edit-school/${id}`);
  };

  return (
    <div>
      <h2>Edit Schools</h2>
      <ul>
        {schools.map(school => (
          <li key={school._id}>
            {school.name}
            <button onClick={() => handleEdit(school._id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditSchoolsList;