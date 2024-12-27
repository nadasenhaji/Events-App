import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Import the trash icon
import '../style/Favorites.css';

const Favorites = () => {
    const [favorites, setFavorites] = useState([
        { id: 1, title: 'Concert Rock', date: '2024-12-31', location: 'Paris', image: 'https://via.placeholder.com/80' },
        { id: 2, title: 'Conférence Tech', date: '2025-01-15', location: 'Lyon', image: 'https://via.placeholder.com/80' },
        { id: 3, title: 'Festival', date: '2025-02-20', location: 'Marseille', image: 'https://via.placeholder.com/80' }
    ]);

    const removeFavorite = (id) => {
        setFavorites(favorites.filter(event => event.id !== id));
    };

    return (
        <div className="favorites-container">
            <h1>Mes Favoris</h1>
            <ul className="favorites-list">
                {favorites.map(event => (
                    <li key={event.id} className="favorite-item">
                        {/* Image on the left */}
                        <img src={event.image} alt={event.title} className="favorite-image" />

                        {/* Event details */}
                        <div className="favorite-details">
                            <h2>{event.title}</h2>
                            <p>Date: {event.date}</p>
                            <p>Lieu: {event.location}</p>
                        </div>

                        {/* Trash Icon Button */}
                        <button className="remove-btn" onClick={() => removeFavorite(event.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;