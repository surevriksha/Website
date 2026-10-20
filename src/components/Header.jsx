import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header" role="banner">
      <div className="header-inner">
        <nav className="nav container">
          <Link to="/" className="logo" aria-label="SureVriksha Home">
            <img src="/images/logo.png" alt="SureVriksha Logo" className="logo-img" width="52" height="52" />
            <div className="logo-text-wrap">
              <span className="logo-name">SureVriksha</span>
              <span className="logo-sub">Financial Advisory</span>
            </div>
          </Link>
          <ul className="nav-links" role="list">
            <li><NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Services</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Blog &amp; Guides</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink></li>
            <li><NavLink to="/reviews" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Reviews</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink></li>
          </ul>
          <Link to="/contact" className="btn btn-gold nav-cta" aria-label="Get free consultation">Free Consultation</Link>
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
            id="burger" 
            aria-label="Toggle menu" 
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu" role="navigation">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/blog" className="nav-link">Blog &amp; Guides</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/reviews" className="nav-link">Reviews</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link to="/contact" className="btn btn-gold" style={{ display: 'inline-block', marginTop: '1rem' }}>Free Consultation</Link></li>
        </ul>
      </div>
    </header>
  );
}
