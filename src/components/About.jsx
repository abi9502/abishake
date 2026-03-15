import { useEffect } from 'react';
import './About.css';
import aboutImage from '../assets/images/Abi.png';
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";

const About = () => {

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
        <div className="about-area tmp-section-gap" id="about">
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6">
                        <div className="about-thumbnails text-center">
                            <div className="about-image-wrapper">
                                <div className="profile-card-image">
                                    <img src={aboutImage} alt="About Haribabu" className="img-fluid rounded-3" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="floating-badge">
                                    <i className="fa-solid fa-code"></i>
                                    <span>Python Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-inner">
                            <div className="section-head text-start mb-4">
                                <span className="subtitle text-primary text-uppercase fw-bold mb-2 d-block reveal-text">About Me</span>
                                <h2 className="title split-collab mb-3 reveal-text" style={{ transitionDelay: '0.2s' }}>
                                    Python & Full Stack <br /> Developer
                                </h2>
                            </div>
                            <p className="description mb-4 reveal-text" style={{ color: '#d0d0d0', opacity: 0.7, transitionDelay: '0.4s' }}>
                                I am a dedicated Computer Science graduate with hands-on experience as a Python &amp; Full Stack Developer. With 10 months of professional work experience at Vhilv Technology and 9 months of internship experience across Robolix and DataNerdz.ai, I specialize in building scalable web applications using Python, React, Django, and SQL. I am passionate about solving real-world problems through clean code and modern technology.
                            </p>

                            <div className="about-skill-wrapper mb-4 reveal-text" style={{ transitionDelay: '0.6s' }}>
                                <h5 className="fw-bold mb-4 text-white">Tech Stack &amp; Tools</h5>
                                <div className="tech-marquee-container">
                                    <div className="tech-marquee-track">
                                        {/* Set 1 */}
                                        <div className="tech-item" title="Python"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Python</span></div>
                                        <div className="tech-item" title="React"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>React</span></div>
                                        <div className="tech-item" title="Django"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Django</span></div>
                                        <div className="tech-item" title="JavaScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>JavaScript</span></div>
                                        <div className="tech-item" title="MySQL"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>MySQL</span></div>
                                        <div className="tech-item" title="Node.js"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Node.js</span></div>
                                        <div className="tech-item" title="Git"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Git</span></div>
                                        <div className="tech-item" title="HTML5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>HTML5</span></div>
                                        <div className="tech-item" title="CSS3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>CSS3</span></div>
                                        <div className="tech-item" title="Docker"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Docker</span></div>
                                        <div className="tech-item" title="PostgreSQL"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>PostgreSQL</span></div>
                                        <div className="tech-item" title="REST APIs"><FaServer size={28} color="#5227FF" /><span>REST APIs</span></div>
                                        <div className="tech-item" title="Full Stack"><FaCode size={28} color="#22c55e" /><span>Full Stack</span></div>
                                        <div className="tech-item" title="Database"><FaDatabase size={28} color="#f59e0b" /><span>Database</span></div>

                                        {/* Set 2 (Duplicate for Infinite Scroll) */}
                                        <div className="tech-item" title="Python"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Python</span></div>
                                        <div className="tech-item" title="React"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>React</span></div>
                                        <div className="tech-item" title="Django"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Django</span></div>
                                        <div className="tech-item" title="JavaScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>JavaScript</span></div>
                                        <div className="tech-item" title="MySQL"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>MySQL</span></div>
                                        <div className="tech-item" title="Node.js"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Node.js</span></div>
                                        <div className="tech-item" title="Git"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Git</span></div>
                                        <div className="tech-item" title="HTML5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>HTML5</span></div>
                                        <div className="tech-item" title="CSS3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>CSS3</span></div>
                                        <div className="tech-item" title="Docker"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>Docker</span></div>
                                        <div className="tech-item" title="PostgreSQL"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" style={{ width: '60%', height: '60%', objectFit: 'contain' }} /><span>PostgreSQL</span></div>
                                        <div className="tech-item" title="REST APIs"><FaServer size={28} color="#5227FF" /><span>REST APIs</span></div>
                                        <div className="tech-item" title="Full Stack"><FaCode size={28} color="#22c55e" /><span>Full Stack</span></div>
                                        <div className="tech-item" title="Database"><FaDatabase size={28} color="#f59e0b" /><span>Database</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .tmp-section-gap { padding: 80px 0; }
                .text-secondary { color: #abb8c3 !important; }
            `}</style>
        </div>
    );
};

export default About;
