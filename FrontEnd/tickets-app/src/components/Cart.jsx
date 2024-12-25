import React from "react";
import '../style/Cart.css';

const Cart = ({ onClose }) => {  // Get the onClose prop
    return (
        <div className="cart-modal">
            <div className="cart-modal-content">
                <button className="close-button" onClick={onClose}>×</button>  {/* Call onClose on button click */}
                <h2>Your Cart</h2>

                <div className="cart-items">
                    <div className="cart-item">
                        <div className="cart-item-details">
                            <img src="https://via.placeholder.com/100" alt="item1" className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3>Item 1</h3>
                                <p>Product description goes here</p>
                                <div className="price-quantity">
                                    <span className="price">$25.00</span>
                                    <input type="number" value="1" min="1" />
                                    <span className="remove">Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-item">
                        <div className="cart-item-details">
                            <img src="https://via.placeholder.com/100" alt="item2" className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3>Item 2</h3>
                                <p>Product description goes here</p>
                                <div className="price-quantity">
                                    <span className="price">$15.00</span>
                                    <input type="number" value="1" min="1" />
                                    <span className="remove">Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cart-total">
                    <h3>Total</h3>
                    <p>$40.00</p>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
