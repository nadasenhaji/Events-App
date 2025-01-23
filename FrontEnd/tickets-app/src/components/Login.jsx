import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importer useNavigate
import '../style/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialiser navigate

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ajouter la logique d'authentification ici (API, validation)
        const isAuthenticated = true; 

        if (isAuthenticated) {
            navigate('/');
        } else {
            alert('Email ou mot de passe incorrect.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-form">
                    <h1 className="title">Welcome Back</h1>
                    <p className="subtitle">Log in to your account</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Ajouter le lien de l'état
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Ajouter le lien de l'état
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Log In</button>
                    </form>
                    <p className="footer-text">
                        Don't have an account?{' '}
                        <Link to="/register" className="link-text">Sign Up</Link>
                    </p>
                    <div className="register-button-container">
                        <Link to="/register">
                            <button className="register-button">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
