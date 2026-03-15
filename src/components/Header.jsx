import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/', section: 'home' },
  { label: 'About', href: '#about', section: 'about' },
  { label: 'Skills', href: '#services', section: 'services' },
  { label: 'Projects', href: '#projects', section: 'projects' },
  { label: 'Experience', href: '#experience', section: 'experience' },
  { label: 'Education', href: '#education', section: 'education' },
  { label: 'Contact', href: '#contact', section: 'contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* ── Scroll: sticky + active section ── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Find which section is in view
      const sections = navLinks
        .filter(l => l.section !== 'home')
        .map(l => document.getElementById(l.section));

      let current = 'home';
      sections.forEach(sec => {
        if (!sec) return;
        const top = sec.getBoundingClientRect().top;
        if (top <= 120) current = sec.id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const closeSidebar = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* ═══════════════ HEADER ═══════════════ */}
      <header className={`sp-header-area ${isScrolled ? 'header-sticky' : 'header-transparent'}`}>
        <div className="container">
          <div className="header-content d-flex align-items-center">

            {/* Logo */}
            <div className="logo me-auto">
              <a href="/" style={{ textDecoration: 'none' }}>
                <h2 className="mb-0 shiny-text"
                  style={{ fontFamily: 'var(--font-primary)', fontWeight: 800, fontSize: '30px' }}>
                  Abishake R
                </h2>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="tmp-mainmenu-nav d-none d-xl-flex ms-auto me-3">
              <ul className="tmp-mainmenu d-flex align-items-center mb-0 list-unstyled gap-1">
                {navLinks.map(({ label, href, section }) => (
                  <li key={section}>
                    <a
                      href={href}
                      className={`header-nav-link ${activeSection === section ? 'active' : ''}`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: Socials + Hamburger */}
            <div className="tmp-header-right d-flex align-items-center gap-3 ms-auto">
              <div className="social-share-wrapper d-none d-md-flex gap-2">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="header-social-icon"><i className="fab fa-instagram" /></a>
                <a href="https://www.linkedin.com/in/abishake-r-789964266" target="_blank" rel="noopener noreferrer" className="header-social-icon"><i className="fab fa-linkedin-in" /></a>
                <a href="https://github.com/abishake" target="_blank" rel="noopener noreferrer" className="header-social-icon"><i className="fab fa-github" /></a>
              </div>

              <button
                className="hamburger-btn d-xl-none d-flex align-items-center justify-content-center"
                onClick={toggleMobileMenu}
                aria-label="Open menu"
              >
                <i className="fa-solid fa-bars" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ═══════════════ SIDEBAR ═══════════════ */}
      <div className={`sidebar-menu-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-overlay" onClick={closeSidebar} />

        <div className="sidebar-menu-inner">
          {/* Sidebar Header */}
          <div className="sidebar-header d-flex justify-content-between align-items-center mb-4">
            <a href="/" style={{ textDecoration: 'none' }}>
              <h2 className="mb-0 shiny-text"
                style={{ fontFamily: 'var(--font-primary)', fontWeight: 800, fontSize: '26px' }}>
                Abishake R
              </h2>
            </a>
            <button
              className="sidebar-close-btn"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          {/* Divider */}
          <div className="sidebar-divider mb-4" />

          {/* Sidebar Nav Links — only on mobile (hidden on desktop where header nav shows) */}
          <div className="d-xl-none">
            <nav className="sidebar-nav mb-4">
              {navLinks.map(({ label, href, section }) => (
                <a
                  key={section}
                  href={href}
                  className={`sidebar-nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={closeSidebar}
                >
                  <span className="sidebar-nav-dot" />
                  {label}
                </a>
              ))}
            </nav>
            <div className="sidebar-divider mb-4" />
          </div>

          {/* Sidebar Divider (desktop only — no nav above it) */}
          <div className="d-none d-xl-block sidebar-divider mb-3" />

          {/* About Me */}
          <div className="sidebar-about mb-3">
            <h5 className="sidebar-about__heading">About Me</h5>
            <p className="sidebar-about__text">
              I'm <strong style={{ color: '#a356f7' }}>Abishake R</strong>, a passionate Computer Science graduate with a strong foundation in Python and Web Development.
            </p>
          </div>



          {/* Availability */}
          <div className="sidebar-availability mb-3">
            <span className="sidebar-avail-dot" />
            <span className="sidebar-avail-text">Available for freelance work</span>
          </div>

          {/* Divider */}
          <div className="sidebar-divider mb-3" />

          {/* Contact Info */}
          <div className="sidebar-contact-info">
            <div className="sidebar-contact-item">
              <div className="sidebar-contact-icon">
                <i className="fa-solid fa-phone" />
              </div>
              <div>
                <span className="sidebar-contact-label">Call Now</span>
                <a href="tel:+919025150372" className="sidebar-contact-value">+91 9025150372</a>
              </div>
            </div>

            <div className="sidebar-contact-item">
              <div className="sidebar-contact-icon">
                <i className="fa-solid fa-envelope" />
              </div>
              <div>
                <span className="sidebar-contact-label">Mail Us</span>
                <a href="mailto:abishake9502@gmail.com" className="sidebar-contact-value">abishake9502@gmail.com</a>
              </div>
            </div>

            <div className="sidebar-contact-item">
              <div className="sidebar-contact-icon">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div>
                <span className="sidebar-contact-label">My Address</span>
                <span className="sidebar-contact-value">Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="sidebar-socials mt-2 mb-2">
            <a href="mailto:abishake9502@gmail.com" target="_blank" rel="noopener noreferrer" className="sidebar-social-btn"><i className="fa-solid fa-envelope" /></a>
            <a href="https://www.linkedin.com/in/abishake-r-789964266" target="_blank" rel="noopener noreferrer" className="sidebar-social-btn"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
