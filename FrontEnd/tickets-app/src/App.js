import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="scrollable-content">
                    <AppRoutes />
                </div>
            </div>
        </Router>
    );
}

export default App;
