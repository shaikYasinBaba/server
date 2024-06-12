import './index.css'
import React, { useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const StudentDatadelete = () => {
    const [hallticketnumber, setHallticketnumber] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [message, setMessage] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleInputChange = (e) => {
        setHallticketnumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setDeleteMessage('');
        try {
            const response = await axios.get(`http://localhost:3000/student/${hallticketnumber}`);
            setStudentData(response.data);
            setMessage('');
        } catch (error) {
            setStudentData(null);
            setMessage('Error retrieving student data');
        }
    };

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:3000/delete-student/${hallticketnumber}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setDeleteMessage('Student data deleted successfully');
            setStudentData(null);
            setHallticketnumber('');
        } catch (error) {
            setDeleteMessage('Error deleting student data');
        }
    };

    const calculateResult = (marks) => {
        return marks >= 35 ? 'Pass' : 'Fail';
    };

    return (
        <div className="student-data">
            <h2 className="student-data__title">Get Student Data</h2>
            <form className="student-data__form" onSubmit={handleSubmit}>
                <div className="student-data__form-group">
                    <label className="student-data__label">Hall Ticket Number: </label>
                    <input 
                        className="student-data__input"
                        type="text" 
                        value={hallticketnumber} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <button type="submit" className="student-data__button btn btn-primary">Get Data</button>
                <button 
                    type="button" 
                    className="student-data__button btn btn-danger" 
                    onClick={handleDelete} 
                    disabled={!hallticketnumber}
                >
                    Delete Data
                </button>
            </form>
            {message && <p className="student-data__message">{message}</p>}
            {deleteMessage && <p className="student-data__message">{deleteMessage}</p>}
            {studentData && (
                <div className="student-data__info">
                    <h3 className="student-data__info-title">Student Information</h3>
                    <p>Hall Ticket Number: {studentData.hallticketnumber}</p>
                    <p>Full Name: {studentData.fullname}</p>
                    <p>School: {studentData.school}</p>
                    <p>Date of Birth: {studentData.dateofbirth}</p>
                    {studentData.results && (
                        <>
                            <h3 className="student-data__info-title">Results</h3>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Marks</th>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Telugu</td>
                                        <td>{studentData.results[0].telugu}</td>
                                        <td>{calculateResult(studentData.results[0].telugu)}</td>
                                    </tr>
                                    <tr>
                                        <td>Hindi</td>
                                        <td>{studentData.results[0].hindhi}</td>
                                        <td>{calculateResult(studentData.results[0].hindhi)}</td>
                                    </tr>
                                    <tr>
                                        <td>English</td>
                                        <td>{studentData.results[0].english}</td>
                                        <td>{calculateResult(studentData.results[0].english)}</td>
                                    </tr>
                                    <tr>
                                        <td>Mathematics</td>
                                        <td>{studentData.results[0].mathematics}</td>
                                        <td>{calculateResult(studentData.results[0].mathematics)}</td>
                                    </tr>
                                    <tr>
                                        <td>Science</td>
                                        <td>{studentData.results[0].science}</td>
                                        <td>{calculateResult(studentData.results[0].science)}</td>
                                    </tr>
                                    <tr>
                                        <td>Social</td>
                                        <td>{studentData.results[0].social}</td>
                                        <td>{calculateResult(studentData.results[0].social)}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3}> Result</td>
                                        <td>Total: {(studentData.results[0].result === 'pass') ? studentData.results[0].telugu + studentData.results[0].hindhi + studentData.results[0].english + studentData.results[0].mathematics + studentData.results[0].science + studentData.results[0].social : '---'}</td>
                                        <td>{(studentData.results[0].result === 'pass') ? 'PASS' : 'FAIL'}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default StudentDatadelete;
