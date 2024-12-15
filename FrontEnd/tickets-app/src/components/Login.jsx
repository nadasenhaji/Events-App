import React, { useState } from "react";
import "../style/Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [shake, setShake] = useState(false);
    const [error, setError] = useState(false); // Tracks input error state

    const handleLogin = (e) => {
        e.preventDefault();

        if (!password) {
            setShake(true);
            setError(true); // Trigger error state for the password input
            setTimeout(() => {
                setShake(false);
                setError(false); // Remove error state after animation
            }, 300); // Matches the shake animation duration
        } else {
            console.log("Logging in...", { username, password });
            // Perform actual login logic here
        }
    };

    return (
        <div className="login-container">
            <div className={`login-card ${shake ? "shake" : ""}`}>
                <h2>Log In</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={`input-field ${error ? "error" : ""}`}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button className="login-button" type="submit">
                        Log In
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
                <div className="signup">
                    <p>
                        Don't have an account? <a href="/SignUp">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
