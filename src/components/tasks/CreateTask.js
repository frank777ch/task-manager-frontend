import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'Pending',
    startDate: '',
    endDate: '',
    priority: 'Medium',
    category: '',
    tags: '',
    assignedTo: '',
    course: '',
  });
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchCourses();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

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

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5000/api/tasks',
        {
          ...task,
          tags: task.tags.split(',').map(tag => tag.trim()), // Split tags by comma
        },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setTask({
        title: '',
        description: '',
        status: 'Pending',
        startDate: '',
        endDate: '',
        priority: 'Medium',
        category: '',
        tags: '',
        assignedTo: '',
        course: '',
      });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <select name="status" value={task.status} onChange={handleChange} required>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <input
          type="date"
          name="startDate"
          value={task.startDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="endDate"
          value={task.endDate}
          onChange={handleChange}
        />
        <select name="priority" value={task.priority} onChange={handleChange} required>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input
          type="text"
          name="category"
          value={task.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          type="text"
          name="tags"
          value={task.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
        />
        <select name="assignedTo" value={task.assignedTo} onChange={handleChange}>
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>{user.firstName} {user.lastName}</option>
          ))}
        </select>
        <select name="course" value={task.course} onChange={handleChange} required>
          <option value="">Select Course</option>
          {courses.map(course => (
            <option key={course._id} value={course._id}>{course.name}</option>
          ))}
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default CreateTask;