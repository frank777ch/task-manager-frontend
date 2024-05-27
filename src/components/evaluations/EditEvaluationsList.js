import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditEvaluationsList = () => {
  const [evaluations, setEvaluations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvaluations();
  }, []);

  const fetchEvaluations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/evaluations', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setEvaluations(response.data);
    } catch (error) {
      console.error('Error fetching evaluations:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-evaluation/${id}`);
  };

  return (
    <div>
      <h2>Edit Evaluations</h2>
      <ul>
        {evaluations.map(evaluation => (
          <li key={evaluation._id}>
            {evaluation.taskEvaluated.title} - {evaluation.evaluationStatus}
            <button onClick={() => handleEdit(evaluation._id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditEvaluationsList;