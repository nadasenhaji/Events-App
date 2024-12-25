import React, { useEffect, useState } from "react";
import "../style/Navbar.css";
import Cart from './Cart'; // Import the Cart component

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [navbarShrink, setNavbarShrink] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeLink, setActiveLink] = useState("inbox"); // Track active link
    const [isCartVisible, setIsCartVisible] = useState(false); // State to manage Cart visibility

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
                    <div className="navbar-logo"/>
                    <span className="navbar-name">Guichet</span>
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
                    <div
                        className="navbar-cart"
                        onClick={() => setIsCartVisible(true)} // Show cart modal on click
                    >
                        <i className="fa fa-shopping-cart"></i>
                    </div>
                    <div
                        className="navbar-favorites"
                        onClick={() => console.log("Favorites clicked")} // Handle click event
                    >
                        <i className="fas fa-heart"></i> {/* FontAwesome heart icon */}
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
                                <i className="fa fa-question-circle"></i> Aide
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Cart Modal */}
            {isCartVisible && (
                <Cart onClose={() => setIsCartVisible(false)}/>
                // Close modal by setting isCartVisible to false
// Close modal by setting isCartVisible to false
            )}


        </>
    );
};

export default Navbar;
