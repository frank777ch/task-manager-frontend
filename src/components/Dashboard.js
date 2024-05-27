import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="dashboard-section">
        <h3>Manage Tasks</h3>
        <button onClick={() => navigate('/create-task')}>Create New Task</button>
        <button onClick={() => navigate('/edit-tasks')}>Edit Tasks</button>
        <button onClick={() => navigate('/delete-task')}>Delete Task</button>
        <button onClick={() => navigate('/view-tasks')}>View Tasks</button>
      </div>
      <div className="dashboard-section">
        <h3>Manage Courses</h3>
        <button onClick={() => navigate('/create-course')}>Create New Course</button>
        <button onClick={() => navigate('/edit-courses')}>Edit Courses</button>
        <button onClick={() => navigate('/delete-course')}>Delete Course</button>
        <button onClick={() => navigate('/view-courses')}>View Courses</button>
      </div>
      <div className="dashboard-section">
        <h3>Manage Evaluations</h3>
        <button onClick={() => navigate('/create-evaluation')}>Create New Evaluation</button>
        <button onClick={() => navigate('/edit-evaluations')}>Edit Evaluations</button>
        <button onClick={() => navigate('/delete-evaluation')}>Delete Evaluation</button>
        <button onClick={() => navigate('/view-evaluations')}>View Evaluations</button>
      </div>
      <div className="dashboard-section">
        <h3>Manage Schools</h3>
        <button onClick={() => navigate('/create-school')}>Create New School</button>
        <button onClick={() => navigate('/edit-schools')}>Edit Schools</button>
        <button onClick={() => navigate('/view-schools')}>View Schools</button>
      </div>
    </div>
  );
};

export default Dashboard;