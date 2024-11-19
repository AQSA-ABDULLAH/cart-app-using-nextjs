// product/[id]/page.js
"use client";  // Mark this component as client-side

import React from "react";
import { useCart } from "../../context/CartContext"; // Ensure CartContext is also client-side
import { motion } from "framer-motion"; // Import motion

async function fetchProductDetails(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }
  return res.json();
}

const ProductDetail = ({ params }) => {
  const [product, setProduct] = React.useState(null);
  const { addToCart } = useCart();

  // Use React.use() to unwrap the params
  const { id } = React.use(params);

  React.useEffect(() => {
    const loadProductDetails = async () => {
      const productData = await fetchProductDetails(id);
      setProduct(productData);
    };
    if (id) {
      loadProductDetails();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 max-w-3xl"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 text-lg mb-4">{product.description}</p>
        <p className="text-indigo-600 font-bold text-2xl">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Add to Cart
        </button>
      </motion.div>
    </div>
  );
};

export default ProductDetail;


