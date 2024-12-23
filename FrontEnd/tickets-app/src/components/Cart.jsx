import React, { useState } from 'react';
import '../style/Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Event1", price: 5.95, quantity: 1 },
        { id: 2, name: "Event2", price: 0.0, quantity: 1 },
        { id: 3, name: "Event3", price: 5.95, quantity: 1 },
    ]);

    const deliveryCost = 4.0;

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity > 0) {
            const updatedCart = cartItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            );
            setCartItems(updatedCart);
        }
    };

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    };

    const totalProductsCost = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalCost = totalProductsCost + deliveryCost;

    return (
        <div className="container mx-auto mt-5">
            <h2 className="text-xl font-bold mb-5">Mon panier</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b py-3">
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p>{item.price > 0 ? `${item.price.toFixed(2)} €` : "Offert"}</p>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    className="w-12 text-center border rounded-md"
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, parseInt(e.target.value, 10) || 1)
                                    }
                                />
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="ml-4 text-red-500"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    ))}
                    <a href="#" className="text-blue-500 mt-3 inline-block">← Continuer mes achats</a>
                </div>

                <div className="border p-5">
                    <h3 className="text-lg font-semibold mb-4">Total</h3>
                    <p className="flex justify-between">
                        <span>Produits</span>
                        <span>{totalProductsCost.toFixed(2)} €</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Livraison</span>
                        <span>{deliveryCost.toFixed(2)} €</span>
                    </p>
                    <p className="flex justify-between font-bold mt-3">
                        <span>Total</span>
                        <span>{totalCost.toFixed(2)} €</span>
                    </p>
                    <button className="w-full bg-green-500 text-white py-2 rounded-md mt-4">
                        Valider ma commande
                    </button>
                    <input
                        type="text"
                        placeholder="Mon bon de réduction"
                        className="w-full border rounded-md p-2 mt-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Cart;
