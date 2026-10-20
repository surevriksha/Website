import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../components/PartnerMarquee';
import ServiceModal from '../components/ServiceModal';
import { ALL_SERVICES, SERVICE_CATEGORIES, SERVICE_PERSONAS } from '../data/servicesData';
import { BLOG_POSTS } from '../data/blogData';

function StatCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const step = target / (duration / 16);
        const t = setInterval(() => {
          start = Math.min(start + step, target);
          setCount(Math.floor(start));
          if (start >= target) clearInterval(t);
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const [serviceSearch, setServiceSearch] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  // Filtered services for the landing page
  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service) => {
      // Persona filtering takes precedence if selected
      if (selectedPersona) {
        const matchesPersona = selectedPersona.recommendedIds.includes(service.id);
        const q = serviceSearch.toLowerCase().trim();
        const matchesSearch =
          !q ||
          service.title.toLowerCase().includes(q) ||
          service.desc.toLowerCase().includes(q) ||
          service.simpleExplain.toLowerCase().includes(q) ||
          service.features.some((f) => f.toLowerCase().includes(q));
        return matchesPersona && matchesSearch;
      }

      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const q = serviceSearch.toLowerCase().trim();
      const matchesSearch =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.desc.toLowerCase().includes(q) ||
        service.simpleExplain.toLowerCase().includes(q) ||
        service.features.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, selectedPersona, serviceSearch]);

  const latestPosts = useMemo(() => BLOG_POSTS.slice(0, 3), []);

  const faqs = [
    {
      q: "Why choose SureVriksha over standard online aggregators or agents?",
      a: "Unlike generic aggregator portals that pass your number to dozens of telecallers, SureVriksha assigns you a dedicated IRDAI-certified financial advisor. We compare policies across 30+ top insurers with zero commission bias, handle your paperwork end-to-end, and stand by your side physically and digitally during claim settlements."
    },
    {
      q: "How does SureVriksha help with PMEGP & Mudra loans with government subsidy?",
      a: "We assist entrepreneurs and MSMEs in securing collateral-free Mudra loans (up to ₹20 Lakhs) and PMEGP project loans (up to ₹50 Lakhs) with 15% to 35% capital margin subsidies. We prepare bank-grade Detailed Project Reports (DPR), CMA data, and liaise with partner banks and DIC/KVIC portals for smooth sanction."
    },
    {
      q: "What GST, ITR, and corporate legal services do you offer?",
      a: "We provide complete business lifecycle support: 3-day GST registration, monthly GSTR-1 and GSTR-3B filings, input tax credit (ITC) reconciliation, company/LLP incorporation, trademark filing, PF/ESIC payroll filings, and annual ITR filing for salaried, business, and NRI taxpayers."
    },
    {
      q: "Can NRIs buy insurance and manage Indian tax filings through SureVriksha?",
      a: "Yes. Our dedicated Global NRI Desk assists non-resident Indians in UAE, USA, UK, Singapore, and Australia with high-value term life insurance, cashless healthcare for parents in India, NRE/NRO tax returns, and Lower TDS Certificates (Form 13) for property sales."
    },
    {
      q: "How do I get GEM Portal OEM registration and QCI vendor assessment?",
      a: "SureVriksha handles end-to-end Government e-Marketplace (GEM) seller onboarding, OEM dashboard approvals, QCI vendor assessment documentation, product catalogue publishing, and government tender bidding assistance."
    },
    {
      q: "Are government certificates (CSC Jana Seva Kendra) processed online?",
      a: "Yes. You can apply for caste, residence, income, legal heir, and solvency certificates, as well as PAN corrections and passport appointments completely online without standing in long government office queues."
    }
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-h1">
        <div className="hero-decor" aria-hidden="true">
          <div className="hero-decor-circle hdc-1"></div>
          <div className="hero-decor-circle hdc-2"></div>
          <div className="hero-decor-circle hdc-3"></div>
          <div className="hero-decor-circle hdc-4"></div>
          <div className="hero-dots"></div>
        </div>
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <div className="eyebrow-line"></div>
                <span className="eyebrow-text">Trusted by 2,000+ Indian Families &amp; Businesses</span>
              </div>
              <h1 className="hero-h1" id="hero-h1">
                Insurance, Wealth, Tax &amp;
                <span className="line-break"><span className="gold-accent">Govt Services</span> Under One Roof</span>
              </h1>
              <p className="hero-desc">
                From protecting your health &amp; family with 30+ top insurers to business loans, GST, ITR, company setup, and CSC government desk — expert advisory built on trust and transparency.
              </p>
              <div className="hero-ctas">
                <Link to="/contact" className="btn btn-gold btn-lg">Get Free Consultation</Link>
                <a href="#services-h" className="btn btn-ghost btn-lg">Explore 26+ Services ↓</a>
              </div>
              <div className="hero-proof">
                <div className="hero-proof-item">
                  <div className="hero-proof-num">
                    <StatCounter target={2000} suffix="+" />
                  </div>
                  <div className="hero-proof-label">Happy Families</div>
                </div>
                <div className="hero-proof-item">
                  <div className="hero-proof-num">
                    <StatCounter target={98} suffix="%" />
                  </div>
                  <div className="hero-proof-label">Claims Settled</div>
                </div>
                <div className="hero-proof-item">
                  <div className="hero-proof-num">
                    <StatCounter target={10} suffix="+" />
                  </div>
                  <div className="hero-proof-label">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-card">
                <div className="hvc-header">
                  <img src="/images/logo.png" alt="SureVriksha Logo" className="hvc-logo" />
                  <div>
                    <div className="hvc-brand-name">SureVriksha</div>
                    <div className="hvc-brand-sub">Advisory &amp; Services</div>
                  </div>
                </div>
                <div className="hvc-stats">
                  <div className="hvc-stat"><div className="hvc-stat-num">2K+</div><div className="hvc-stat-lbl">Clients</div></div>
                  <div className="hvc-stat"><div className="hvc-stat-num">30+</div><div className="hvc-stat-lbl">Insurers</div></div>
                  <div className="hvc-stat"><div className="hvc-stat-num">98%</div><div className="hvc-stat-lbl">Claims</div></div>
                </div>
                <div className="hvc-rating">
                  <div>
                    <div className="hvc-stars">★★★★★</div>
                    <div className="hvc-rating-text">4.9 / 5 Rating</div>
                  </div>
                  <div className="hvc-rating-sub">from 500+ verified client reviews</div>
                </div>
                <div className="hvc-badge">
                  <div className="hvc-badge-dot"></div>
                  Verified &amp; Certified PBPartner POSP • IRDAI Regulated • Est. 2014
                </div>
              </div>
              <div className="hero-float hf-1"><span className="float-icon">🏆</span>Top Advisory 2026</div>
              <div className="hero-float hf-2"><span className="float-icon">✅</span>Claim Settled in 3 Days</div>
              <div className="hero-float hf-3"><span className="float-icon">⚡</span>Same-Day GST / Tax Help</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar" role="list" aria-label="Trust indicators">
        <div className="trust-bar-inner">
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">🤝</span> Verified PBPartner POSP (Policybazaar)</div>
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">⭐</span> 4.9★ Google Rating (500+ Reviews)</div>
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">🛡️</span> 40+ Empanelled Insurers &amp; 10+ Banks</div>
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">⚡</span> 100% Dedicated Claim Support</div>
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">💼</span> 10+ Years Pan-India Advisory</div>
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">🌍</span> Zero Markup Guarantee</div>
        </div>
      </div>

      {/* PARTNERS MARQUEE WITH REAL LOGOS */}
      <PartnerMarquee />

      {/* STATS SECTION */}
      <section className="stats-section" aria-label="Statistics">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Our Numbers Speak</div>
            <div className="gold-divider"><span>a decade of proven trust</span></div>
          </div>
          <div className="stats-grid">
            <div className="stat-card reveal">
              <div className="stat-icon-wrap">😊</div>
              <div className="stat-number">
                <StatCounter target={2000} suffix="+" />
              </div>
              <div className="stat-label">Happy Families</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-icon-wrap">📋</div>
              <div className="stat-number">
                <StatCounter target={5000} suffix="+" />
              </div>
              <div className="stat-label">Policies &amp; Tax Filings</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-icon-wrap">🏆</div>
              <div className="stat-number">
                <StatCounter target={98} suffix="%" />
              </div>
              <div className="stat-label">Claim Settlement Ratio</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-icon-wrap">⭐</div>
              <div className="stat-number">
                <StatCounter target={10} suffix="+" />
              </div>
              <div className="stat-label">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE SERVICES PORTFOLIO (ALL 26+ SERVICES VISIBLE & SEARCHABLE) */}
      <section className="services-section" aria-labelledby="services-h" id="services-h">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Complete Service Ecosystem</div>
            <h2>
              Everything You Need,<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>Under One Trusted Roof</em>
            </h2>
            <p className="section-desc">
              Explore our complete suite of 26+ insurance, wealth, corporate, tax, and citizen services. Filter by category, click your profile, or search any service instantly.
            </p>
          </div>

          {/* Interactive Persona Matchmaker ("Aap Kiske Liye Dekh Rahe Hain?") */}
          <div className="persona-matchmaker-card reveal">
            <div className="pmc-header">
              <span className="pmc-badge">🎯 INTERACTIVE SOLUTION FINDER</span>
              <h3>Aap Kiske Liye Dekh Rahe Hain? (Click who you are to see your exact solutions)</h3>
              <p>Confused by 26+ services? Choose your profile below to see your customized roadmap:</p>
            </div>
            <div className="persona-grid">
              {SERVICE_PERSONAS.map((persona) => {
                const isSelected = selectedPersona?.id === persona.id;
                return (
                  <button
                    key={persona.id}
                    type="button"
                    className={`persona-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedPersona(null);
                      } else {
                        setSelectedPersona(persona);
                        setActiveCategory('all');
                      }
                    }}
                  >
                    <div className="persona-btn-title">{persona.title}</div>
                    <div className="persona-btn-tagline">{persona.tagline}</div>
                    <div className="persona-btn-status">
                      {isSelected ? '✓ Curated Plan Selected' : 'Tap to View Top Solutions →'}
                    </div>
                  </button>
                );
              })}
            </div>
            {selectedPersona && (
              <div className="persona-active-indicator">
                <span>Showing top recommended services for: <strong>{selectedPersona.short}</strong></span>
                <button
                  type="button"
                  className="btn-persona-reset"
                  onClick={() => setSelectedPersona(null)}
                >
                  ✕ Show All 26+ Services
                </button>
              </div>
            )}
          </div>

          {/* Interactive Search & Filter Controls */}
          <div className="service-filter-hub reveal">
            <div className="service-search-bar">
              <span className="ss-icon" aria-hidden="true">🔍</span>
              <input
                type="text"
                placeholder="Search any service: e.g. Health, Mudra Loan, GST, GEM OEM, Passport, Trademark..."
                value={serviceSearch}
                onChange={(e) => setServiceSearch(e.target.value)}
                className="service-search-input"
                aria-label="Search all services"
              />
              {serviceSearch && (
                <button
                  type="button"
                  className="ss-clear-btn"
                  onClick={() => setServiceSearch('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="tab-buttons" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`tab-btn ${activeCategory === cat.id && !selectedPersona ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedPersona(null);
                  }}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Result Header */}
          <div className="services-count-bar reveal">
            <span>
              Showing <strong>{filteredServices.length}</strong> of <strong>{ALL_SERVICES.length}</strong> services
              {selectedPersona && ` curated for ${selectedPersona.short}`}
              {!selectedPersona && activeCategory !== 'all' && ` in ${SERVICE_CATEGORIES.find(c => c.id === activeCategory)?.label}`}
              {serviceSearch && ` matching "${serviceSearch}"`}
            </span>
            {(selectedPersona || serviceSearch || activeCategory !== 'all') && (
              <button
                type="button"
                className="reset-all-link"
                onClick={() => {
                  setSelectedPersona(null);
                  setActiveCategory('all');
                  setServiceSearch('');
                }}
              >
                Reset to View All
              </button>
            )}
          </div>

          {/* Grid of All Services */}
          <div className="services-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-card reveal" id={`card-${service.id}`}>
                <div className="service-card-top">
                  <div className="service-icon-box" style={{ background: service.gradient }}>
                    {service.icon}
                  </div>
                  {service.badge && (
                    <span className="service-badge-pill">{service.badge}</span>
                  )}
                </div>

                <div className="service-cat-tag">{service.categoryLabel}</div>
                <h3 className="service-card-h3">{service.title}</h3>

                {/* Plain Words Meaning Callout */}
                <div className="service-simple-box">
                  <div className="ssb-label">💡 In Plain Words (Kya Hai):</div>
                  <div className="ssb-text">{service.simpleExplain}</div>
                </div>

                {/* Audience & Turnaround Quick Chips */}
                <div className="service-meta-row">
                  <div className="smr-item">
                    <span className="smr-icon">👥</span>
                    <span className="smr-txt">{service.forWhom}</span>
                  </div>
                  <div className="smr-item smr-time">
                    <span className="smr-icon">⏱️</span>
                    <span className="smr-txt">{service.turnaround}</span>
                  </div>
                </div>

                <div className="service-features-list">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="sf-item">
                      <span className="sf-check">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card-actions">
                  <button
                    type="button"
                    className="btn-explain-service"
                    onClick={() => setSelectedServiceModal(service)}
                  >
                    💡 Quick Overview
                  </button>
                  <Link to={service.link} className="service-arrow">
                    Full Details <span>→</span>
                  </Link>
                  <a
                    href={`https://wa.me/919583425025?text=Hello%20SureVriksha%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.%20Please%20share%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-quick-wa"
                    aria-label={`Inquire about ${service.title} on WhatsApp`}
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="blog-empty-state" style={{ marginTop: '2rem' }}>
              <div className="bes-icon">🔍</div>
              <h3>No matching service found</h3>
              <p>Try searching for words like &ldquo;health&rdquo;, &ldquo;GST&rdquo;, &ldquo;loan&rdquo;, or &ldquo;passport&rdquo;.</p>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setServiceSearch('');
                  setActiveCategory('all');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}

          <div className="text-center reveal" style={{ marginTop: '3.5rem' }}>
            <Link to="/services?tab=all" className="btn btn-primary btn-lg">
              Explore Complete In-Depth Documentation →
            </Link>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE COMBO OFFERS */}
      <section className="offers-section" aria-labelledby="offers-h" style={{ padding: '6.5rem 0', background: 'linear-gradient(180deg, var(--white) 0%, var(--bg) 100%)', position: 'relative', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Limited-Time Special Deals</div>
            <h2 id="offers-h">Save More With Our<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>Exclusive Combo Offers</em></h2>
            <p className="section-desc">We handle all your financial and government work. Get the most reliable rates with our special compliance &amp; protection combos.</p>
          </div>

          <div className="offers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Offer 1 */}
            <div className="offer-card reveal" style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'var(--transition)', boxShadow: 'var(--shadow-sm)', position: 'relative', overflow: 'hidden' }}>
              <div className="offer-badge" style={{ position: 'absolute', top: '22px', right: '-34px', background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', color: 'var(--green-deeper)', padding: '0.4rem 3rem', transform: 'rotate(45deg)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>10% OFF</div>
              <div>
                <div className="offer-icon" style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>🎁</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '0.75rem' }}>ITR + Insurance Deal</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>File your Income Tax Return (ITR) with us and get a <strong>flat 10% discount</strong> on your next Insurance policy premium (Health, Term, or Motor).</p>
              </div>
              <Link to="/contact?service=itr&message=I%20want%20to%20file%20my%20ITR%20and%20avail%20the%2010%25%20Insurance%20discount%20combo." className="btn btn-gold" style={{ justifyContent: 'center' }}>Claim Combo Deal →</Link>
            </div>

            {/* Offer 2 */}
            <div className="offer-card reveal" style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'var(--transition)', boxShadow: 'var(--shadow-sm)' }}>
              <div>
                <div className="offer-icon" style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>🏢</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '0.75rem' }}>Startup Launchpack</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>Incorporate your Company (Pvt Ltd/LLP) with us and get <strong>Udyam/MSME Certificate + GST Registration completely FREE</strong>.</p>
              </div>
              <Link to="/contact?service=company&message=I%20want%20the%20Startup%20Launchpack%20combo%20(Company%20Registration%20%2B%20Free%20MSME%20%26%20GST)." className="btn btn-primary" style={{ justifyContent: 'center' }}>Claim Combo Deal →</Link>
            </div>

            {/* Offer 3 */}
            <div className="offer-card reveal" style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'var(--transition)', boxShadow: 'var(--shadow-sm)' }}>
              <div>
                <div className="offer-icon" style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>🧾</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '0.75rem' }}>GST Compliance Bundle</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>Start your compliance cycle stress-free. Get fresh GST registration + <strong>3 months of monthly GSTR filings at 20% off</strong>.</p>
              </div>
              <Link to="/contact?service=gst&message=I%20want%20to%20apply%20for%20the%20GST%20Compliance%20Bundle%20(3-Month%20Filing%20discount)." className="btn btn-primary" style={{ justifyContent: 'center' }}>Claim Combo Deal →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section" aria-labelledby="why-h">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <div className="why-label reveal">Why SureVriksha</div>
              <h2 id="why-h" className="reveal">We Don&apos;t Just Sell Policies —<br /><span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>We Stand With You</span></h2>
              <p className="reveal">For over a decade, we&apos;ve built our entire reputation on one thing: doing right by our clients. No pushy sales, no confusing jargon — just honest advice and genuine care.</p>
              <ul className="why-list">
                <li className="why-item reveal">
                  <div className="why-icon">🎯</div>
                  <div><strong>Completely Unbiased Advice</strong><p>We compare 30+ insurers to find what&apos;s best for you — not what earns us the highest commission.</p></div>
                </li>
                <li className="why-item reveal">
                  <div className="why-icon">⚡</div>
                  <div><strong>Lightning-Fast Claims Support</strong><p>When you need us most, we&apos;re there. Claims initiated same day, guided step-by-step till settlement.</p></div>
                </li>
                <li className="why-item reveal">
                  <div className="why-icon">🔍</div>
                  <div><strong>Crystal-Clear Transparency</strong><p>No hidden charges. No fine-print surprises. We explain everything so you decide with full confidence.</p></div>
                </li>
                <li className="why-item reveal">
                  <div className="why-icon">📞</div>
                  <div><strong>Always Reachable, Always Caring</strong><p>365 days a year. One WhatsApp message and we respond — whether it&apos;s a renewal or an emergency.</p></div>
                </li>
              </ul>
              <div className="reveal" style={{ marginTop: '2rem' }}>
                <Link to="/about" className="btn btn-primary">Our Story →</Link>
              </div>
            </div>
            <div className="why-visual reveal">
              <div className="why-big-card">
                <div className="wbc-logo-row">
                  <img src="/images/logo.png" alt="SureVriksha" className="wbc-logo" />
                  <div>
                    <div className="wbc-brand">SureVriksha</div>
                    <div className="wbc-sub">Financial Advisory</div>
                  </div>
                </div>
                <div className="wbc-grid">
                  <div className="wbc-stat"><div className="wbc-num">2K+</div><div className="wbc-lbl">Families Protected</div></div>
                  <div className="wbc-stat"><div className="wbc-num">10+</div><div className="wbc-lbl">Years Trusted</div></div>
                  <div className="wbc-stat"><div className="wbc-num">30+</div><div className="wbc-lbl">Insurers</div></div>
                </div>
                <div className="wbc-progress">
                  <div className="wbc-progress-label"><span>Client Satisfaction</span><span>98%</span></div>
                  <div className="wbc-progress-bar"><div className="wbc-progress-fill" style={{ width: '98%' }}></div></div>
                </div>
                <div className="wbc-progress">
                  <div className="wbc-progress-label"><span>Claims Settled</span><span>98%</span></div>
                  <div className="wbc-progress-bar"><div className="wbc-progress-fill" style={{ width: '98%', animationDelay: '0.3s' }}></div></div>
                </div>
                <div className="wbc-badges" style={{ marginTop: '1.5rem' }}>
                  <div className="wbc-badge-chip">✅ IRDAI Certified</div>
                  <div className="wbc-badge-chip">⭐ 4.9 Rated</div>
                  <div className="wbc-badge-chip">🏆 Top Advisor</div>
                </div>
              </div>
              <div className="why-fc wfc-a"><span className="why-fc-icon">🌟</span> Top Advisor 2026</div>
              <div className="why-fc wfc-b"><span className="why-fc-icon">💚</span> Claim in 3 Days</div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS & BLOG SECTION */}
      <section className="home-blog-section" aria-labelledby="blog-h" style={{ padding: '5.5rem 0', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Knowledge Center &amp; Guides</div>
            <h2 id="blog-h">
              Latest Insights &amp;<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>Expert Financial Guides</em>
            </h2>
            <p className="section-desc">Practical advice on health cover, MSME subsidies, GST updates, and wealth planning.</p>
          </div>

          <div className="blog-grid" style={{ marginBottom: '2.5rem' }}>
            {latestPosts.map((post) => (
              <article key={post.id} className="blog-card reveal">
                <div className="bc-top">
                  <span className="bc-category-tag">{post.category.toUpperCase()}</span>
                  <span className="bc-read-time">⏱️ {post.readTime}</span>
                </div>
                <h3 className="bc-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="bc-summary">{post.summary.substring(0, 130)}...</p>
                <div className="bc-divider"></div>
                <div className="bc-footer">
                  <span className="bc-date">📅 {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <Link to={`/blog/${post.slug}`} className="bc-link">Read Guide →</Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center reveal">
            <Link to="/blog" className="btn btn-outline-gold">View All Financial Guides &amp; Insights →</Link>
          </div>
        </div>
      </section>

      {/* AEO / GEO / VOICE SEARCH FAQ SECTION */}
      <section className="faq-section" aria-labelledby="faq-h" style={{ padding: '5.5rem 0', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header reveal">
            <div className="section-tag">Direct Answers &amp; Queries</div>
            <h2 id="faq-h">
              Frequently Asked Questions<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>Verified Financial Answers</em>
            </h2>
            <p className="section-desc">Everything you need to know about our advisory services, claim settlement, and business filings.</p>
          </div>

          <div className="faq-accordion reveal">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span className="faq-toggle-icon">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" aria-labelledby="test-h">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Client Stories</div>
            <h2 id="test-h">Real People. <em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>Real Protection.</em></h2>
            <p className="section-desc">Every review is a family we helped protect. Every story is a trust we earned.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;SureVriksha got our family the right health plan. When Papa was hospitalized, the cashless claim was cleared in hours. Their team personally guided us through every step. Exceptional service!&rdquo;</p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: '#0F9D58' }}>RK</div>
                <div><span className="t-name">Rajesh Kumar</span><span className="t-location">Bhubaneswar, Odisha</span></div>
              </div>
            </div>
            <div className="testimonial-card featured reveal">
              <div className="feat-badge">⭐ Most Helpful Review</div>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;As a business owner I needed commercial insurance and investment planning together. SureVriksha gave me a complete, tailored solution I couldn&apos;t find anywhere else. The trust and expertise are unmatched.&rdquo;</p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: '#1a73e8' }}>PS</div>
                <div><span className="t-name">Priya Sharma</span><span className="t-location">Mumbai, Maharashtra</span></div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;The tax planning advice alone saved me ₹80,000 last year. Plus they got me perfect term insurance at half the price I expected. Professional, honest, and genuinely caring. Highly recommend!&rdquo;</p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: '#e91e63' }}>AM</div>
                <div><span className="t-name">Amit Mohanty</span><span className="t-location">Cuttack, Odisha</span></div>
              </div>
            </div>
          </div>
          <div className="text-center reveal" style={{ marginTop: '3rem' }}>
            <Link to="/reviews" className="btn btn-outline-gold">Read All 500+ Verified Reviews →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="cta-h">
        <div className="cta-orb" aria-hidden="true"></div>
        <div className="cta-orb2" aria-hidden="true"></div>
        <div className="container">
          <div className="cta-content reveal">
            <div className="cta-eyebrow">
              <div className="cta-eyebrow-line"></div>
              <div className="cta-eyebrow-text">Start Today</div>
              <div className="cta-eyebrow-line"></div>
            </div>
            <h2 id="cta-h">Ready to Secure<br /><em>Everything You Love?</em></h2>
            <p>Get personalized insurance, loan subsidy, and tax guidance — completely free. No obligations, no fine print surprises. Just expert guidance that puts you first.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">Book Free Consultation</Link>
              <a href="https://wa.me/919583425025?text=Hello%20SureVriksha!%20I%20need%20financial%20advice." className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a7.929 7.929 0 01-3.794-.968l-4.208 1.105 1.127-4.115A7.929 7.929 0 014.07 12c0-4.386 3.573-7.951 7.959-7.951 4.386 0 7.951 3.565 7.951 7.951 0 4.386-3.565 7.88-7.951 7.88z"/></svg>
                Chat on WhatsApp
              </a>
              <a href="tel:+919583425025" className="btn btn-ghost btn-lg">📞 Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO & Geo Footprint Info */}
      <section style={{ padding: '3rem 0', background: '#fafdf7', borderTop: '1px solid #d8e8dc' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            <p><strong>SureVriksha Financial Advisory</strong> — Head Office: Kalinga Vihar, Bhubaneswar, Odisha, 751019.</p>
            <p style={{ marginTop: '0.5rem' }}>
              IRDAI-certified insurance advisory (health, term life, commercial, motor), GST registration &amp; return filings, ITR tax audits, Mudra &amp; PMEGP loan subsidies, GEM &amp; OEM portal registrations, and CSC government certificates. Serving clients across Bhubaneswar, Cuttack, Rourkela, Berhampur, Sambalpur, all states across India, and global NRI clients.
            </p>
          </div>
        </div>
      </section>
      {/* Interactive Service Detail & Explanation Modal */}
      <ServiceModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
      />
    </main>
  );
}
