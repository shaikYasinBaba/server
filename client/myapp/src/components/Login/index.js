// src/components/Login.js
import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
 

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard');
        }
    }, [navigate]);


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            setMessage('Login successful');
            navigate('/dashboard');
        } catch (error) {
            setMessage('Invalid credentials');
        }
    };

    return (
        <div className="login mt-3">
            <h2 className="login__title">Login</h2>
            < form   className="login__form" onSubmit={handleLogin}>
                <div className="login__form-group">
                    <label className="login__label">Username: </label>
                    <input type="text"  className="login__input" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="login__form-group">
                    <label  className="login__label">Password: </label>
                    <input type="password"  className="login__input" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="login__button">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
