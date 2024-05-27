import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    instructor: '',
    credits: '',
    schedule: '',
    location: '',
  });

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/courses/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setCourse(response.data);
    } catch (error) {
      console.error('Error fetching course:', error);
    }
  };

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/courses/${id}`,
        {
          ...course,
        },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      navigate('/edit-courses'); // Redirige a la lista de cursos después de la actualización
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  return (
    <div>
      <h2>Edit Course</h2>
      <form onSubmit={handleUpdateCourse}>
        <input
          type="text"
          name="name"
          value={course.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="description"
          value={course.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="date"
          name="startDate"
          value={course.startDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="endDate"
          value={course.endDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="instructor"
          value={course.instructor}
          onChange={handleChange}
          placeholder="Instructor"
        />
        <input
          type="number"
          name="credits"
          value={course.credits}
          onChange={handleChange}
          placeholder="Credits"
        />
        <input
          type="text"
          name="schedule"
          value={course.schedule}
          onChange={handleChange}
          placeholder="Schedule"
        />
        <input
          type="text"
          name="location"
          value={course.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <button type="submit">Update Course</button>
      </form>
    </div>
  );
};

export default EditCourse;