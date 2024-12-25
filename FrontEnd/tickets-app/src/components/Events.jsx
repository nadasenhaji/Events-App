import React from 'react';
import '../style/Events.css';
import cardImage from '../../src/assets/images/card.jpeg';


const Events = () => {
    const events = [
        { id: 1, category: 'Théâtre & Humour', title: 'ILYAS DJADEL InSo Comedy Show à Marrakech', date: '01j 01h 18m 06s', price: '300 MAD', button: 'Guichet Fermé', imageUrl: 'cardImage' },
        { id: 2, category: 'Concerts & Festivals', title: 'Cheb Hasni & Cheb Akil - le Grand Hommage à Oujda', date: '01j 28h 18m 06s', price: '100 MAD', button: 'Buy', imageUrl: 'path/to/image2.jpg' },
        { id: 3, category: 'Concerts & Festivals', title: 'MISTER YOU EN SHOWCASE', date: '01j 18h 06s', price: '300 MAD', button: 'Buy', imageUrl: 'path/to/image3.jpg' },
        { id: 4, category: 'Concerts & Festivals', title: 'Soirée de Nouvel An avec Hajib Farrah au Théâtre Mohammed', date: '01j 18m 06s', price: '200 MAD', button: 'Buy', imageUrl: 'path/to/image4.jpg' },
        { id: 5, category: 'Concerts & Festivals', title: 'Soirée Spirituelle à Tétouan', date: '02j 18m 06s', price: '250 MAD', button: 'Buy', imageUrl: 'path/to/image5.jpg' },
        { id: 6, category: 'Théâtre & Humour', title: 'RireDakhla : le rendez-vous humoristique à ne pas manquer', date: '01j 18m 06s', price: '100 MAD', button: 'Buy', imageUrl: 'path/to/image6.jpg' },
    ];

    return (
        <div className="events-container">
            <h1>Events</h1>
            <div className="events-grid">
                {events.map((event) => (
                    <div key={event.id} className="event-card">
                        <img src={cardImage} alt={event.imageUrl} className="event-image" />
                        <div className="event-category">{event.category}</div>
                        <span className="event-title">{event.title}</span>

                        <p className="event-date">{event.date}</p>
                        <p className="event-price">{event.price}</p>
                        <div className="button-container">
                            <button className={`event-button ${event.button === 'Guichet Fermé' ? 'closed' : ''}`}>
                                {event.button}
                            </button>
                            {event.button !== 'Guichet Fermé' && (
                                <button className="event-button more-button">
                                    More
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
