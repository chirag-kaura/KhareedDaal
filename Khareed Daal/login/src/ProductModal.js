import React from "react";
import './Dashboard.css';
import SipCalculator from "./SipCalculator";


const ProductModal= ({product,onClose}) =>{
    if (!product) return null;

return(
    <div className="modal-backdrop">
            <div className="modal">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: {product.price} Rs.</p>
            <p><b>More Details:</b></p>
            <p>{product.info}</p>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
    );
};

export default ProductModal;