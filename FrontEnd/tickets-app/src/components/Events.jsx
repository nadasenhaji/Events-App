import React, { useState } from 'react';
import '../style/Events.css';
import cardImage from '../../src/assets/images/card.jpeg';

const Events = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        { id: 1, category: 'Théâtre & Humour', title: 'ILYAS DJADEL InSo Comedy Show à Marrakech', date: '01j 01h 18m 06s', price: '300 MAD', button: 'Guichet Fermé', imageUrl: 'cardImage' },
        { id: 2, category: 'Concerts & Festivals', title: 'Cheb Hasni & Cheb Akil - le Grand Hommage à Oujda', date: '01j 28h 18m 06s', price: '100 MAD', button: 'Buy', imageUrl: 'path/to/image2.jpg' },
        { id: 3, category: 'Concerts & Festivals', title: 'MISTER YOU EN SHOWCASE', date: '01j 18h 06s', price: '300 MAD', button: 'Buy', imageUrl: 'path/to/image3.jpg' },
        { id: 4, category: 'Concerts & Festivals', title: 'Soirée de Nouvel An avec Hajib Farrah au Théâtre Mohammed', date: '01j 18m 06s', price: '200 MAD', button: 'Buy', imageUrl: 'path/to/image4.jpg' },
        { id: 5, category: 'Concerts & Festivals', title: 'Soirée Spirituelle à Tétouan', date: '02j 18m 06s', price: '250 MAD', button: 'Buy', imageUrl: 'path/to/image5.jpg' },
        { id: 6, category: 'Théâtre & Humour', title: 'RireDakhla : le rendez-vous humoristique à ne pas manquer', date: '01j 18m 06s', price: '100 MAD', button: 'Buy', imageUrl: 'path/to/image6.jpg' },
    ];

    const openModal = (event) => {
        setSelectedEvent(event);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedEvent(null);
    };

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
                            <button
                                className={`event-button ${event.button === 'Guichet Fermé' ? 'closed' : ''}`}
                                onClick={() => openModal(event)}
                            >
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

            {isModalOpen && selectedEvent && (
                <div className="payment-modal-overlay">
                    <div className="payment-modal">
                        <h2>Payment details</h2>
                        <p><strong>Event:</strong> {selectedEvent.title}</p>
                        <p><strong>Price:</strong> {selectedEvent.price}</p>

                        <input type="text" placeholder="Name on card" />
                        <input type="text" placeholder="Card number" />
                        <input type="text" placeholder="Expiry (MM/YY)" />
                        <input type="text" placeholder="CVV" />

                        <button className="payment-submit-button">Pay Now</button>
                        <button className="close-modal-button" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
