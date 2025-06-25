import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="border border-gray-400 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-3">{product.description}</p>
      <p className="text-blue-600 font-bold text-xl"> &#x20B9;{product.price.toFixed(2)}</p>
    </div>
  );
};

export default Product;