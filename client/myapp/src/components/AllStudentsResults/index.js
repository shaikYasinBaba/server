// src/components/AllStudentsResults.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./index.css"
const AllStudentsResults = () => {
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/students/results', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setStudents(response.data);
            } catch (error) {
                setMessage('Error retrieving students results');
            }
        };
        fetchStudents();
    }, []);

    return (
        <div className='comtainer'>
            <h2>All Students Results</h2>
            {message && <p>{message}</p>}
            {students.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Hall Ticket Number</th>
                            <th>Full Name</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.hallticketnumber}>
                                <td>{student.hallticketnumber}</td>
                                <td>{student.fullname}</td>
                                <td className={(student.result==="pass")?"pass":"fail"}>{student.result}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default AllStudentsResults;
