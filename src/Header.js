import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";


//used shortcut -> rfce
function header() {
  return (
    <nav className="header">
      {/* Logo on the left -> img */}
      <Link to="/login">
        <img 
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" 
          alt="" 
        />
      </Link>
      
      {/* Search box */}
      <input type="text" className='header__searchInput' />


      {/* 3 Links */}
      {/* Basket icon with number */}
    </nav>
  )
  }

export default header
