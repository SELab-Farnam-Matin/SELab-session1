// src/App.jsx
import { useState, useEffect } from 'react';
import styles from './App.module.css'; // Make sure App.module.css exists
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : true; // Default to dark mode
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
