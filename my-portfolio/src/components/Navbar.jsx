// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';

const Navbar = ({ toggleDarkMode, darkMode }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <a className="title" href="/">Portfolio</a>
            <div className="menu">
                {}
                <div className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {}
                <ul className={menuOpen ? "menuOpen" : ""}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {}
                    <li>
                        <button onClick={toggleDarkMode}>
                            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
