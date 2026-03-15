import React, { useEffect } from 'react';
import './Services.css';
import { FaPenNib, FaCube, FaVideo, FaCheck } from "react-icons/fa";

const Services = () => {

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const revealElements = document.querySelectorAll('.service-card');
        revealElements.forEach(el => observer.observe(el));

        return () => revealElements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div className="services-area tmp-section-gap" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-head text-center mb-5">
                            <span className="subtitle text-primary text-uppercase fw-bold mb-2 d-block reveal-text">My Expertise</span>
                            <h2 className="title text-white split-collab reveal-text" style={{ transitionDelay: '0.1s' }}>Skills & Abilities</h2>
                        </div>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {/* Service Card 1: UI/UX Design */}
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="service-card reveal-text"
                            style={{ transitionDelay: '0.2s' }}
                            onMouseMove={(e) => {
                                const card = e.currentTarget;
                                const rect = card.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                card.style.setProperty('--x', `${x}px`);
                                card.style.setProperty('--y', `${y}px`);
                            }}
                        >
                            <div className="card-content">
                                <div className="service-icon">
                                    <FaPenNib />
                                </div>
                                <h4 className="service-title">Technical Skills</h4>
                                <p className="service-description">
                                    Experienced in Python, web development, database management, and hardware integration for building efficient, real-world solutions.
                                </p>
                                <ul className="service-list">
                                    <li><FaCheck /> Python &amp; SQL</li>
                                    <li><FaCheck /> HTML, CSS, JavaScript</li>
                                    <li><FaCheck /> Arduino &amp; Prototyping</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 2: Soft Skills */}
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="service-card reveal-text"
                            style={{ transitionDelay: '0.4s' }}
                            onMouseMove={(e) => {
                                const card = e.currentTarget;
                                const rect = card.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                card.style.setProperty('--x', `${x}px`);
                                card.style.setProperty('--y', `${y}px`);
                            }}
                        >
                            <div className="card-content">
                                <div className="service-icon">
                                    <FaCube />
                                </div>
                                <h4 className="service-title">Soft Skills</h4>
                                <p className="service-description">
                                    Strong interpersonal and cognitive abilities that help me contribute effectively to teams and deliver quality outcomes under any conditions.
                                </p>
                                <ul className="service-list">
                                    <li><FaCheck /> Problem Solving &amp; Leadership</li>
                                    <li><FaCheck /> Creativity &amp; Innovation</li>
                                    <li><FaCheck /> Quick Learner &amp; Organization</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 3: Web Development */}
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="service-card reveal-text"
                            style={{ transitionDelay: '0.6s' }}
                            onMouseMove={(e) => {
                                const card = e.currentTarget;
                                const rect = card.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                card.style.setProperty('--x', `${x}px`);
                                card.style.setProperty('--y', `${y}px`);
                            }}
                        >
                            <div className="card-content">
                                <div className="service-icon">
                                    <FaVideo />
                                </div>
                                <h4 className="service-title">Web Development</h4>
                                <p className="service-description">
                                    Building functional and responsive web applications, from front-end interfaces to back-end logic, focused on user experience and performance.
                                </p>
                                <ul className="service-list">
                                    <li><FaCheck /> Full Stack Projects</li>
                                    <li><FaCheck /> React &amp; Python Backend</li>
                                    <li><FaCheck /> Responsive UI Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;
