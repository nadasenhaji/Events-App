import React, { useState } from "react";
import "../style/SignUp.css";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Sign Up Successful!");
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="signup-button" type="submit">
                        Sign Up
                    </button>
                </form>
                <div className="divider">Or Sign Up Using</div>
                <div className="social-login">
                    <button className="social-button facebook">
                        <i className="fab fa-facebook"></i> Facebook
                    </button>
                    <button className="social-button twitter">
                        <i className="fab fa-twitter"></i> Twitter
                    </button>
                    <button className="social-button google">
                        <i className="fab fa-google"></i> Google
                    </button>
                </div>
                <div className="login-link">
                    <p>Already have an account? <a href="/">Log In</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
