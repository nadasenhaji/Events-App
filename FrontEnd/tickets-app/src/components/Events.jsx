import React from 'react';
import '../style/Events.css';

const Events = () => {
    const events = [
        { id: 1, category: 'Théâtre & Humour', title: 'ILYAS DJADEL InSo Comedy Show à Marrakech', date: '01j 01h 18m 06s', price: '300 MAD', button: 'Guichet Fermé' },
        { id: 2, category: 'Concerts & Festivals', title: 'Cheb Hasni & Cheb Akil - le Grand Hommage à Oujda', date: '01j 28h 18m 06s', price: '100 MAD', button: 'J\'achète' },
        { id: 3, category: 'Concerts & Festivals', title: 'MISTER YOU EN SHOWCASE', date: '01j 18h 06s', price: '300 MAD', button: 'J\'achète' },
        { id: 4, category: 'Concerts & Festivals', title: 'Soirée de Nouvel An avec Hajib Farrah au Théâtre Mohammed', date: '01j 18m 06s', price: '200 MAD', button: 'J\'achète' },
        { id: 5, category: 'Concerts & Festivals', title: 'Soirée Spirituelle à Tétouan', date: '02j 18m 06s', price: '250 MAD', button: 'J\'achète' },
        { id: 6, category: 'Théâtre & Humour', title: 'RireDakhla : le rendez-vous humoristique à ne pas manquer', date: '01j 18m 06s', price: '100 MAD', button: 'J\'achète' },
    ];

    return (
        <div className="events-container">
            <h1>Événements</h1>
            <div className="events-grid">
                {events.map((event) => (
                    <div key={event.id} className="event-card">
                        <div className="event-category">{event.category}</div>
                        <h2 className="event-title">{event.title}</h2>
                        <p className="event-date">⏳ {event.date}</p>
                        <p className="event-price">💰 {event.price}</p>
                        <button className={`event-button ${event.button === 'Guichet Fermé' ? 'closed' : ''}`}>
                            {event.button}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
