import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1><b>AMIT SHAH</b></h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/press">Press</a></li>
                    <li><a href="/myview">My View</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
