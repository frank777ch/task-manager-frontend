import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewEvaluations = () => {
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

  return (
    <div>
      <h2>View Evaluations</h2>
      <ul>
        {evaluations.map(evaluation => (
          <li key={evaluation._id}>
            <p>Task: {evaluation.taskEvaluated.title}</p>
            <p>Evaluator: {evaluation.evaluator.firstName} {evaluation.evaluator.lastName}</p>
            <p>Rating: {evaluation.rating}</p>
            <p>Comments: {evaluation.comments}</p>
            <p>Recommendations: {evaluation.recommendations}</p>
            <p>Status: {evaluation.evaluationStatus}</p>
            <p>Date: {new Date(evaluation.evaluationDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewEvaluations;