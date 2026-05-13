// src/App.jsx
import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
    // Logic for dark mode state
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        // We default to dark mode if nothing is saved
        return savedMode ? JSON.parse(savedMode) : true;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    // If darkMode is false, the theme will be 'light'. If true, it will be empty (for dark).
    const themeClass = !darkMode ? 'light' : '';

    return (
        // The themeClass ('light' or '') is applied here
        <div className={`${styles.App} ${themeClass}`}>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Home />
            <About />
            {/* Other components will be added here */}
        </div>
    );
}

export default App;
