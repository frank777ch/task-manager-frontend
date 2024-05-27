import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    fetchTask();
    fetchUsers();
    fetchCourses();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setTask(response.data);
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  };

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

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        {
          ...task,
          tags: task.tags.split(',').map(tag => tag.trim()), // Split tags by comma
        },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      navigate('/edit-tasks'); // Redirige a la lista de tareas después de la actualización
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleUpdateTask}>
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
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;