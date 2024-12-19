import React, { useState, useEffect } from "react";
import "../style/Navbar.css"; // Ensure the path is correct

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [navbarShrink, setNavbarShrink] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeLink, setActiveLink] = useState("inbox"); // Track active link

    const handleScroll = () => {
        setNavbarShrink(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function to set active link
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <nav className={`navbar-container ${navbarShrink ? "shrink" : ""}`}>
                <div className="navbar-left">
                    <div className="navbar-logo" />
                    <span className="navbar-name">Guichet</span>
                </div>

                <div className="navbar-center">
                    <a
                        href="#"
                        className={activeLink === "inbox" ? "active" : ""}
                        onClick={() => handleLinkClick("inbox")}
                    >
                        Inbox
                    </a>
                    <a
                        href="#"
                        className={activeLink === "events" ? "active" : ""}
                        onClick={() => handleLinkClick("events")}
                    >
                        Events
                    </a>
                    <a
                        href="#"
                        className={activeLink === "favorites" ? "active" : ""}
                        onClick={() => handleLinkClick("favorites")}
                    >
                        Favorites
                    </a>
                    <a
                        href="#"
                        className={activeLink === "account-settings" ? "active" : ""}
                        onClick={() => handleLinkClick("account-settings")}
                    >
                        Account Settings
                    </a>
                    <a
                        href="#"
                        className={activeLink === "contact" ? "active" : ""}
                        onClick={() => handleLinkClick("contact")}
                    >
                        Contact
                    </a>
                </div>

                <div className="navbar-right">
                    {/* Search */}
                    <div className="navbar-search">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>

                    {/* Cart Icon */}
                    <div className="navbar-cart">
                        <i className="fa fa-shopping-cart"></i>
                    </div>

                    {/* Menu Dropdown */}
                    <div
                        className="navbar-menu-button"
                        onClick={() => setDropdownVisible(!dropdownVisible)}
                    >
                        Menu
                    </div>
                    {dropdownVisible && (
                        <div className={`navbar-dropdown ${dropdownVisible ? "visible" : ""}`}>
                            <div className="dropdown-item">
                                <i className="fa fa-home"></i> Acceuil
                            </div>
                            <div className="dropdown-item">
                                <i className="fa fa-sign-in-alt"></i> Se connecter
                            </div>
                            <div className="dropdown-item">
                                <i className="fa fa-box"></i> Mes commandes
                            </div>
                            <div className="dropdown-item">
                                <i className="fa fa-question-circle"></i> Aide
                            </div>
                            <div className="dropdown-item">
                                <i className="fa fa-phone-alt"></i> Contact
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* New Section of Links */}
            <div className="navbar-links-section">
                <hr className="navbar-divider" />
                <div className="navbar-links">
                    <a href="#" onClick={() => handleLinkClick("home")}>Home</a>
                    <a href="#" onClick={() => handleLinkClick("about")}>About</a>
                    <a href="#" onClick={() => handleLinkClick("services")}>Services</a>
                    <a href="#" onClick={() => handleLinkClick("blog")}>Blog</a>
                    <a href="#" onClick={() => handleLinkClick("contact-us")}>Contact Us</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
