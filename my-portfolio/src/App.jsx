// src/App.jsx
import React, { useState, useEffect } from 'react'; // ایمپورت useEffect برای localStorage
import './index.css';
import Projects from './components/Projects'; // ایمپورت کامپوننت Projects
import Contact from './components/Contact';   // ایمپورت کامپوننت Contact

function App() {
    // 1. تعریف State برای مدیریت Dark Mode و بازیابی از LocalStorage
    // هدف: نگهداری وضعیت فعلی تم و ماندگاری انتخاب کاربر بین بازدیدها.
    // توضیح: با استفاده از یک تابع در useState، وضعیت اولیه را از localStorage می‌خوانیم.
    // اگر 'isDarkMode' در localStorage موجود بود، آن را به boolean تبدیل می‌کنیم؛ در غیر این صورت، false (حالت روشن) را پیش‌فرض قرار می‌دهیم.
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode === 'true' ? true : false;
    });

    // 2. استفاده از useEffect برای ذخیره وضعیت تم در LocalStorage
    // هدف: هر زمان که isDarkMode تغییر کرد، وضعیت جدید را در localStorage ذخیره کنیم.
    // توضیح: `useEffect` یک هوک است که به شما امکان می‌دهد "عوارض جانبی" (مثل تعامل با API مرورگر مانند localStorage) را در کامپوننت‌های تابعی React انجام دهید.
    // آرایه وابستگی `[isDarkMode]` به React می‌گوید که این افکت فقط زمانی اجرا شود که `isDarkMode` تغییر کند.
    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);


    // 3. تابع برای تغییر تم
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
            {/*
        در آینده، کامپوننت Navbar در اینجا قرار خواهد گرفت.
        این کامپوننت propsهای `isDarkMode` و `toggleTheme` را برای کنترل تم دریافت خواهد کرد.
      */}

            <main>
                {/* این Navbar Placeholder موقت است */}
                <nav style={{
                    position: 'fixed', top: 0, width: '100%',
                    backgroundColor: isDarkMode ? 'var(--bg-dark)' : 'var(--bg-light)',
                    color: isDarkMode ? 'var(--text-dark)' : 'var(--text-light)',
                    padding: '1rem 2rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', zIndex: 1000,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <h1>My Portfolio</h1>
                    <div>
                        <span style={{ marginRight: '1rem' }}>Theme: {isDarkMode ? 'Dark' : 'Light'}</span>
                        <button onClick={toggleTheme} style={{
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>
                            Toggle Theme
                        </button>
                    </div>
                </nav>

                {/*
          کامپوننت‌های محتوای اصلی را در اینجا رندر می‌کنیم.
          این کامپوننت‌ها به طور خودکار استایل‌های fade-in را از index.css دریافت می‌کنند.
        */}
                <section id="home" className="animate-fade-in" style={{ padding: '8rem 2rem 0', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <h1>Welcome to My Portfolio!</h1>
                    <p>This is a placeholder for the Home section.</p>
                </section>

                <section id="about" className="animate-fade-in" style={{ padding: '8rem 2rem 0', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <h2>About Me</h2>
                    <p>This is a placeholder for the About section.</p>
                </section>

                <Projects /> {/* رندر کامپوننت Projects */}
                <Contact />   {/* رندر کامپوننت Contact */}
            </main>
            <footer style={{
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: isDarkMode ? 'var(--bg-dark)' : 'var(--bg-light)',
                color: isDarkMode ? 'var(--text-dark)' : 'var(--text-light)',
                borderTop: '1px solid ' + (isDarkMode ? 'var(--border-dark)' : 'var(--border-light)')
            }}>
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
