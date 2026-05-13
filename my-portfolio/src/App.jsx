import { useState, useEffect } from 'react';
import styles from './App.module.css';
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

    const themeClass = !darkMode ? 'light' : '';

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const hiddenElements = document.querySelectorAll('.scroll-animate');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => hiddenElements.forEach((el) => observer.unobserve(el));
    }, []);

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
