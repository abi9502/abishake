import React, { useEffect } from 'react';
import './Projects.css';
import { FaArrowRight } from "react-icons/fa";
import project1Img from '../assets/images/Project-1.png';
import project2Img from '../assets/images/Project-2.png';
import project3Img from '../assets/images/Project-3.png';
import project4Img from '../assets/images/Project-4.png';

const Projects = () => {

    // Intersection Observer for scroll animations
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

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    return (
        <div className="projects-area tmp-section-gap" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-head text-center mb-5">
                            <span className="subtitle text-primary text-uppercase fw-bold mb-2 d-block reveal-text">My Work</span>
                            <h2 className="title text-white split-collab reveal-text" style={{ transitionDelay: '0.1s' }}>Featured Projects</h2>
                        </div>
                    </div>
                </div>

                <div className="projects-grid">

                    {/* Project 1 */}
                    <div className="project-card" onMouseMove={handleMouseMove}>
                        <div className="project-content">
                            <div className="project-thumbnail">
                                <img src={project1Img} alt="Fleet Management System" />
                            </div>
                            <h3 className="project-title">
                                <span className="project-title-text">Fleet Management System with Full Automation</span>
                                <FaArrowRight className="project-arrow" />
                            </h3>
                            <p className="project-desc">
                                A comprehensive, automated fleet management and tracking system built with IoT integration for real-time monitoring and reporting.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">HTML/CSS/JS</span>
                                <span className="project-tag">PHP</span>
                                <span className="project-tag">Python</span>
                                <span className="project-tag">IoT Integration</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '15px' }}>
                                <a href="https://testing.cyra.co.in/Fleet-managements/user-pannel/index.php" target="_blank" rel="noopener noreferrer" className="live-preview-link" style={{ color: '#5227FF', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Live Preview <FaArrowRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card" onMouseMove={handleMouseMove}>
                        <div className="project-content">
                            <div className="project-thumbnail">
                                <img src={project2Img} alt="Arifa Innovation Council Website" />
                            </div>
                            <h3 className="project-title">
                                <span className="project-title-text">Arifa Innovation & Incubation Council Website</span>
                                <FaArrowRight className="project-arrow" />
                            </h3>
                            <p className="project-desc">
                                Built an official platform for a freelance client to showcase their programs and events. Developed using React with a full admin panel, allowing seamless content updates directly from the dashboard.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">React</span>
                                <span className="project-tag">Full Admin Panel</span>
                                <span className="project-tag">Dynamic Content</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '15px' }}>
                                <a href="https://aiic.co.in" target="_blank" rel="noopener noreferrer" className="live-preview-link" style={{ color: '#5227FF', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Live Preview <FaArrowRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="project-card" onMouseMove={handleMouseMove}>
                        <div className="project-content">
                            <div className="project-thumbnail">
                                <img src={project3Img} alt="Green Growth Landscaping" />
                            </div>
                            <h3 className="project-title">
                                <span className="project-title-text">Green Growth Landscaping Website</span>
                                <FaArrowRight className="project-arrow" />
                            </h3>
                            <p className="project-desc">
                                Developed a platform for a freelance client showcasing outdoor landscaping solutions, including digital displays for services like terrace and vertical gardens, indoor plants, and landscape lighting.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">Web Development</span>
                                <span className="project-tag">UI/UX Layout</span>
                                <span className="project-tag">Business Portfolio</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '15px' }}>
                                <a href="https://greengrowth.co.in" target="_blank" rel="noopener noreferrer" className="live-preview-link" style={{ color: '#5227FF', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Live Preview <FaArrowRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="project-card" onMouseMove={handleMouseMove}>
                        <div className="project-content">
                            <div className="project-thumbnail">
                                <img src={project4Img} alt="Eagle Agro" />
                            </div>
                            <h3 className="project-title">
                                <span className="project-title-text">Eagle Agro Website</span>
                                <FaArrowRight className="project-arrow" />
                            </h3>
                            <p className="project-desc">
                                Designed and developed a fully responsive web presence as a freelance project for Eagle Agro, featuring streamlined navigation and customized layouts to display agricultural products and solutions.
                            </p>
                            <div className="project-tags">
                                <span className="project-tag">Full Stack</span>
                                <span className="project-tag">Responsive Design</span>
                                <span className="project-tag">Agro Tech</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '8px' }}>
                                <a href="https://eadi.techcart.io" target="_blank" rel="noopener noreferrer" className="live-preview-link" style={{ color: '#5227FF', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    Live Preview <FaArrowRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;
