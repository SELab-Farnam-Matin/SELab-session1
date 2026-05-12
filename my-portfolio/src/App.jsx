import React, { useState, useEffect } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
        } else if (savedTheme === 'light') {
            setDarkMode(false);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(prefersDark);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);


    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (

        <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
            {}
            <h1>Portfolio Started</h1>
            <p>Dark Mode is currently: {darkMode ? 'On' : 'Off'}</p>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>

            {}
        </div>
    );
}

export default App;
