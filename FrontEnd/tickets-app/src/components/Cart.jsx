import React, { useState } from "react";
import '../style/Cart.css';



const Cart = ({ onClose }) => {
    // State pour stocker les articles et leur quantité
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Item 1", price: 25.00, quantity: 1, img: "https://via.placeholder.com/100" },
        { id: 2, name: "Item 2", price: 15.00, quantity: 1, img: "https://via.placeholder.com/100" }
    ]);

    // Fonction pour mettre à jour la quantité d'un article
    const handleQuantityChange = (id, newQuantity) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        );
        setCartItems(updatedCart);
    };

    // Fonction pour calculer le total
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Fonction pour supprimer un article
    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    };

    return (
        <div className="cart-modal">
            <div className="cart-modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Your Cart</h2>

                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-details">
                                <img src={item.img} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <p>Product description goes here</p>
                                    <div className="price-quantity">
                                        <span className="price">${item.price.toFixed(2)}</span>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                        />
                                        <button
                                            className="remove"
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-total">
                    <h3>Total</h3>
                    <p>${calculateTotal()}</p>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;