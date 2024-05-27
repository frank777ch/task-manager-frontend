import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>View Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <strong>{course.name}</strong>: {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewCourses;