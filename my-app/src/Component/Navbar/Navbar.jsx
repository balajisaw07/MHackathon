import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assest/logo.png';  // Ensure correct directory name
import cart_icon from '../Assest/cart_icon.png';  // Ensure correct directory name
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("shop");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        if (window.innerWidth <= 678) {
            toggleDropdown();
        }
    };

    return (
        <nav className='navbar'>
            <div className="navLogo">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-image" />
                </Link>
                <p className="logo-text">SHOPPER</p>
            </div>

            <ul className={`nav-menu ${isDropdownOpen ? 'show' : ''}`}>
                <li onClick={() => handleMenuClick("shop")}>
                    <Link to='/' className={`nav-link ${activeMenu === "shop" ? 'active' : ''}`}>Shop</Link>
                </li>
                <li onClick={() => handleMenuClick("men")}>
                    <Link to='/men' className={`nav-link ${activeMenu === "men" ? 'active' : ''}`}>Men</Link>
                </li>
                <li onClick={() => handleMenuClick("women")}>
                    <Link to='/women' className={`nav-link ${activeMenu === "women" ? 'active' : ''}`}>Women</Link>
                </li>
                <li onClick={() => handleMenuClick("kids")}>
                    <Link to='/kids' className={`nav-link ${activeMenu === "kids" ? 'active' : ''}`}>Kids</Link>
                </li>
            </ul>

            <div className="loginCart">
                <Link to='/login' className="login-button">Login</Link>
                <Link to='/cart' className="cart-link">
                    <img src={cart_icon} alt="Cart" className="cart-icon" />
                    <div className="navcartcount">0</div>
                </Link>
            </div>

            <button className="dropdown-toggle" onClick={toggleDropdown} aria-label="Toggle navigation">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </nav>
    );
};

export default Navbar;
