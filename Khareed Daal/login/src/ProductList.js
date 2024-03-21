import React, { useState } from "react";
import Product from "./Product";
import ProductModal from "./ProductModal";
import './ProductModal.css';
import './Dashboard.css';



const ProductList= ({products}) => {
    const [selectedProduct,setSelectedProduct] =useState(null);
    const [currentPage, setCurrentPage] =useState(1);
    const productsPerPage =10;
    const [searchTerm,setSearchTerm] =useState('');
    

    const handleProductClick =(product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal =() =>{
        setSelectedProduct(null);
    };


    const handleSearchChange =(event) =>{
        setSearchTerm(event.target.value);
    };


    const filterProducts= products.filter(product=>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const totalPages =Math.ceil(products.length/productsPerPage);

    const indexOfLastProduct = currentPage*productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct-productsPerPage;
    const currentProducts =filterProducts.slice(indexOfFirstProduct,indexOfLastProduct);

    const paginate=(pageNumber) => setCurrentPage(pageNumber);


    const nextPage =() =>{
        if (currentPage < totalPages){
             setCurrentPage(currentPage+1)
        }
    };

    const prevPage =() => {
        if (currentPage>1){
            setCurrentPage(currentPage-1)
        }
    };

return (
    <div>
        <div className="search-container">
            <input
            type="text"
            placeholder="search product"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
            />
        </div>
        <div className="product">
            {currentProducts.map((product)=> (
                <div key={product.id} onClick={()=> handleProductClick(product)}>
                    <Product product={product} />
                        </div>
            ))}
        </div>
{selectedProduct && <ProductModal product ={selectedProduct} onClose={handleCloseModal}/>}
    <div className="pagination">
        <button onClick={prevPage} disabled={currentPage===1} className={currentPage ===1 ? 'disabled':''}>Previous Page</button>
    {Array.from({length:totalPages}, (_,index) => (
        <button key ={index} onClick={()=>paginate(index+1)}>
            {index+1}
        </button>
    ))}
    <button onClick={nextPage} disabled={currentPage=== totalPages} className={currentPage ===totalPages ? 'disabled':''}>Next Page</button>
    </div>
    </div>
    );
};

export default ProductList;