import React, { useEffect } from 'react';
import './Experience.css';
import { FaLaptopCode, FaBriefcase, FaCalendarAlt, FaCode, FaDatabase, FaRobot } from "react-icons/fa";

const cardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
};

const experiences = [
    {
        type: 'work',
        company: 'Vhilv Technology Pvt. Limited',
        role: 'Python & Full Stack Developer',
        icon: <FaCode />,
        date: '10 Months · Full-Time',
        badge: 'Work Experience',
        badgeColor: '#22c55e',
        description:
            'Worked as a Full Stack Developer building and maintaining scalable web applications. Developed Python-based backends, RESTful APIs, and interactive React frontends. Collaborated with cross-functional teams to deliver production-ready features, optimized database queries, and improved overall application performance.',
        tags: ['Python', 'React', 'REST APIs', 'SQL', 'Django', 'JavaScript', 'Full Stack'],
    },
    {
        type: 'internship',
        company: 'Robolix',
        role: 'Python Developer Intern',
        icon: <FaRobot />,
        date: '6 Months · Internship',
        badge: 'Internship',
        badgeColor: '#5227FF',
        description:
            'Completed a 6-month internship focusing on Python-based automation and backend services. Worked on data processing pipelines, script automation, and integration of IoT hardware. Gained hands-on experience in Python scripting, database handling, and contributing to collaborative development workflows.',
        tags: ['Python', 'Automation', 'IoT', 'SQL', 'Scripting', 'Backend'],
    },
    {
        type: 'internship',
        company: 'DataNerdz.ai',
        role: 'Full Stack Developer Intern',
        icon: <FaDatabase />,
        date: '3 Months · Internship',
        badge: 'Internship',
        badgeColor: '#5227FF',
        description:
            'Worked on AI-driven web platforms as a Full Stack Developer Intern. Built and styled responsive frontend interfaces and integrated backend APIs. Contributed to data visualization features and collaborated on improving user-facing dashboards using React and Python.',
        tags: ['React', 'Python', 'REST APIs', 'Data Visualization', 'Frontend', 'Backend'],
    },
    {
        type: 'internship',
        company: "Let's Game Tech",
        role: 'Web Development Intern',
        icon: <FaLaptopCode />,
        date: '15 Days · Internship',
        badge: 'Internship',
        badgeColor: '#5227FF',
        description:
            'Completed a short-term web development internship where I built and styled web pages, gained hands-on experience with HTML, CSS, and JavaScript, and contributed to UI implementation tasks in a fast-paced team environment.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'UI/UX'],
    },
];

const Experience = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const revealElements = document.querySelectorAll('.experience-item, .reveal-text');
        revealElements.forEach(el => observer.observe(el));

        return () => revealElements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div className="experience-area tmp-section-gap" id="experience">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-head text-center mb-5">
                            <span className="subtitle text-primary text-uppercase fw-bold mb-2 d-block reveal-text">My Journey</span>
                            <h2 className="title text-white split-collab reveal-text" style={{ transitionDelay: '0.1s' }}>My Experience</h2>
                            <p className="reveal-text" style={{ color: '#a1a1aa', maxWidth: '600px', margin: '12px auto 0', transitionDelay: '0.2s', fontSize: '1rem' }}>
                                9 months of internship experience &amp; 10 months of professional work experience across AI, robotics, and full-stack development companies.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-10">
                        <div className="exp-stats-row">
                            <div className="exp-stat-card">
                                <span className="exp-stat-number">10</span>
                                <span className="exp-stat-label">Months Work Exp.</span>
                            </div>
                            <div className="exp-stat-divider" />
                            <div className="exp-stat-card">
                                <span className="exp-stat-number">9</span>
                                <span className="exp-stat-label">Months Internships</span>
                            </div>
                            <div className="exp-stat-divider" />
                            <div className="exp-stat-card">
                                <span className="exp-stat-number">3</span>
                                <span className="exp-stat-label">Companies</span>
                            </div>
                            <div className="exp-stat-divider" />
                            <div className="exp-stat-card">
                                <span className="exp-stat-number">4</span>
                                <span className="exp-stat-label">Roles Held</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="experience-timeline">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="experience-item text-start"
                                    style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                                    onMouseMove={cardMouseMove}
                                >
                                    <div className="card-content">
                                        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="exp-icon-box">
                                                    {exp.icon}
                                                </div>
                                                <div>
                                                    <h4 className="exp-company">{exp.company}</h4>
                                                    <span className="exp-role">{exp.role}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column align-items-end gap-2">
                                                <span
                                                    className="exp-badge"
                                                    style={{ background: `${exp.badgeColor}18`, border: `1px solid ${exp.badgeColor}44`, color: exp.badgeColor }}
                                                >
                                                    <FaBriefcase className="me-1" style={{ fontSize: '0.7rem' }} />
                                                    {exp.badge}
                                                </span>
                                                <span className="exp-date"><FaCalendarAlt className="me-2" />{exp.date}</span>
                                            </div>
                                        </div>

                                        <p className="exp-description">{exp.description}</p>

                                        <div className="exp-tags">
                                            {exp.tags.map((tag, ti) => (
                                                <span key={ti} className="exp-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
