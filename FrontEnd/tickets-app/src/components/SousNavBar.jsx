import React from "react";
import "../style/SousNavBar.css"; // Assure-toi que le chemin est correct

const SousNavBar = () => {
    return (
        <div className="sous-navbar-container">
            <div className="sous-navbar-links">
                <a href="#home">Accueil</a>
                <a href="#concerts">Concerts & Festivals</a>
                <a href="#theatre">Théâtre & Humour</a>
                <a href="#formations">Formations</a>
                <a href="#famille">Famille & Loisirs</a>
                <a href="#sport">Sport</a>
                <a href="#cinema">Cinéma</a>
                <a href="#voyage">Voyage</a>
                <a href="#blackfriday">BLACK FRIDAY</a>
            </div>
        </div>
    );
};

export default SousNavBar;
