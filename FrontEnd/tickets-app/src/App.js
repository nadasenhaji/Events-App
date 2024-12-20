import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Importation de Login.jsx
import SignUp from './components/SignUp';
import Panier from "./components/Panier"; // Importation de SignUp.jsx

function App() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Login />} /> {/* Route pour la page de login */}
                <Route path="/SignUp" element={<SignUp />} /> {/* Route pour la page d'inscription */}
                <Route path="/Panier" element={<Panier />} />
            </Routes>
        </Router>
    );
}

export default App;
