import React, { useEffect, useState } from "react";

const ProductAPI = () => {
  const [products, setProducts] = useState([]); // Initialize products as an empty array

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products)) // Set products to the array from the response
      .catch(error => console.error('Failed to fetch', error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.length > 0 && ( // Check if there are products
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              {/* Optionally display product images if available */}
              {product.images && product.images.map((image, index) => (
                <img key={index} src={image} alt={`Product ${product.title} ${index + 1}`} style={{ width: "100px", height: "100px" }} />
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductAPI;
