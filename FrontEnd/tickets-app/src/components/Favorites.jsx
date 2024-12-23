import React, { useState } from 'react';
import '../style/Favorites.css';

const Favorites = () => {
    const [favorites, setFavorites] = useState([
        { id: 1, title: 'Concert Rock', date: '2024-12-31', location: 'Paris' },
        { id: 2, title: 'Conférence Tech', date: '2025-01-15', location: 'Lyon' },
        { id: 3, title: 'Festival', date: '2025-02-20', location: 'Marseille' }
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
                        <div className="favorite-details">
                            <h2>{event.title}</h2>
                            <p>Date: {event.date}</p>
                            <p>Lieu: {event.location}</p>
                        </div>
                        <button className="remove-btn" onClick={() => removeFavorite(event.id)}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

    export default Favorites;
