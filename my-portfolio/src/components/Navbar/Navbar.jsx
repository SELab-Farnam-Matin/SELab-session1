import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({darkMode, toggleDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>


                <div
                    className={`${styles.menuBtn} ${menuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>

                <button
                    className={styles.themeToggle}
                    onClick={toggleDarkMode}
                    aria-label="Toggle theme"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
