import React, { useEffect } from 'react';
import './Education.css'; // Reusing Education styles for consistency or creating Achievements.css
import { FaAward, FaTrophy, FaCoins } from "react-icons/fa";

const Achievements = () => {

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
        <div className="achievements-area tmp-section-gap" id="achievements">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-head text-center mb-5">
                            <span className="subtitle text-primary text-uppercase fw-bold mb-2 d-block reveal-text">Success Stories</span>
                            <h2 className="title text-white split-collab reveal-text" style={{ transitionDelay: '0.1s' }}>Achievements</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="achievement-card reveal-text" style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            padding: '40px',
                            borderRadius: '20px',
                            border: '1px solid rgba(163, 86, 247, 0.2)',
                            textAlign: 'center',
                            transitionDelay: '0.2s'
                        }}>
                            <div className="achievement-icon mb-4" style={{ fontSize: '50px', color: 'var(--color-primary)' }}>
                                <FaTrophy />
                            </div>
                            <h3 className="text-white mb-3">Won 1st Prize in IEEE YESISIT 2023</h3>
                            <p className="text-light-gray mb-4" style={{ fontSize: '18px' }}>
                                Outstanding performance and innovation led to winning the top spot at the prestigious IEEE YESISIT 2023 competition.
                            </p>
                            <div className="achievement-reward d-inline-flex align-items-center gap-2" style={{
                                background: 'linear-gradient(90deg, #a356f7 0%, #6b21a8 100%)',
                                padding: '10px 25px',
                                borderRadius: '50px',
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                <FaCoins /> Cash Award: ₹50,000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
