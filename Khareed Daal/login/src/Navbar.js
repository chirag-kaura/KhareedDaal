import { Link } from 'react-router-dom';
import React from "react";
import './Navbar.css';

const Navbar =() =>{
    return(
        <nav className="navbar">
            <Link to ='ProductList'>Products</Link>
            <Link to ='User_Profile'>User Profile</Link>
            <Link to ='Contact_Us'>Contact us</Link>
            <Link to ='Product_Api'>Product Api</Link>
            </nav>
    );
};

export default Navbar;