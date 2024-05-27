import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <h1>Welcome to TASK MANAGER V1</h1>
    <p>Manage your tasks, courses, evaluations, and schools efficiently and effortlessly.</p>
    <div className="features">
      <div className="feature">
        <h2>Tasks</h2>
        <p>Create, update, delete, and view all your tasks in one place. Stay organized and on top of your deadlines.</p>
      </div>
      <div className="feature">
        <h2>Courses</h2>
        <p>Manage your courses with ease. Add new courses, update existing ones, and keep track of all course details.</p>
      </div>
      <div className="feature">
        <h2>Evaluations</h2>
        <p>Conduct evaluations of tasks, providing feedback and grades. Keep a record of all evaluations conducted.</p>
      </div>
      <div className="feature">
        <h2>Schools</h2>
        <p>Manage school information, including address, contact details, and principal information. Keep everything up-to-date.</p>
      </div>
    </div>
  </div>
);

export default Home;