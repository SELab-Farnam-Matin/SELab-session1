import { useState, useEffect } from 'react';
import styles from './App.module.css';
import './index.css'; // Keep your global css
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects.jsx'; // Your added component
import Contact from './components/Contacts/Contact.jsx';   // Your added component

function App() {
    // Using the state logic from the 'components' branch
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : true; // Default to dark mode
    });

    useEffect(() => {
        localStorage.setItem('theme',darkMode ? 'dark' : 'light');

        // localStorage.setItem('darkMode', JSON.stringify(darkMode));

        if (darkMode) {
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const themeClass = !darkMode ? 'light' : '';

    // Scroll animation logic from 'components' branch
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
        <div className={`${styles.App} ${themeClass}`}>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <main>
                <Home />
                <About />
                {/* Your new components integrated here */}
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
