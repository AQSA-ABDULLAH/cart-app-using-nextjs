// product/[id]/page.js
import React from "react";

async function fetchProductDetails(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }
  return res.json();
}

const ProductDetail = async ({ params }) => {
  const product = await fetchProductDetails(params.id);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 text-lg mb-4">{product.description}</p>
        <p className="text-indigo-600 font-bold text-2xl">${product.price}</p>
        <div className="mt-6">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.title} - ${index + 1}`}
              className="inline-block w-24 h-24 object-cover rounded-md m-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
