import React, { useState } from 'react';
import '../style/Panier.css';

// Sample ticket data
const initialTickets = [
    { id: 1, name: 'Concert Ticket', price: 50, quantity: 1 },
    { id: 2, name: 'Festival Ticket', price: 100, quantity: 1 },
    { id: 3, name: 'VIP Experience', price: 200, quantity: 1 },
];

const TicketCart = () => {
    const [tickets, setTickets] = useState(initialTickets);
    const [discount, setDiscount] = useState(0);
    const [promoCode, setPromoCode] = useState("");

    // Handle quantity change
    const handleQuantityChange = (id, delta) => {
        setTickets(prevTickets =>
            prevTickets.map(ticket =>
                ticket.id === id
                    ? { ...ticket, quantity: Math.max(1, ticket.quantity + delta) }
                    : ticket
            )
        );
    };

    // Handle remove ticket
    const handleRemoveTicket = (id) => {
        setTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== id));
    };

    // Handle applying discount
    const handleApplyDiscount = () => {
        if (promoCode === "DISCOUNT10") {
            setDiscount(0.1); // 10% discount
        } else {
            alert("Invalid Promo Code");
            setDiscount(0);
        }
    };

    // Calculate total price
    const subtotal = tickets.reduce((acc, ticket) => acc + ticket.price * ticket.quantity, 0);
    const discountAmount = subtotal * discount;
    const totalPrice = subtotal - discountAmount;

    return (
        <div className="ticket-cart-card">
            <h2 className="card-title">Your Cart</h2>

            <div className="ticket-list">
                {tickets.map(ticket => (
                    <div key={ticket.id} className="ticket-item">
                        <div className="ticket-info">
                            <span className="ticket-name">{ticket.name}</span>
                            <span className="ticket-price">${ticket.price}</span>
                        </div>
                        <div className="quantity-control">
                            <button
                                className="quantity-btn"
                                onClick={() => handleQuantityChange(ticket.id, -1)}
                            >
                                <i className="fas fa-minus" />
                            </button>
                            <span className="quantity">{ticket.quantity}</span>
                            <button
                                className="quantity-btn"
                                onClick={() => handleQuantityChange(ticket.id, 1)}
                            >
                                <i className="fas fa-plus" />
                            </button>
                        </div>
                        <button
                            className="remove-btn"
                            onClick={() => handleRemoveTicket(ticket.id)}
                        >
                            <i className="fas fa-trash-alt" />
                        </button>
                    </div>
                ))}
            </div>

            <div className="discount-section">
                <input
                    type="text"
                    placeholder="Enter Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="promo-input"
                />
                <button className="apply-btn" onClick={handleApplyDiscount}>
                    Apply Discount
                </button>
            </div>

            <div className="price-breakdown">
                <div className="price-item">
                    <span className="price-label">Subtotal:</span>
                    <span className="price-value">${subtotal}</span>
                </div>
                <div className="price-item">
                    <span className="price-label">Discount:</span>
                    <span className="price-value">-${discountAmount.toFixed(2)}</span>
                </div>
                <div className="price-item total-price">
                    <span className="price-label">Total Price:</span>
                    <span className="price-value">${totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default TicketCart;
