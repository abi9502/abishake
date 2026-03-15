import React, { useEffect } from 'react';
import './Education.css';
import { FaUserGraduate, FaCertificate, FaAward, FaCube } from "react-icons/fa";

const Education = () => {

    // Intersection Observer for reveal animations (Optional, but good for section reveal)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const revealElements = document.querySelectorAll('.reveal-text');
        revealElements.forEach(el => observer.observe(el));

        return () => revealElements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div className="education-area tmp-section-gap" id="education">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-head text-center mb-5">
                            <span className="subtitle text-primary text-uppercase fw-bold mb-2 d-block reveal-text">Academic & Credential</span>
                            <h2 className="title text-white split-collab reveal-text" style={{ transitionDelay: '0.1s' }}>Education & Certificates</h2>
                        </div>
                    </div>
                </div>

                <div className="education-grid">

                    {/* Column 1: Education Timeline */}
                    <div className="education-column">
                        <h3 className="h4 text-white mb-4 reveal-text">
                            <FaUserGraduate className="text-primary me-2" /> Education
                        </h3>
                        <div className="edu-timeline">
                            {/* Degree 1 */}
                            <div className="edu-item reveal-text" style={{ transitionDelay: '0.2s' }}>
                                <div className="edu-dot"></div>
                                <div className="edu-card">
                                    <h4 className="edu-degree">B.E Computer Science</h4>
                                    <p className="edu-institution">Arifa Institute Of Technology (Anna University Affiliated)</p>
                                    <p className="edu-year">2020 – 2024 | Percentage: 75%</p>
                                </div>
                            </div>

                            {/* Degree 2 */}
                            <div className="edu-item reveal-text" style={{ transitionDelay: '0.3s' }}>
                                <div className="edu-dot"></div>
                                <div className="edu-card">
                                    <h4 className="edu-degree">Higher Secondary Education (HSC)</h4>
                                    <p className="edu-institution">St Antony's Higher Secondary School, Vedharanyam</p>
                                    <p className="edu-year">2019 – 2020 | Percentage: 71%</p>
                                </div>
                            </div>

                            {/* Degree 3 */}
                            <div className="edu-item reveal-text" style={{ transitionDelay: '0.4s' }}>
                                <div className="edu-dot"></div>
                                <div className="edu-card">
                                    <h4 className="edu-degree">Secondary School (SSLC)</h4>
                                    <p className="edu-institution">Government Higher Secondary School, Thopputhurai</p>
                                    <p className="edu-year">2017 – 2018 | Percentage: 82%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Certificates Grid */}
                    <div className="certificates-column" id="certificates">
                        <h3 className="h4 text-white mb-4 reveal-text">
                            <FaAward className="text-primary me-2" /> Certifications
                        </h3>
                        <div className="cert-grid">

                            {/* Cert 1 */}
                            <div className="cert-card reveal-text" style={{ transitionDelay: '0.4s' }}>
                                <div className="cert-content">
                                    <FaCertificate className="cert-icon" />
                                    <h5 className="cert-title">Full Stack Dev using Python</h5>
                                    <span className="cert-issuer">Pentagon Space</span>
                                </div>
                            </div>

                            {/* Cert 2 */}
                            <div className="cert-card reveal-text" style={{ transitionDelay: '0.5s' }}>
                                <div className="cert-content">
                                    <FaAward className="cert-icon" />
                                    <h5 className="cert-title">Web Development</h5>
                                    <span className="cert-issuer">Let's Game Tech</span>
                                </div>
                            </div>

                            {/* Cert 3 */}
                            <div className="cert-card reveal-text" style={{ transitionDelay: '0.6s' }}>
                                <div className="cert-content">
                                    <FaCube className="cert-icon" />
                                    <h5 className="cert-title">Full Stack Development</h5>
                                    <span className="cert-issuer">LinkedIn Learning</span>
                                </div>
                            </div>

                            {/* Cert 4 */}
                            <div className="cert-card reveal-text" style={{ transitionDelay: '0.7s' }}>
                                <div className="cert-content">
                                    <FaCertificate className="cert-icon" />
                                    <h5 className="cert-title">Full Stack with Python</h5>
                                    <span className="cert-issuer">GUVI</span>
                                </div>
                            </div>

                            {/* Cert 5 */}
                            <div className="cert-card reveal-text" style={{ transitionDelay: '0.8s' }}>
                                <div className="cert-content">
                                    <FaCertificate className="cert-icon" />
                                    <h5 className="cert-title">Python & Cyber Security</h5>
                                    <span className="cert-issuer">Great Learning</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;
