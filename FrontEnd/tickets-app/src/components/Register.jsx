import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import '../style/Register.css';

function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate(); // Initialiser navigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ajouter la logique d'inscription ici (par exemple, appeler une API)
        if (formData.password === formData.confirmPassword) {
            // Exemple d'inscription réussie
            console.log(formData);

            // Rediriger vers la page login après une inscription réussie
            navigate('/login');
        } else {
            alert('Les mots de passe ne correspondent pas.');
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-image">
                    <h2>Welcome to Guichet Registration</h2>
                    <p>
                        Create an account to enjoy premium features. Already have an account?{' '}
                        <a href="/login">Login here</a>.
                    </p>
                </div>
                <form className="register-form" onSubmit={handleSubmit}>
                    <h1 className="title">Register</h1>
                    <p className="subtitle">Create your account. It’s free and quick!</p>
                    <div className="input-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button type="submit" className="register-button">
                        Register
                    </button>
                    <p className="footer-text">
                        By registering, you agree to our{' '}
                        <a href="/terms">Terms of Service</a> and{' '}
                        <a href="/privacy">Privacy Policy</a>.
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
