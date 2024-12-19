import React from 'react';
import '../style/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            {/* Header Section */}
            <header className="header">
                <div className="header-content">
                    <h1>Experience the Best Concerts</h1>
                    <p>Live the music. Feel the energy. Discover unforgettable moments.</p>
                    <button className="explore-btn">Explore Events</button>
                </div>
            </header>

            {/* Concert Image Gallery */}
            <section className="concert-gallery">
                <div className="gallery-item">
                    <img src="https://source.unsplash.com/800x600/?concert,stage" alt="Concert 1" />
                </div>
                <div className="gallery-item">
                    <img src="https://source.unsplash.com/800x600/?music,crowd" alt="Concert 2" />
                </div>
                <div className="gallery-item">
                    <img src="https://source.unsplash.com/800x600/?live,performance" alt="Concert 3" />
                </div>
                <div className="gallery-item">
                    <img src="https://source.unsplash.com/800x600/?band,lights" alt="Concert 4" />
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 Concert Vibes. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
