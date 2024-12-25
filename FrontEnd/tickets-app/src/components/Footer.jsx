import React from 'react';
import '../style/Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Contact Section */}
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><FaPhoneAlt className="footer-icon" /> +1 234 567 890</li>
                        <li><FaEnvelope className="footer-icon" /> support@concertvibes.com</li>
                        <li><FaMapMarkerAlt className="footer-icon" /> 123 Music Lane, Suite 456</li>
                    </ul>
                </div>

                {/* About Section */}
                <div className="footer-section">
                    <h4>About Us</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Careers</li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; 2024 Concert Vibes. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
