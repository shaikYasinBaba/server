import React from 'react';
import './index.css';

const About = () => {
    return (
        <div className="about">
            <h2 className="about__title">About This App</h2>
            <p className='para'>
                This student management app is designed to streamline the process of managing student data. Users can retrieve detailed student information, including their personal details and academic results, using their hall ticket number. Additionally, there are features for updating and deleting student records. Only authenticated users can access and manage student data, ensuring security and privacy. The login credentials for accessing the dashboard are <strong>username: admin</strong> and <strong>password: admin</strong>.
                And hallticketnumbers starts from "202406001".
            </p>
            <h3 className="about__subtitle">About the Developer</h3>
            <p className='para'>
                My name is Shaik Yasin Baba. I am an MCA graduate, having completed my degree in 2024. I am passionate about my work and possess skills in MERN stack development. I am dedicated to building efficient and user-friendly applications.
            </p>
        </div>
    );
};

export default About;
