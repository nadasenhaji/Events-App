import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Importation de Login.jsx
import SignUp from './components/SignUp';
import NavBar from "./components/NavBar";
import SousNavBar from "./components/SousNavBar";
import LandingPage from "./components/LandingPage";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";
import Events from "./components/Events";

function App() {
    return (
        //<Router>
        // <Routes>

        //   <Route path="/" element={<Login />} /> {/* Route pour la page de login */}
        //    <Route path="/SignUp" element={<SignUp />} /> {/* Route pour la page d'inscription */}
        // </Routes>
        // </Router>
        <div>
            <div className="Header">
                <NavBar/>
                <SousNavBar/>
            </div>
            <div className="Container">
                <LandingPage/>

            </div>
            <div className="Container">
                <Cart/>
            </div>
            <div className="Container">
                <Favorites/>
            </div>
            <div className="Container">
                <Events/>
            </div>

        </div>

    );
}

export default App;