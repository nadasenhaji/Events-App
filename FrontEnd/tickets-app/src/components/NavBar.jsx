import React, { useState } from "react";
import "../style/NavBar.css";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button
                    className="menu-button"
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                >
                    ☰
                </button>
                {isMenuOpen && (
                    <div className="dropdown-menu">
                        <a href="#">
                            <i className="fas fa-home"></i> Accueil
                        </a>
                        <a href="#">
                            <i className="fas fa-sign-in-alt"></i> Se connecter
                        </a>
                        <a href="#">
                            <i className="fas fa-box"></i> Mes commandes
                        </a>
                        <a href="#">
                            <i className="fas fa-info-circle"></i> Qui sommes-nous
                        </a>
                        <a href="#">
                            <i className="fas fa-envelope"></i> Contact
                        </a>
                    </div>
                )}
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Cherchez ce que vous voulez"
                />
            </div>
            <div className="navbar-center">
                <h1 className="logo">SMR</h1>
            </div>
            <div className="navbar-right">
                <a href="#">
                    <i className="fas fa-store"></i> Mag
                </a>
                <a href="#">
                    <i className="fas fa-info-circle"></i> Qui sommes-nous
                </a>
                <button className="cart-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="cart-icon"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h18l-1.5 9h-15L3 3zM3 3l3 12h12l3-12H3zm6 6h12m-9 5h6m-6 0v1m0-1H6"
                        />
                    </svg>
                    <span className="cart-count">2</span>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
