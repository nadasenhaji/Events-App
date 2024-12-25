import React from 'react';
import '../style/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            {/* Header Section */}
            <header className="header">
                <div className="header-overlay">
                    <div className="header-content">
                        <h1>Unleash the Energy of Live Music</h1>
                        <p>
                            Join us for unforgettable concerts with your favorite artists, vibrant atmospheres, and electrifying performances.
                        </p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default LandingPage;
