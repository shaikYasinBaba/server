// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
const Dashboard = () => {
    const navigate = useNavigate();

   
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="dashboard">
        <h2 className="dashboard__title">ManagementDashboard</h2>
        <ul className="dashboard__list">
          <li><button className="dashboard__button btn btn-primary mt-3" onClick={() => navigate('/add-student')}>Add Student Data</button></li>
          <li><button className="dashboard__button btn btn-primary mt-3" onClick={() => navigate('/add-result')}>Add Results Data</button></li>
          <li><button className="dashboard__button btn btn-primary mt-3" onClick={() => navigate('/update-result')}>Update Results</button></li>
          <li><button className="dashboard__button btn btn-primary mt-3" onClick={() => navigate('/all-students-results')}>View All Students Results</button></li>
          <li><button className="dashboard__button btn btn-primary mt-3" onClick={() => navigate('/DeleteStudentsData')}>Delete Students Data</button></li>
          <li><button className="dashboard__button btn btn-primary mt-3" onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
    );
};

export default Dashboard;
