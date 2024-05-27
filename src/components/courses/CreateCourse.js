import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = () => {
  const [course, setCourse] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    instructor: '',
    credits: '',
    schedule: '',
    location: ''
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5000/api/courses',
        course,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setCourse({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        instructor: '',
        credits: '',
        schedule: '',
        location: ''
      });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div>
      <h2>Create New Course</h2>
      <form onSubmit={handleAddCourse}>
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
          type="text"
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
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;