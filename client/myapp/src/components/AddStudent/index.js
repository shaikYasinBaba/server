// src/components/AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';
import './index.css'
const AddStudent = () => {
    const [formData, setFormData] = useState({
        hallticketnumber: '',
        fullname: '',
        gender: '',
        dateofbirth: '',
        school: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            console.log(token)
            if (!token) {
                setMessage('Authentication token is missing');
                return;
            }

            const response = await axios.post('http://localhost:3000/studentdata', formData, {
                headers: { Authorization: `Bearer ${token}`}
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error adding student data');
        }
    };

    return (
        <div className="add-student">
      <h2 className="add-student__title">Add Student Data</h2>
      <form className="add-student__form" onSubmit={handleSubmit}>
        <div className="add-student__form-group">
          <label className="add-student__label">Hall Ticket Number: </label>
          <input
            className="add-student__input"
            type="text"
            name="hallticketnumber"
            value={formData.hallticketnumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-student__form-group">
          <label className="add-student__label">Full Name: </label>
          <input
            className="add-student__input"
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-student__form-group">
          <label className="add-student__label">Gender: </label>
          <input
            className="add-student__input"
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-student__form-group">
          <label className="add-student__label">Date of Birth: </label>
          <input
            className="add-student__input"
            type="date"
            name="dateofbirth"
            value={formData.dateofbirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-student__form-group">
          <label className="add-student__label">School: </label>
          <input
            className="add-student__input"
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="add-student__button">Add Student</button>
      </form>
      {message && <p className="add-student__message">{message}</p>}
    </div>
    );
};

export default AddStudent;
