import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditSchool = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [school, setSchool] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    website: '',
    principal: ''
  });

  useEffect(() => {
    fetchSchool();
  }, []);

  const fetchSchool = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/schools/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setSchool(response.data);
    } catch (error) {
      console.error('Error fetching school:', error);
    }
  };

  const handleChange = (e) => {
    setSchool({
      ...school,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/schools/${id}`, school, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      navigate('/edit-schools');
    } catch (error) {
      console.error('Error updating school:', error);
    }
  };

  return (
    <div>
      <h2>Edit School</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={school.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="address"
          value={school.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="city"
          value={school.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="state"
          value={school.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
        <input
          type="text"
          name="zipCode"
          value={school.zipCode}
          onChange={handleChange}
          placeholder="Zip Code"
          required
        />
        <input
          type="text"
          name="phone"
          value={school.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <input
          type="email"
          name="email"
          value={school.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="website"
          value={school.website}
          onChange={handleChange}
          placeholder="Website"
          required
        />
        <input
          type="text"
          name="principal"
          value={school.principal}
          onChange={handleChange}
          placeholder="Principal"
          required
        />
        <button type="submit">Update School</button>
      </form>
    </div>
  );
};

export default EditSchool;