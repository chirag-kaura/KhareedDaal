import React from "react";
import './Dashboard.css';
import './Product_Data';

const Product = ({ product }) => {
return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h5 className="product-name">{product.name}</h5>
        <p className="product-price">{product.price} Rs.</p>
        </div>
    </div>)
}

export default Product;

