import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteEvaluation = () => {
  const [evaluations, setEvaluations] = useState([]);

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/evaluations/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setEvaluations(evaluations.filter(evaluation => evaluation._id !== id));
    } catch (error) {
      console.error('Error deleting evaluation:', error);
    }
  };

  return (
    <div>
      <h2>Delete Evaluations</h2>
      <ul>
        {evaluations.map(evaluation => (
          <li key={evaluation._id}>
            {evaluation.taskEvaluated.title} - {evaluation.evaluationStatus}
            <button onClick={() => handleDelete(evaluation._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteEvaluation;