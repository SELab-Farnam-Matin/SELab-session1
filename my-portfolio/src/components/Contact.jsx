import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message feature will be implemented soon!');
    };

    return (
        <section id="contact" className="contact-section animate-fade-in">
            <h2>Contact Me</h2>
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required placeholder="John Doe" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required placeholder="john@example.com" />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" required placeholder="Your message here..."></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
