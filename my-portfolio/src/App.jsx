// src/App.jsx

import React, { useState } from 'react'; // ایمپورت React و هوک useState برای مدیریت State
import './index.css'; // ایمپورت فایل CSS اصلی برای استایل‌های سراسری و متغیرهای تم

function App() {
    // 1. تعریف State برای مدیریت Dark Mode
    // هدف: نگهداری وضعیت فعلی تم (روشن یا تاریک).
    // توضیح: `isDarkMode` متغیری است که وضعیت را نگه می‌دارد (true برای تاریک، false برای روشن).
    // `setIsDarkMode` تابعی است که برای تغییر این وضعیت استفاده می‌شود.
    // `useState(false)` وضعیت اولیه را "روشن" (false) تنظیم می‌کند.
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 2. تابع برای تغییر تم
    // هدف: تغییر وضعیت isDarkMode بین true و false.
    // توضیح: این تابع با هر بار فراخوانی، وضعیت تم را معکوس می‌کند (اگر روشن بود، تاریک می‌شود و برعکس).
    // `prevMode => !prevMode` تضمین می‌کند که از آخرین وضعیت موجود استفاده شود.
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        // 3. کانتینر اصلی اپلیکیشن با کلاس‌های دینامیک تم
        // هدف: اعمال کلاس‌های CSS 'light' یا 'dark' به کانتینر اصلی بر اساس وضعیت isDarkMode.
        // توضیح: این Div کانتینر اصلی برنامه است. با استفاده از قالب‌بندی Template String و Operator سه‌تایی،
        // کلاس 'dark' یا 'light' به آن اضافه می‌شود که توسط index.css برای تغییر استایل‌های تم استفاده می‌گردد.
        <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
            {/*
        در آینده، کامپوننت Navbar در اینجا قرار خواهد گرفت.
        این کامپوننت propsهای `isDarkMode` و `toggleTheme` را برای کنترل تم دریافت خواهد کرد.
      */}

            <main>
                {/*
          اینجا جایی است که کامپوننت‌های محتوای اصلی (Home, About, Projects, Contact)
          در آینده رندر خواهند شد.
        */}
                <h1>Portfolio App (Base Layout)</h1> {/* عنوان موقت برای نمایش */}
                <p>Current theme: {isDarkMode ? 'Dark' : 'Light'}</p> {/* نمایش وضعیت فعلی تم */}
                <button onClick={toggleTheme}>Toggle Theme</button> {/* دکمه موقت برای تغییر تم */}
            </main>
        </div>
    );
}

export default App; // اکسپورت کامپوننت App برای استفاده در فایل main.jsx (یا index.js)
