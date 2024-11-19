"use client"; // Mark this as a client component

import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-indigo-600 text-white px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

