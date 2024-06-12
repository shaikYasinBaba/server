// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
const Home = () => {
    return (
        <div className="home">
        <h2 className="home__title">Welcome to Home</h2>
        <div className="home__links">
          <Link to="/studentresult">
            <button className="home__button">See Result</button>
          </Link>
          <Link to="/About">
            <button className="home__button">About</button>
          </Link>
          <Link to="/login">
            <button className="home__button">Login</button>
          </Link>
        </div>
      </div>
    );
};

export default Home;
