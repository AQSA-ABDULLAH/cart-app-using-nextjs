// app/page.js
"use client";  // This line ensures this code runs client-side

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link component
import Header from "./components/header/page";

// Define products per page constant
const PRODUCTS_PER_PAGE = 10;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;
      const res = await fetch(
        `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
      );
      const data = await res.json();
      setProducts(data.products);
      setTotalProducts(data.total);
    };
    fetchProducts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-6">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`} // Navigate to the product detail page
              className="bg-white rounded-lg shadow-md p-4 transform hover:scale-105 transition duration-300"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


