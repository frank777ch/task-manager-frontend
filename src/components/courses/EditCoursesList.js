import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditCoursesList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/courses', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-course/${id}`);
  };

  return (
    <div>
      <h2>Edit Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            {course.name}
            <button onClick={() => handleEdit(course._id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditCoursesList;