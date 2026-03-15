import React, { useEffect, useRef } from 'react';
import './Contact.css';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const els = sectionRef.current?.querySelectorAll('.reveal-up') || [];
        els.forEach(el => observer.observe(el));
        return () => els.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <section className="contact-section" id="contact" ref={sectionRef}>
            {/* Background decoration */}
            <div className="ct-bg-blob ct-blob-1" />
            <div className="ct-bg-blob ct-blob-2" />

            <div className="container">
                {/* Header */}
                <div className="ct-header reveal-up">
                    <span className="ct-badge">Contact</span>
                    <h2 className="ct-title">Get in <span className="ct-title--accent">Touch</span></h2>
                    <p className="ct-subtitle">Feel free to contact me for collaboration, job opportunities, or any professional inquiries. I am always open to learning and working on new technologies and projects.</p>
                </div>

                <div className="ct-grid">
                    {/* Left — Info */}
                    <div className="ct-info reveal-up" style={{ transitionDelay: '0.1s' }}>
                        <div className="ct-info__inner">
                            <h3 className="ct-info__heading">Get in Touch</h3>
                            <p className="ct-info__text">
                                I'm currently available for freelance work and full-time positions.
                                Feel free to reach out anytime.
                            </p>

                            <div className="ct-contact-list">
                                <a href="tel:+919025150372" className="ct-contact-row">
                                    <div className="ct-contact-row__icon">
                                        <FiPhone />
                                    </div>
                                    <div>
                                        <span className="ct-contact-row__label">Phone</span>
                                        <span className="ct-contact-row__value">+91 9025150372</span>
                                    </div>
                                </a>
                                <a href="mailto:abishake9502@gmail.com" className="ct-contact-row">
                                    <div className="ct-contact-row__icon">
                                        <FiMail />
                                    </div>
                                    <div>
                                        <span className="ct-contact-row__label">Email</span>
                                        <span className="ct-contact-row__value">abishake9502@gmail.com</span>
                                    </div>
                                </a>
                                <div className="ct-contact-row">
                                    <div className="ct-contact-row__icon">
                                        <FiMapPin />
                                    </div>
                                    <div>
                                        <span className="ct-contact-row__label">Location</span>
                                        <span className="ct-contact-row__value">Tamil Nadu, India</span>
                                    </div>
                                </div>
                            </div>

                            <div className="ct-socials">
                                <a href="mailto:abishake9502@gmail.com" target="_blank" rel="noopener noreferrer" className="ct-social"><FiMail /></a>
                                <a href="https://www.linkedin.com/in/abishake-r-789964266" target="_blank" rel="noopener noreferrer" className="ct-social"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="ct-form-wrap reveal-up" style={{ transitionDelay: '0.2s' }}>
                        <form className="ct-form">
                            <div className="ct-form__row">
                                <div className="ct-field">
                                    <label className="ct-field__label">Your Name</label>
                                    <input type="text" className="ct-field__input" placeholder="John Doe" />
                                </div>
                                <div className="ct-field">
                                    <label className="ct-field__label">Email Address</label>
                                    <input type="email" className="ct-field__input" placeholder="you@example.com" />
                                </div>
                            </div>
                            <div className="ct-field">
                                <label className="ct-field__label">Subject</label>
                                <input type="text" className="ct-field__input" placeholder="Project discussion..." />
                            </div>
                            <div className="ct-field">
                                <label className="ct-field__label">Message</label>
                                <textarea className="ct-field__input ct-field__textarea" placeholder="Tell me about your project..." />
                            </div>
                            <button type="submit" className="ct-btn">
                                <span>Send Message</span>
                                <FiSend />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
