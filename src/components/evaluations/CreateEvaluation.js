import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateEvaluation = () => {
  const [tasks, setTasks] = useState([]);
  const [evaluation, setEvaluation] = useState({
    taskEvaluated: '',
    evaluationDate: '',
    rating: '',
    comments: '',
    recommendations: '',
    evaluationStatus: 'Pending',
    attachments: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleChange = (e) => {
    setEvaluation({
      ...evaluation,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/evaluations', evaluation, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      navigate('/view-evaluations');
    } catch (error) {
      console.error('Error creating evaluation:', error);
    }
  };

  return (
    <div>
      <h2>Create Evaluation</h2>
      <form onSubmit={handleSubmit}>
        <select name="taskEvaluated" value={evaluation.taskEvaluated} onChange={handleChange} required>
          <option value="">Select Task</option>
          {tasks.map(task => (
            <option key={task._id} value={task._id}>{task.title}</option>
          ))}
        </select>
        <input
          type="date"
          name="evaluationDate"
          value={evaluation.evaluationDate}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rating"
          value={evaluation.rating}
          onChange={handleChange}
          placeholder="Rating"
          required
        />
        <textarea
          name="comments"
          value={evaluation.comments}
          onChange={handleChange}
          placeholder="Comments"
        />
        <textarea
          name="recommendations"
          value={evaluation.recommendations}
          onChange={handleChange}
          placeholder="Recommendations"
        />
        <select name="evaluationStatus" value={evaluation.evaluationStatus} onChange={handleChange} required>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <input
          type="text"
          name="attachments"
          value={evaluation.attachments}
          onChange={handleChange}
          placeholder="Attachments (comma separated URLs)"
        />
        <button type="submit">Create Evaluation</button>
      </form>
    </div>
  );
};

export default CreateEvaluation;