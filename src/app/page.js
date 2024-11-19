// page.js
import React from "react";

export const metadata = {
  title: "Product List",
};

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data.products;
}

const Home = async () => {
  const products = await fetchProducts();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-6">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 transform hover:scale-105 transition duration-300"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;


