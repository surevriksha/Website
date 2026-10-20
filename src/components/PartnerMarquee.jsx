import React, { useState, useMemo } from 'react';
import { PB_PARTNERS_INFO, INSURER_PARTNERS, BANKING_PARTNERS } from '../data/insurancePartners';

export default function PartnerMarquee() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('marquee'); // 'marquee' or 'grid'
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered insurers for the grid view
  const filteredInsurers = useMemo(() => {
    return INSURER_PARTNERS.filter(partner => {
      const matchesCategory = activeCategory === 'all' 
        || (activeCategory === 'health' && partner.category === 'health')
        || (activeCategory === 'life' && partner.category === 'life')
        || (activeCategory === 'motor' && (partner.category === 'motor' || partner.category === 'general'))
        || (activeCategory === 'general' && (partner.category === 'motor' || partner.category === 'general'));

      const matchesSearch = searchQuery.trim() === ''
        || partner.name.toLowerCase().includes(searchQuery.toLowerCase())
        || partner.short.toLowerCase().includes(searchQuery.toLowerCase())
        || partner.tag.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Infinite marquee lists for smooth continuous scrolling
  // Split into Row 1 (Health & Life) and Row 2 (Motor, General & Banks)
  const row1Partners = useMemo(() => {
    const list = INSURER_PARTNERS.filter(p => p.category === 'health' || p.category === 'life');
    return [...list, ...list];
  }, []);

  const row2Partners = useMemo(() => {
    const list = [
      ...INSURER_PARTNERS.filter(p => p.category === 'motor' || p.category === 'general'),
      ...BANKING_PARTNERS.map(b => ({
        id: b.short.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        name: b.name,
        short: b.short,
        category: 'bank',
        tag: b.tag,
        isBank: true
      }))
    ];
    return [...list, ...list];
  }, []);

  return (
    <section className="partners-section" aria-label="Official Tie-Ups, Empanelled Insurers and PBPartner POSP Credentials">
      <div className="container">

        {/* ==============================================================
            PB PARTNERS POSP TRUST BANNER (HIGH CREDIBILITY CARD)
            ============================================================== */}
        <div className="pb-posp-trust-card reveal">
          <div className="pb-posp-card-header">
            <div className="pb-posp-brand-lockup">
              <div className="pb-logo-container">
                <img 
                  src="/images/pbpartners-logo.png" 
                  alt="PBPartners - A brand of Policybazaar Insurance Brokers Private Limited" 
                  className="pb-official-logo"
                  loading="lazy"
                />
              </div>
              <div className="pb-brand-text">
                <div className="pb-brand-title-wrap">
                  <span className="pb-brand-title">Verified &amp; Certified PBPartner POSP</span>
                  <span className="pb-verified-badge" title="Officially Certified Partner">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="pb-check-icon" width="14" height="14" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Certified POSP
                  </span>
                </div>
                <p className="pb-brand-sub">
                  PBPartners is a brand of <strong>Policybazaar Insurance Brokers Private Limited</strong>
                </p>
                <div className="pb-brand-motto">#EkRishtaBharoseKa • IRDAI Regulated Pan-India Advisory</div>
              </div>
            </div>

            <div className="pb-posp-cta-box">
              <a 
                href="https://wa.me/919937000100?text=Hello%20Surevriksha%2C%20I%20would%20like%20to%20compare%20insurance%20quotes%20via%20PBPartner%20POSP." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold pb-cta-btn"
              >
                Compare Quotes on WhatsApp →
              </a>
            </div>
          </div>

          {/* Key Trust Pillars */}
          <div className="pb-posp-pillars-grid">
            {PB_PARTNERS_INFO.highlights.map((item, idx) => (
              <div className="pb-pillar-item" key={idx}>
                <div className="pb-pillar-icon" aria-hidden="true">{item.icon}</div>
                <div className="pb-pillar-content">
                  <div className="pb-pillar-title">{item.title}</div>
                  <div className="pb-pillar-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==============================================================
            SECTION HEADER & CONTROLS
            ============================================================== */}
        <div className="partners-header" style={{ marginTop: '2.5rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 0.5rem auto' }}>
            Empanelled Partners &amp; Direct Tie-Ups
          </div>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--green-deeper)', textAlign: 'center', margin: '0.25rem 0 0.5rem 0' }}>
            Compare &amp; Buy from India&apos;s <span style={{ color: 'var(--gold-dark)' }}>Top 40+ Insurers Online</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', maxWidth: '720px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Through Policybazaar&apos;s PBPartner network, we bring you transparent premium comparisons, official insurer discounts, and dedicated claim assistance across India&apos;s top insurance companies.
          </p>

          {/* Filter Bar & View Toggle */}
          <div className="partner-controls-wrapper">
            <div className="partner-filter-pills" role="tablist" aria-label="Insurance partner categories">
              <button 
                type="button"
                role="tab"
                aria-selected={activeCategory === 'all'}
                className={`partner-pill-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Partners ({INSURER_PARTNERS.length}+)
              </button>
              <button 
                type="button"
                role="tab"
                aria-selected={activeCategory === 'health'}
                className={`partner-pill-btn ${activeCategory === 'health' ? 'active' : ''}`}
                onClick={() => setActiveCategory('health')}
              >
                🏥 Health Insurance
              </button>
              <button 
                type="button"
                role="tab"
                aria-selected={activeCategory === 'life'}
                className={`partner-pill-btn ${activeCategory === 'life' ? 'active' : ''}`}
                onClick={() => setActiveCategory('life')}
              >
                🛡️ Life &amp; Term
              </button>
              <button 
                type="button"
                role="tab"
                aria-selected={activeCategory === 'motor'}
                className={`partner-pill-btn ${activeCategory === 'motor' ? 'active' : ''}`}
                onClick={() => setActiveCategory('motor')}
              >
                🚗 Motor &amp; General
              </button>
              <button 
                type="button"
                role="tab"
                aria-selected={activeCategory === 'banks'}
                className={`partner-pill-btn ${activeCategory === 'banks' ? 'active' : ''}`}
                onClick={() => setActiveCategory('banks')}
              >
                🏦 Banks &amp; Lending
              </button>
            </div>

            {/* Toggle between Marquee and Grid */}
            <div className="view-mode-toggle">
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'marquee' ? 'active' : ''}`}
                onClick={() => setViewMode('marquee')}
                title="Continuous Flowing View"
              >
                ⚡ Live Stream
              </button>
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Interactive Cards Grid"
              >
                🔲 All Logos Grid ({INSURER_PARTNERS.length})
              </button>
            </div>
          </div>
        </div>

        {/* ==============================================================
            VIEW MODE 1: DUAL-STREAM INFINITE MARQUEE WITH REAL LOGOS
            ============================================================== */}
        {viewMode === 'marquee' && (
          <div className="marquee-experience">
            {/* Stream 1: Health & Life Insurers */}
            {(activeCategory === 'all' || activeCategory === 'health' || activeCategory === 'life') && (
              <div className="marquee-block">
                <div className="marquee-row-label">
                  <span className="mrl-badge health-life-badge">Health &amp; Life</span> 
                  Top Health &amp; Term Life Insurers (LIC, HDFC Life, Star Health, Care, Niva Bupa &amp; more)
                </div>
                <div className="marquee-wrapper">
                  <div className="marquee-track">
                    {row1Partners.map((partner, index) => (
                      <div 
                        className="partner-card-tile" 
                        title={`${partner.name} - ${partner.tag}`} 
                        key={`ins-r1-${index}`}
                      >
                        <div className="pct-inner">
                          <img 
                            src={partner.img} 
                            alt={`${partner.name} logo`} 
                            className="pct-img"
                            loading="lazy" 
                          />
                        </div>
                        <span className="pct-tag">{partner.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Stream 2: Motor, General Insurers & Banks */}
            {(activeCategory === 'all' || activeCategory === 'motor' || activeCategory === 'general' || activeCategory === 'banks') && (
              <div className="marquee-block" style={{ marginTop: '1.25rem' }}>
                <div className="marquee-row-label">
                  <span className="mrl-badge general-badge">Motor &amp; General</span> 
                  Top Motor, Commercial Insurers &amp; Lending Partners (HDFC ERGO, ICICI Lombard, Tata AIG, Go Digit &amp; Banks)
                </div>
                <div className="marquee-wrapper">
                  <div className="marquee-track marquee-track-reverse">
                    {row2Partners.map((partner, index) => (
                      <div 
                        className={`partner-card-tile ${partner.isBank ? 'bank-card-tile' : ''}`} 
                        title={`${partner.name} - ${partner.tag}`} 
                        key={`ins-r2-${index}`}
                      >
                        <div className="pct-inner">
                          {partner.img ? (
                            <img 
                              src={partner.img} 
                              alt={`${partner.name} logo`} 
                              className="pct-img"
                              loading="lazy" 
                            />
                          ) : (
                            <div className="pct-bank-text">
                              <span className="pbt-icon">🏦</span>
                              <span className="pbt-name">{partner.short}</span>
                            </div>
                          )}
                        </div>
                        <span className="pct-tag">{partner.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==============================================================
            VIEW MODE 2: INTERACTIVE LOGO GRID (COMPARE & CHOOSE)
            ============================================================== */}
        {viewMode === 'grid' && (
          <div className="insurer-grid-experience reveal">
            <div className="ig-search-bar">
              <input
                type="text"
                placeholder="Search insurer name (e.g. HDFC, Star Health, Care, LIC, Digit)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ig-search-input"
                aria-label="Search insurer partners"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  className="ig-search-clear"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="ig-grid-container">
              {filteredInsurers.map((partner) => (
                <a 
                  key={partner.id} 
                  href={`/contact?service=insurance&insurer=${encodeURIComponent(partner.short)}`}
                  className="ig-card"
                  title={`Get best quote for ${partner.name}`}
                >
                  <div className="ig-card-img-wrap">
                    <img 
                      src={partner.img} 
                      alt={partner.name} 
                      className="ig-card-img" 
                      loading="lazy" 
                    />
                  </div>
                  <div className="ig-card-info">
                    <div className="ig-card-name">{partner.short}</div>
                    <div className="ig-card-tag">{partner.tag}</div>
                  </div>
                  <div className="ig-card-hover-action">
                    <span>Compare Quote →</span>
                  </div>
                </a>
              ))}
            </div>

            {filteredInsurers.length === 0 && (
              <div className="ig-empty-state">
                <p>No insurer found matching &quot;{searchQuery}&quot;.</p>
                <button 
                  type="button" 
                  className="btn btn-sm btn-gold" 
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        )}

        {/* Trust Badges Strip */}
        <div className="partner-trust-strip">
          <div className="pts-item">
            <span className="pts-check">✓</span>
            <span><strong>Verified PBPartner POSP</strong> (Policybazaar Network)</span>
          </div>
          <div className="pts-item">
            <span className="pts-check">✓</span>
            <span><strong>100% IRDAI Compliant</strong> &amp; Zero Markup Guarantee</span>
          </div>
          <div className="pts-item">
            <span className="pts-check">✓</span>
            <span><strong>15,000+ Cashless Hospitals</strong> &amp; 10,000+ Garages</span>
          </div>
          <div className="pts-item">
            <span className="pts-check">✓</span>
            <span><strong>Dedicated Claim Desk</strong> &amp; Instant Issuance</span>
          </div>
        </div>

      </div>
    </section>
  );
}
