// src/components/Routing.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../Login/index';
import Dashboard from '../Dashboard/index';
import AddStudent from '../AddStudent/index';
import AddResult from '../AddResult/index';
import UpdateResult from '../UpdateResult/index';
import Home from '../Home/index';
import Studentresult from "../studentresult/index"
import AllStudentsResults from "../AllStudentsResults/index"
import StudentDatadelete from '../StudentDatadelete/index';
import About from '../About/index';
const Routing = () => {
    const isLoggedIn = (localStorage.getItem('token')!==undefined);

    return (
        <Router>
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/add-student" element={isLoggedIn ? <AddStudent /> : <Navigate to="/login" />} />
                <Route path="/add-result" element={isLoggedIn ? <AddResult /> : <Navigate to="/login" />} />
                <Route path="/update-result" element={isLoggedIn ? <UpdateResult /> : <Navigate to="/login" />} />
                <Route path="/all-students-results" element={isLoggedIn ? <AllStudentsResults />: <Navigate to="/login" />} />
                <Route path='/studentresult' element={isLoggedIn ? <Studentresult/>: <Navigate to="/login" />}/>
                <Route path='/DeleteStudentsData' element= {isLoggedIn ? <StudentDatadelete/>: <Navigate to="/login"/>}/>               
                <Route path="/About" element={<About/>} />
                <Route path="/" element={<Navigate to="/Home" />} />
                
            </Routes>
        </Router>
    );
};

export default Routing;
