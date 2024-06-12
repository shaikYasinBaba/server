// src/components/UpdateResult.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'
const UpdateResult = () => {
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/students/no-results', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setStudents(response.data);
            } catch (error) {
                setMessage('Error retrieving students data');
            }
        };
        fetchStudents();
    }, []);

    return (
        <div className='comtainer'>
            <h2>Update Results</h2>
            {message && <p>{message}</p>}
            {students.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Hall Ticket Number</th>
                            <th>Full Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.hallticketnumber}>
                                <td>{student.hallticketnumber}</td>
                                <td>{student.fullname}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>All students results are updated successfully.</p>
            )}
        </div>
    );
};

export default UpdateResult;
