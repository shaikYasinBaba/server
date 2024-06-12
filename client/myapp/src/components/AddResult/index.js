// src/components/AddResult.js
import React, { useState } from 'react';
import axios from 'axios';
import './index.css'
const AddResult = () => {
    const [formData, setFormData] = useState({
        hallticketnumber: '',
        telugu: '',
        hindhi: '',
        english: '',
        mathematics: '',
        science: '',
        social: '',
        result: ''
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
            if (!token) {
                setMessage('Authentication token is missing');
                return;
            }

            const response = await axios.post('http://localhost:3000/results', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error adding result data');
        }
    };

    return (
        <div className="add-result">
        <h2 className="add-result__title">Add Result Data</h2>
        <form className="add-result__form" onSubmit={handleSubmit}>
          <div className="add-result__form-group">
            <label className="add-result__label">Hall Ticket Number: </label>
            <input
              className="add-result__input"
              type="text"
              name="hallticketnumber"
              value={formData.hallticketnumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="add-result__form-group">
            <label className="add-result__label">Telugu: </label>
            <input
              className="add-result__input"
              type="number"
              name="telugu"
              value={formData.telugu}
              onChange={handleChange}
              required
            />
          </div>
          <div className="add-result__form-group">
            <label className="add-result__label">Hindi: </label>
            <input
              className="add-result__input"
              type="number"
              name="hindhi"
              value={formData.hindhi}
              onChange={handleChange}
              required
            />
          </div>
          <div className="add-result__form-group">
            <label className="add-result__label">English: </label>
            <input
              className="add-result__input"
              type="number"
              name="english"
              value={formData.english}
              onChange={handleChange}
              required
            />
          </div>
          <div className="add-result__form-group">
            <label className="add-result__label">Mathematics: </label>
            <input
              className="add-result__input"
              type="number"
              name="mathematics"
              value={formData.mathematics}
              onChange={handleChange}
              required
            />
          </div>
          <div className="add-result__form-group">
            <label className="add-result__label">Science: </label>
            <input
              className="add-result__input"
              type="number"
              name="science"
              value={formData.science}
              onChange={handleChange}
              required
            />
          </div>
          <div className="add-result__form-group">
            <label className="add-result__label">Social: </label>
            <input
              className="add-result__input"
              type="number"
              name="social"
              value={formData.social}
              onChange={handleChange}
              required
            />
          </div>
          <div className="add-result__form-group">
            <label className="add-result__label">Result: </label>
            <input
              className="add-result__input"
              type="text"
              name="result"
              value={formData.result}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="add-result__button">Add Result</button>
        </form>
        {message && <p className="add-result__message">{message}</p>}
      </div>
    );
};

export default AddResult;
