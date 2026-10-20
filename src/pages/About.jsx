import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-eyebrow">About Us</div>
        <h1>A Decade of <em style={{ color: 'var(--gold-light)' }}>Trust & Protection</em></h1>
        <p>Since 2014, SureVriksha has been the financial safety net for thousands of Indian families — built on honesty, expertise, and a commitment to your wellbeing.</p>
        <div className="page-hero-line"></div>
      </section>

      {/* MISSION SECTION */}
      <section style={{ padding: '6rem 0', background: 'white' }} aria-labelledby="about-mission">
        <div className="container">
          <div className="about-mission-grid">
            <div>
              <div className="section-tag reveal">Who We Are</div>
              <h2 id="about-mission" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, color: 'var(--green-deeper)', lineHeight: 1.2, marginBottom: '1.25rem' }} className="reveal">We Are <em style={{ color: 'var(--gold-dark)' }}>SureVriksha</em> —<br />Your Financial Banyan Tree</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }} className="reveal">The name SureVriksha means "Sure Tree" — a symbol of stability, shelter, and unshakeable strength. Like a banyan tree that offers shade and protection to all, we exist to be the financial safety net for every Indian family.</p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }} className="reveal">We founded SureVriksha because we saw a gap: too many people were either under-insured or paying for policies that didn't truly serve them. We set out to change that — with unbiased advice, transparent processes, and relentless support.</p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }} className="reveal">Today, SureVriksha has helped over 2,000 families secure their futures, settled hundreds of claims, and built a reputation as one of India's most trusted financial and tax advisory firms.</p>
              <div className="reveal" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <div style={{ textAlign: 'center' }}><div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--green-dark)', lineHeight: 1 }}>2000+</div><div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Families Protected</div></div>
                <div style={{ textAlign: 'center' }}><div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold-dark)', lineHeight: 1 }}>10+</div><div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Years of Trust</div></div>
                <div style={{ textAlign: 'center' }}><div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--green-dark)', lineHeight: 1 }}>98%</div><div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Claims Settled</div></div>
              </div>
            </div>
            <div className="why-big-card about-card-visual reveal" style={{ position: 'relative' }}>
              <div className="wbc-logo-row">
                <img src="/images/logo.png" alt="SureVriksha" className="wbc-logo"/>
                <div><div className="wbc-brand">SureVriksha</div><div className="wbc-sub">Financial Advisory • Est. 2014</div></div>
              </div>
              <div className="wbc-grid">
                <div className="wbc-stat"><div className="wbc-num">40+</div><div className="wbc-lbl">Top Insurers</div></div>
                <div className="wbc-stat"><div className="wbc-num">4.9★</div><div className="wbc-lbl">Google Rating</div></div>
                <div className="wbc-stat"><div className="wbc-num">PBPartner</div><div className="wbc-lbl">Certified POSP</div></div>
              </div>
              <div className="wbc-progress"><div className="wbc-progress-label"><span>Client Satisfaction</span><span>98%</span></div><div className="wbc-progress-bar"><div className="wbc-progress-fill" style={{ width: '98%' }}></div></div></div>
              <div className="wbc-badges" style={{ marginTop: '1.5rem' }}>
                <div className="wbc-badge-chip">🛡️ Verified PBPartner POSP</div>
                <div className="wbc-badge-chip">🏆 Policybazaar Network</div>
                <div className="wbc-badge-chip">🔒 100% Transparent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values-section" aria-labelledby="values-h">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Our Foundation</div>
            <h2 id="values-h">Vision, Mission<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>& Our Core Values</em></h2>
          </div>
          <div className="values-grid">
            <div className="value-card reveal"><div className="value-icon">🎯</div><h3>Our Vision</h3><p>A financially secure India where every family has the right insurance and investment plan to weather any storm — without confusion or exploitation.</p></div>
            <div className="value-card reveal"><div className="value-icon">💚</div><h3>Our Mission</h3><p>To simplify financial planning through honest advice, transparent processes, and dedicated support — from policy selection to claims settlement.</p></div>
            <div className="value-card reveal"><div className="value-icon">🤝</div><h3>Our Promise</h3><p>We will always recommend what's right for you — not what earns us the highest commission. Your trust is worth more than any transaction.</p></div>
            <div className="value-card reveal"><div className="value-icon">⚡</div><h3>Speed & Efficiency</h3><p>Insurance queries answered in 2 hours. Policy issuance in 24 hours. Claims initiated same-day. We respect your time as much as our own.</p></div>
            <div className="value-card reveal"><div className="value-icon">🔍</div><h3>Radical Transparency</h3><p>No hidden charges. No fine print traps. No confusing jargon. We explain everything clearly so you always decide with full confidence.</p></div>
            <div className="value-card reveal"><div className="value-icon">🌱</div><h3>Lifelong Partnership</h3><p>We don't disappear after the sale. Annual reviews, renewals, claim support, and fresh advice — we're with you for every chapter of life.</p></div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section style={{ padding: '6rem 0', background: 'white' }} aria-labelledby="cred-h">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Credentials & Trust</div>
            <h2 id="cred-h">Why 2,000+ Families <em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>Trust SureVriksha</em></h2>
          </div>
          <div className="badges-grid">
            <div className="badge-card reveal"><div className="badge-icon">🏛️</div><h4>IRDAI Certified POSP</h4><p>Fully certified and registered under IRDAI guidelines for transparent Pan-India advisory</p></div>
            <div className="badge-card reveal"><div className="badge-icon">🤝</div><h4>Verified PBPartner POSP</h4><p>Certified POSP by PBPartners (Policybazaar Insurance Brokers Pvt. Ltd.) across 40+ insurers</p></div>
            <div className="badge-card reveal"><div className="badge-icon">🛡️</div><h4>40+ Insurer Tie-ups</h4><p>Direct digital access to India's top Life, Health, Motor and SME insurance companies</p></div>
            <div className="badge-card reveal"><div className="badge-icon">⭐</div><h4>4.9★ Average Rating</h4><p>Consistently rated 5 stars by clients across Google and trusted review platforms</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-orb" aria-hidden="true"></div>
        <div className="cta-orb2" aria-hidden="true"></div>
        <div className="container">
          <div className="cta-content reveal">
            <div className="cta-eyebrow"><div className="cta-eyebrow-line"></div><div className="cta-eyebrow-text">Let's Talk</div><div className="cta-eyebrow-line"></div></div>
            <h2>Let Us Protect<br /><em>What Matters Most to You</em></h2>
            <p>Start with one free conversation. No fees, no obligations. Just honest guidance from people who genuinely care.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">Book Free Consultation</Link>
              <a href="https://wa.me/919583425025" className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">WhatsApp Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
