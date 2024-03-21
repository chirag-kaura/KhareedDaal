import React from 'react';
import {useAuth,AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Route, Routes,Navigate, useLocation  } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar.js';
import ProductList from './ProductList';
import products from './Product_Data'; 
import ContactForm from './Contact_Us.js';
import UserProfile from './User_Profile.js';
import './Dashboard.css';
import ProductAPI from './Product_Api';


const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  return user ? (children) : (<Navigate to="/Login" replace state={{from:location}}/>);
};

function App() { 

  return (
    <AuthProvider>
    <Router>
    <div className='navbar-container'>
      <Navbar />
      <div className='main-container'>
      <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/User_Profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
      <Route path="/ProductList" element={<ProductList products={products}/>} />
      {/* <Route path="/User_Profile" element={<UserProfile />} /> */}
      <Route path="/Contact_Us" element={<ContactForm />} />
      <Route path="/" element={<Navigate replace to="/ProductList" />} />
      <Route path="/Product_Api" element={<ProductAPI />} />
      </Routes>
      </div>
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
