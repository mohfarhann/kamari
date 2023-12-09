import React from "react";
import {Link, useNavigate} from "react-router-dom"

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/dashboard/${product.name}`, {
      state: {data: product}
    })
  }
  console.log(product)
  return (
    <div
      className="flex flex-col items-center justify-between p-4 bg-white shadow-md rounded-md"
      key={product.id}
    >
      <img
        className="w-full "
        src={product.img}
        alt={product.name}
      />
      <div className="flex flex-col justify-between w-full">
        <h2 className="text-xl font-bold text-gray-800">
          {product.name}
        </h2>
        <p className="text-sm text-gray-600">
          {product.ratings}
        </p>
        <button className="text-center text-black/70 text-sm"  onClick={handleNavigate}>More</button>
      </div>
    </div>
  );
};

export default ProductCard;