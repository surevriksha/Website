import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    const hash = location.hash;
    
    const insuranceHashes = ['#health', '#term', '#motor', '#travel', '#home', '#commercial', '#investment', '#group-insurance', '#loan-advisory'];
    const taxHashes = ['#gst', '#itr', '#company', '#msme', '#licenses', '#gem', '#oem', '#stock-audit', '#pf-esic', '#payroll-compliance', '#dsc-trademark', '#fssai-iso', '#startup-iec', '#govt-subsidies'];
    const govtHashes = ['#certificates', '#id-corrections', '#rto', '#passport-visa', '#student-desk', '#caste', '#income', '#residence', '#pan-change', '#aadhaar-change', '#voter-change', '#scholarships', '#eshram-welfare', '#utility-services'];

    if (tabParam === 'tax') {
      setActiveTab('tax-services');
    } else if (tabParam === 'govt') {
      setActiveTab('govt-services');
    } else if (tabParam === 'insurance') {
      setActiveTab('insurance-services');
    } else if (tabParam === 'all') {
      setActiveTab('all');
    } else if (insuranceHashes.includes(hash)) {
      setActiveTab('insurance-services');
    } else if (taxHashes.includes(hash)) {
      setActiveTab('tax-services');
    } else if (govtHashes.includes(hash)) {
      setActiveTab('govt-services');
    } else {
      setActiveTab('all');
    }

    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [searchParams, location.hash]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams(
      tabId === 'all'
        ? { tab: 'all' }
        : tabId === 'tax-services' 
        ? { tab: 'tax' } 
        : tabId === 'govt-services' 
        ? { tab: 'govt' } 
        : { tab: 'insurance' }
    );
  };

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-eyebrow">Our Complete Services Portfolio</div>
        <h1>Complete Protection &amp; Compliance for<br /><em style={{ color: 'var(--gold-light)' }}>Every Chapter of Your Life &amp; Business</em></h1>
        <p>From healthcare and family protection to business loans, GST, ITR, company setup, and CSC government desk — all under one roof.</p>
        <div className="page-hero-line"></div>
      </section>

      {/* Quick Jump Bar */}
      <div className="container" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        <div className="services-quick-nav-pills" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--green-deeper)', alignSelf: 'center', marginRight: '0.5rem' }}>⚡ Quick Jump:</span>
          {[
            { label: '🏥 Health', hash: '#health', tab: 'insurance-services' },
            { label: '🛡️ Term Life', hash: '#term', tab: 'insurance-services' },
            { label: '💰 Loans & Subsidies', hash: '#loan-advisory', tab: 'insurance-services' },
            { label: '🧾 GST Filing', hash: '#gst', tab: 'tax-services' },
            { label: '📊 ITR Filing', hash: '#itr', tab: 'tax-services' },
            { label: '🏢 Company Setup', hash: '#company', tab: 'tax-services' },
            { label: '⚙️ OEM & GEM', hash: '#oem', tab: 'tax-services' },
            { label: '📜 CSC Certificates', hash: '#certificates', tab: 'govt-services' },
            { label: '🛂 Passport & VISA', hash: '#passport-visa', tab: 'govt-services' }
          ].map((item, idx) => (
            <button
              key={idx}
              type="button"
              className="quick-jump-chip"
              onClick={() => {
                if (activeTab !== 'all' && activeTab !== item.tab) {
                  setActiveTab(item.tab);
                }
                setTimeout(() => {
                  const el = document.querySelector(item.hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Switching Container */}
      <div className="tab-container" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => handleTabChange('all')}
          >
            🌟 All Verticals (Complete Portfolio)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'insurance-services' ? 'active' : ''}`}
            onClick={() => handleTabChange('insurance-services')}
          >
            🛡️ Insurance &amp; Wealth
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tax-services' ? 'active' : ''}`}
            onClick={() => handleTabChange('tax-services')}
          >
            💼 Tax, Corporate &amp; Loans
          </button>
          <button 
            className={`tab-btn ${activeTab === 'govt-services' ? 'active' : ''}`}
            onClick={() => handleTabChange('govt-services')}
          >
            📜 Govt &amp; Student Services
          </button>
        </div>
      </div>

      {/* INSURANCE & WEALTH TAB PANEL */}
      {(activeTab === 'all' || activeTab === 'insurance-services') && (
        <div id="insurance-services" className="tab-panel active">
          {activeTab === 'all' && (
            <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
              <div className="vertical-section-header">
                <span className="vsh-badge">VERTICAL 1 OF 3</span>
                <h2>🛡️ Insurance, Risk Protection &amp; Wealth Planning</h2>
                <p>30+ Insurer partners, cashless hospital networks, zero-commission bias, and lifetime claim assistance.</p>
              </div>
            </div>
          )}
          {/* HEALTH */}
          <section className="service-detail-section" id="health">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Health Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)' }}>🏥</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Never Let a Medical Bill<br /><em style={{ color: 'var(--gold-dark)' }}>Break Your Family</em></h2>
                  <p className="reveal">Medical emergencies are unpredictable. But financial ruin from healthcare costs doesn't have to be. We help you choose the right health insurance — cashless, comprehensive, and genuinely protective.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Cashless treatment at 10,000+ network hospitals</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Pre & post-hospitalization expenses covered</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>No-claim bonus up to 50% of sum insured</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Critical illness and maternity cover available</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Annual free health check-ups included</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Tax deduction under Section 80D</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Everyone — individuals, families, senior citizens, and the self-employed. Especially those without employer-provided group health cover.</p></div>
                  <Link to="/contact?service=health" className="btn btn-gold reveal">Get Health Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🏥</div>
                  <div className="sd-visual-title">Health Insurance</div>
                  <div className="sd-visual-sub">Comprehensive Family Coverage</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Individual Plans</div>
                    <div className="sd-chip">Family Floater</div>
                    <div className="sd-chip">Senior Citizen</div>
                    <div className="sd-chip">Super Top-up</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TERM LIFE */}
          <section className="service-detail-section bg-alt" id="term">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Term Life Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e3f2fd,#bbdefb)' }}>🛡️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Give Your Family<br /><em style={{ color: 'var(--gold-dark)' }}>A Safety Net for Life</em></h2>
                  <p className="reveal">If something were to happen to you, would your family be able to maintain their lifestyle? Term insurance ensures the answer is always yes — ₹1 Crore cover for as little as ₹500/month.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Cover up to ₹10 Crore at minimal premiums</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Tax-free death benefit paid to nominees</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Return of premium option available</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Critical illness and accidental death riders</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Waiver of premium on permanent disability</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Tax benefit under Section 80C</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Every earning individual with dependents — spouse, children, or parents. Also essential for home loan borrowers. Start young for the lowest premiums.</p></div>
                  <Link to="/contact?service=term" className="btn btn-gold reveal">Get Term Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🛡️</div>
                  <div className="sd-visual-title">Term Life Insurance</div>
                  <div className="sd-visual-sub">Maximum Protection, Minimal Cost</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">₹50L – ₹10Cr Cover</div>
                    <div className="sd-chip">10–40 Yr Tenure</div>
                    <div className="sd-chip">99%+ Claim Ratio</div>
                    <div className="sd-chip">Instant Online</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MOTOR */}
          <section className="service-detail-section" id="motor">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Motor Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fff8e1,#ffecb3)' }}>🚗</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Drive With<br /><em style={{ color: 'var(--gold-dark)' }}>Total Confidence</em></h2>
                  <p className="reveal">An accident can happen in seconds. Make sure when it does, your vehicle, your finances, and third parties are fully protected — with the right comprehensive motor insurance plan.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Comprehensive cover: own damage + third party</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Cashless repairs at 5,000+ garages across India</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Zero depreciation add-on for full value claims</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>24/7 roadside assistance and towing</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Engine protection and consumables cover</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>NCB (No Claim Bonus) protection add-on</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>All vehicle owners in India — third-party cover is legally mandatory. Comprehensive cover is strongly recommended for any vehicle under 10 years old.</p></div>
                  <Link to="/contact?service=motor" className="btn btn-gold reveal">Get Motor Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🚗</div>
                  <div className="sd-visual-title">Motor Insurance</div>
                  <div className="sd-visual-sub">Car & Bike Coverage</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Car Insurance</div>
                    <div className="sd-chip">Bike Insurance</div>
                    <div className="sd-chip">Commercial Vehicle</div>
                    <div className="sd-chip">Instant Policy</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TRAVEL */}
          <section className="service-detail-section bg-alt" id="travel">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Travel Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fce4ec,#f8bbd0)' }}>✈️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Explore the World<br /><em style={{ color: 'var(--gold-dark)' }}>Worry-Free</em></h2>
                  <p className="reveal">From a medical emergency in Europe to a cancelled flight in Bangkok — travel insurance ensures that no unexpected event can derail your journey or drain your savings.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Medical emergency coverage worldwide</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Trip cancellation and interruption protection</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Baggage loss and flight delay compensation</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Emergency evacuation and repatriation</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Passport and document loss cover</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Schengen visa compliant policies available</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>International travelers, students studying abroad, frequent business flyers, and families on vacation. Schengen visa applicants must have travel insurance.</p></div>
                  <Link to="/contact?service=travel" className="btn btn-gold reveal">Get Travel Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">✈️</div>
                  <div className="sd-visual-title">Travel Insurance</div>
                  <div className="sd-visual-sub">Domestic & International Coverage</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Single Trip</div>
                    <div className="sd-chip">Annual Multi-Trip</div>
                    <div className="sd-chip">Student Travel</div>
                    <div className="sd-chip">Senior Friendly</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HOME */}
          <section className="service-detail-section" id="home">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Home Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#f3e5f5,#e1bee7)' }}>🏠</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Your Biggest Asset<br /><em style={{ color: 'var(--gold-dark)' }}>Deserves the Best Guard</em></h2>
                  <p className="reveal">Your home is more than bricks and mortar — it's your life's biggest investment. Protect it against natural disasters, fire, theft, and accidental damage with a comprehensive home insurance policy.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Structure coverage: earthquake, flood, fire, cyclone</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Contents and valuables protection</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Burglary and theft cover</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Third-party liability for visitors</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Temporary rental accommodation during repairs</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Plans starting at just ₹2,500/year</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Home owners, renters, landlords, and anyone in flood-prone, earthquake-prone, or coastal areas. Especially important if you have a home loan.</p></div>
                  <Link to="/contact?service=home" className="btn btn-gold reveal">Get Home Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🏠</div>
                  <div className="sd-visual-title">Home Insurance</div>
                  <div className="sd-visual-sub">Structure & Contents Protection</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Home Structure</div>
                    <div className="sd-chip">Contents Cover</div>
                    <div className="sd-chip">Renters Insurance</div>
                    <div className="sd-chip">Landlord Plans</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COMMERCIAL */}
          <section className="service-detail-section bg-alt" id="commercial">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Commercial Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8eaf6,#c5cae9)' }}>🏢</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Protect Your Business<br /><em style={{ color: 'var(--gold-dark)' }}>Like You Protect Your Family</em></h2>
                  <p className="reveal">Businesses face risks that personal policies can't cover. From fire to marine cargo to employee accidents — we provide complete commercial insurance tailored to your industry and scale.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Fire insurance for shops, offices & factories</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Marine cargo for goods in domestic/international transit</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Workmen Compensation (WC) policy</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Public and product liability insurance</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Group health and accident cover for employees</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>D&O and professional indemnity for corporates</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>SMEs, retailers, manufacturers, exporters, IT firms, construction companies, and any business with employees, physical assets, or goods in transit.</p></div>
                  <Link to="/contact?service=commercial" className="btn btn-gold reveal">Get Commercial Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🏢</div>
                  <div className="sd-visual-title">Commercial Insurance</div>
                  <div className="sd-visual-sub">Complete Business Risk Protection</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Fire & Allied</div>
                    <div className="sd-chip">Marine Cargo</div>
                    <div className="sd-chip">Workmen Comp</div>
                    <div className="sd-chip">Group Health</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* INVESTMENT */}
          <section className="service-detail-section" id="investment">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Investment & Tax Planning</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8f5e9,#a5d6a7)' }}>📈</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Make Your Money<br /><em style={{ color: 'var(--gold-dark)' }}>Work as Hard as You Do</em></h2>
                  <p className="reveal">Protection alone isn't enough — your money should grow too. Our certified advisors build tax-efficient investment portfolios aligned with your goals, whether that's retirement, education, or wealth creation.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>ELSS mutual funds: tax saving + wealth growth</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>SIP planning for systematic, long-term wealth</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>PPF, NPS, and fixed income advisory</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Maximize tax savings under 80C, 80D, 80CCD</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Retirement planning and annuity products</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Child education and marriage corpus planning</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Salaried professionals, business owners, and HNIs. Start a ₹5,000/month SIP today — it can become ₹1 Crore in 20 years at 12% returns.</p></div>
                  <Link to="/contact?service=investment" className="btn btn-gold reveal">Start Investment Planning →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">📈</div>
                  <div className="sd-visual-title">Investment Planning</div>
                  <div className="sd-visual-sub">Wealth Creation & Tax Savings</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Mutual Funds</div>
                    <div className="sd-chip">Tax Planning</div>
                    <div className="sd-chip">Retirement</div>
                    <div className="sd-chip">Goal Planning</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GROUP & CORPORATE INSURANCE */}
          <section className="service-detail-section bg-alt" id="group-insurance">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Group & Corporate Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e0f2f1,#b2dfdb)' }}>🏢</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Protect Your Team<br /><em style={{ color: 'var(--gold-dark)' }}>Build a Better Workplace</em></h2>
                  <p className="reveal">Your employees are your greatest asset. Group insurance policies provide comprehensive coverage at significantly lower premiums — boosting morale, retention, and compliance at the same time.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Group Health Insurance (GMC) — cashless coverage for all employees & families</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Group Term Life Insurance (GTLI) — death benefit coverage for all staff</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Group Personal Accident (GPA) — 24×7 accident coverage worldwide</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Workmen Compensation Policy — statutory liability cover for injuries at work</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Key Man Insurance — protect your business against loss of key employees</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Directors & Officers (D&O) Liability — personal asset protection for leadership</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Every company with 5+ employees, startups, MSMEs, corporates, NGOs, and factories. Group insurance is also required for many government tenders and compliance mandates.</p></div>
                  <Link to="/contact?service=group-insurance" className="btn btn-gold reveal">Get Group Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🏢</div>
                  <div className="sd-visual-title">Group Insurance</div>
                  <div className="sd-visual-sub">Complete Employee Coverage</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Group Mediclaim</div>
                    <div className="sd-chip">Group Term Life</div>
                    <div className="sd-chip">GPA Cover</div>
                    <div className="sd-chip">Key Man Policy</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* LOAN ADVISORY — COMPREHENSIVE */}
          <section className="service-detail-section" id="loan-advisory">
            <div className="container">
              <div className="sdg" style={{ gridTemplateColumns: '1fr' }}>
                <div className="sd-content" style={{ maxWidth: '100%' }}>
                  <div className="sd-eyebrow reveal">Loan Advisory, Processing & Govt Subsidies</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fff3e0,#ffe0b2)' }}>🏦</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Every Loan, Every Bank<br /><em style={{ color: 'var(--gold-dark)' }}>Best Rate + Govt Subsidy Support</em></h2>
                  <p className="reveal">From personal loans to Mudra loans to PMEGP subsidies — we have tie-ups with all major banks and NBFCs. We don't just process loans, we find the best government schemes that give you subsidies, lower interest, and collateral-free funding.</p>
                  
                  {/* Subsidy Highlight Box */}
                  <div className="reveal" style={{ background: 'linear-gradient(135deg, #e8f5e9, #fff8e1)', border: '2px solid var(--gold)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '1.5rem 0' }}>
                    <h4 style={{ color: 'var(--green-deeper)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>🎯 Government Loan Schemes & Subsidies We Help You Access</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>PMEGP Loan</strong> — Up to ₹50L with 15-35% subsidy for new manufacturing/service units</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Mudra Loan (PMMY)</strong> — Shishu (₹50K), Kishore (₹5L), Tarun (₹10L) — no collateral required</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Stand-Up India</strong> — ₹10L to ₹1Cr for SC/ST/Women entrepreneurs</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>CGTMSE</strong> — Collateral-free loans up to ₹5 Crore with govt guarantee</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>PM SVANidhi</strong> — ₹10K–₹50K for street vendors with interest subsidy</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>PMAY (Credit-Linked)</strong> — ₹2.67L interest subsidy on home loans for EWS/LIG/MIG</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>NSIC Subsidy Schemes</strong> — Raw material & marketing support for MSMEs</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>State Govt Subsidies</strong> — MPIDF, CLCSS, ZED Certification with subsidy support</span></div>
                    </div>
                  </div>

                  {/* All Loan Types */}
                  <h4 className="reveal" style={{ color: 'var(--green-deeper)', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>📋 All Types of Loans We Process</h4>
                  <div className="sd-benefits reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.5rem' }}>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Home Loan</strong> — up to ₹5 Crore, lowest rates from 8.25%</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Personal Loan</strong> — instant approval, minimal documents</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Business Loan</strong> — working capital & term loans for all businesses</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>MSME/Udyam Loan</strong> — special rates for registered MSMEs</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Education Loan</strong> — India & abroad, moratorium period included</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Loan Against Property</strong> — unlock equity from your assets</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Gold Loan</strong> — instant cash, lowest interest rates</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Vehicle/Auto Loan</strong> — new & used car, two-wheeler, commercial</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Agriculture Loan</strong> — KCC, crop loan, farm equipment financing</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Balance Transfer & Top-Up</strong> — reduce EMI or get additional funds</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Project Finance</strong> — for large capital expenditure & infra projects</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Startup Loans</strong> — Startup India SIDBI Fund & bank schemes</span></div>
                  </div>
                  
                  <div className="sd-who reveal"><h4>💡 Who Should Apply?</h4><p>Salaried employees, self-employed professionals, business owners, MSMEs, farmers, students, women entrepreneurs, SC/ST entrepreneurs, and NRIs. We compare 30+ banks & NBFCs to find your best rate and maximum subsidy eligibility.</p></div>
                  <Link to="/contact?service=loan" className="btn btn-gold reveal">Apply for Loan / Check Subsidy →</Link>
                </div>
              </div>

              {/* BANK PARTNERS LOGOS */}
              <div className="reveal" style={{ marginTop: '2.5rem' }}>
                <h4 style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Our Banking & NBFC Partners</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                  {['SBI', 'HDFC Bank', 'ICICI Bank', 'PNB', 'Bank of Baroda', 'Axis Bank', 'Kotak Mahindra', 'Union Bank', 'Canara Bank', 'Bank of India', 'Indian Bank', 'IDBI Bank', 'UCO Bank', 'Central Bank', 'Bandhan Bank', 'Federal Bank', 'IDFC First', 'Yes Bank', 'IndusInd Bank', 'Bajaj Finance', 'Tata Capital', 'L&T Finance', 'Muthoot', 'Manappuram', 'SIDBI', 'NABARD'].map((bank) => (
                    <div key={bank} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '0.6rem 1rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--green-deeper)', letterSpacing: '0.02em', whiteSpace: 'nowrap', boxShadow: 'var(--shadow-sm)' }}>
                      {bank}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* TAX & CORPORATE SERVICES TAB PANEL */}
      {(activeTab === 'all' || activeTab === 'tax-services') && (
        <div id="tax-services" className="tab-panel active">
          {activeTab === 'all' && (
            <div className="container" style={{ paddingTop: '3.5rem', paddingBottom: '1rem', borderTop: '2px dashed var(--border)' }}>
              <div className="vertical-section-header">
                <span className="vsh-badge" style={{ background: '#e0f2fe', color: '#0369a1' }}>VERTICAL 2 OF 3</span>
                <h2>💼 Tax, Corporate, MSME &amp; Loan Advisory</h2>
                <p>3-Day GST registrations, error-free ITR filings, MCA company incorporation, GEM &amp; OEM vendor setup, and PMEGP/Mudra bank subsidies.</p>
              </div>
            </div>
          )}
          {/* GST */}
          <section className="service-detail-section" id="gst">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">GST Services</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e3f2fd,#bbdefb)' }}>🧾</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Simplify Your Business<br /><em style={{ color: 'var(--gold-dark)' }}>With Stress-Free GST</em></h2>
                  <p className="reveal">Tax compliance shouldn't distract you from growing your business. We handle everything from fresh GST registrations to month-on-month return filing (GSTR-1, GSTR-3B) with accurate input tax credit (ITC) reconciliation.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Quick registration approval within 3-5 business days</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Seamless monthly & quarterly return filing (GSTR-1, GSTR-3B, GSTR-9)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Export support: Letter of Undertaking (LUT) filing</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Precise ITC reconciliation to save cash leakages</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Expert handling of GST audits, amendments, and cancellations</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Ongoing advice on GST rate revisions and compliance norms</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Any business owner with turnover exceeding the limit (₹20L/₹40L for goods/services) or doing inter-state sales.</p></div>
                  <Link to="/contact?service=gst" className="btn btn-gold reveal">Get GST Support →</Link>
                </div>
                <div className="sd-visual reveal badge-blue">
                  <div className="sd-visual-icon">🧾</div>
                  <div className="sd-visual-title">GST Compliance</div>
                  <div className="sd-visual-sub">Registrations & Return Filings</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">GST Registration</div>
                    <div className="sd-chip">Monthly Returns</div>
                    <div className="sd-chip">LUT for Exports</div>
                    <div className="sd-chip">GST Audit Support</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ITR */}
          <section className="service-detail-section bg-alt" id="itr">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Income Tax Return</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8f5e9,#a5d6a7)' }}>📊</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Maximize Your Tax Savings<br /><em style={{ color: 'var(--gold-dark)' }}>File With Experts</em></h2>
                  <p className="reveal">Don't just file your returns — optimize your taxes. Our chartered advisors review your income from salary, business, capital gains, and house property to minimize your tax liability legally and secure maximum refunds.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Accurate filing of ITR-1, ITR-2, ITR-3, and ITR-4 forms</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Double-checked computations under Old vs New Tax Regimes</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Capital gains computation from stock market, mutual funds & property</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Section 80C, 80D, 80G, and 80CCD tax deduction reviews</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Professional representation in case of tax notices or scrutiny</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Advanced tax planning and annual tax audits for business owners</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Salaried professionals, freelancers, stock market traders, NRI taxpayers, and business owners who want error-free tax filing.</p></div>
                  <Link to="/contact?service=itr" className="btn btn-gold reveal">Start ITR Filing →</Link>
                </div>
                <div className="sd-visual reveal badge-teal">
                  <div className="sd-visual-icon">📊</div>
                  <div className="sd-visual-title">ITR Filing</div>
                  <div className="sd-visual-sub">Individual & Corporate Filings</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Salaried Returns</div>
                    <div className="sd-chip">Business Tax</div>
                    <div className="sd-chip">Capital Gains</div>
                    <div className="sd-chip">Tax Auditing</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COMPANY REGISTRATION */}
          <section className="service-detail-section" id="company">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Business Registration</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8eaf6,#c5cae9)' }}>🏢</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Turn Your Vision Into Reality<br /><em style={{ color: 'var(--gold-dark)' }}>Incorporate Your Company</em></h2>
                  <p className="reveal">Give your business the credibility of a registered legal structure. From selecting the right entity type to getting your Incorporation Certificate, PAN, TAN, and DIN — we manage the entire Ministry of Corporate Affairs (MCA) process.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Complete company setup in 7-10 business days</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Incorporation Certificate (COI), PAN, TAN, and DIN included</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Setup Private Limited, LLP, One Person Company (OPC), or Partnerships</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Draft customized MoA, AoA, and LLP Agreements</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Free assistance in opening corporate bank accounts</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Complimentary MSME registration certificate with company setup</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Entrepreneurs, startup founders, partnership groups, and sole proprietors looking to raise capital, limit personal liability, or scale.</p></div>
                  <Link to="/contact?service=company" className="btn btn-gold reveal">Register Company Now →</Link>
                </div>
                <div className="sd-visual reveal badge-purple">
                  <div className="sd-visual-icon">🏢</div>
                  <div className="sd-visual-title">Company Setup</div>
                  <div className="sd-visual-sub">MCA Corporate Registrations</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Pvt Ltd Company</div>
                    <div className="sd-chip">LLP Setup</div>
                    <div className="sd-chip">OPC Registration</div>
                    <div className="sd-chip">Partnership Firm</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MSME / UDYAM */}
          <section className="service-detail-section bg-alt" id="msme">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">MSME / Udyam</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fff8e1,#ffecb3)' }}>📜</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Unlock Government Subsidies<br /><em style={{ color: 'var(--gold-dark)' }}>Get MSME Certified</em></h2>
                  <p className="reveal">The Government of India provides extensive benefits, lower interest rates, and financial protections to MSMEs. We help you obtain your Udyam Registration certificate and advise you on claiming government schemes.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Instant Udyam Registration certificate generation</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Collateral-free business loans under CGTMSE scheme</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Lower interest rates on bank loans (up to 1.5% concession)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Protection against delayed payments from corporate buyers (45-day rule)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>50% discount on Trademark and Patent registration government fees</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Concessions on electricity bills and government tender applications</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Micro, small, and medium businesses, retailers, wholesalers, manufacturers, service providers, and startups looking to avail concessions.</p></div>
                  <Link to="/contact?service=msme" className="btn btn-gold reveal">Register MSME / Udyam →</Link>
                </div>
                <div className="sd-visual reveal badge-orange">
                  <div className="sd-visual-icon">📜</div>
                  <div className="sd-visual-title">MSME Certification</div>
                  <div className="sd-visual-sub">Udyam Registration & Subsidies</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Udyam Certificate</div>
                    <div className="sd-chip">CGTMSE Loans</div>
                    <div className="sd-chip">Payment Protection</div>
                    <div className="sd-chip">Tender Concessions</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* LICENSES & REGISTRATIONS */}
          <section className="service-detail-section" id="licenses">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Business Licenses</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#f3e5f5,#e1bee7)' }}>🔑</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Secure Your Business Assets<br /><em style={{ color: 'var(--gold-dark)' }}>With Essential Licenses</em></h2>
                  <p className="reveal">Protect your brand name, comply with food safety standards, or start trading internationally. We handle all mandatory business registrations and intellectual property filings under one roof.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Trademark Registration: Protect your brand name & logo (™ logo)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>FSSAI Food License: Mandated safety registrations for food businesses</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Import Export Code (IEC): Required for global trading operations</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>ISO Certification: Establish international quality standards</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Shop & Establishment License (Gumasta registration)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>TAN registration and Professional Tax (PT) enrollment</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Businesses looking to secure their brand identity, restaurants, food manufacturers, traders, exporters, and employers with 10+ workers.</p></div>
                  <Link to="/contact?service=licenses" className="btn btn-gold reveal">Apply for Business License →</Link>
                </div>
                <div className="sd-visual reveal badge-violet">
                  <div className="sd-visual-icon">🔑</div>
                  <div className="sd-visual-title">Business Licensing</div>
                  <div className="sd-visual-sub">Compliance & IP Protection</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Trademark Filing</div>
                    <div className="sd-chip">FSSAI License</div>
                    <div className="sd-chip">Import Export (IEC)</div>
                    <div className="sd-chip">ISO Certification</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GEM & TENDERS */}
          <section className="service-detail-section bg-alt" id="gem">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">GEM & Tender Portal</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e3f2fd,#bbdefb)' }}>💼</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Grow Your Business with<br /><em style={{ color: 'var(--gold-dark)' }}>Government Contracts</em></h2>
                  <p className="reveal">Sell your products and services directly to government departments. We handle your complete Government e-Marketplace (GEM) vendor profile setup, product catalog listing, and tender bidding compliance.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>GEM Seller & Service Provider Profile Registration</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Catalog Management: Product uploading & Brand approval</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Direct purchase, L1 bidding, and reverse auctions support</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Daily tender searches mapped to your business code</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Bid preparation, document check, and online submission</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Post-bid representation and invoice compliance support</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Manufacturers, service providers, contractors, and traders looking to secure high-value government orders with transparent payments.</p></div>
                  <Link to="/contact?service=gem" className="btn btn-gold reveal">Apply for GEM / Tender Support →</Link>
                </div>
                <div className="sd-visual reveal badge-blue">
                  <div className="sd-visual-icon">💼</div>
                  <div className="sd-visual-title">GEM Bidding</div>
                  <div className="sd-visual-sub">Government e-Marketplace Services</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Vendor Registration</div>
                    <div className="sd-chip">Product Uploads</div>
                    <div className="sd-chip">Tender Bidding</div>
                    <div className="sd-chip">L1 Procurement</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OEM REGISTRATION */}
          <section className="service-detail-section" id="oem">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">OEM Registration</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fff8e1,#ffecb3)' }}>⚙️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Original Equipment Manufacturer<br /><em style={{ color: 'var(--gold-dark)' }}>GEM Verification</em></h2>
                  <p className="reveal">Unlock the power to list your manufactured products directly on the GEM portal without intermediaries. We manage your OEM dashboard approvals, vendor assessments by Quality Council of India (QCI), and brand listings.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>GEM OEM Panel registration & Quality Assessment filing</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Brand creation and approval on the GEM marketplace</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Complete QCI assessment documentation and preparation support</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Linking secondary sellers (resellers) to your OEM catalog</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>OEM dashboard management for direct product pricing control</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Actual manufacturers, trademark owners, and exclusive brand distributors who want to control their brand listing on GEM.</p></div>
                  <Link to="/contact?service=licenses&message=I%20need%20GEM%20OEM%20registration%20and%20vendor%20assessment%20support." className="btn btn-gold reveal">Register OEM Now →</Link>
                </div>
                <div className="sd-visual reveal badge-orange">
                  <div className="sd-visual-icon">⚙️</div>
                  <div className="sd-visual-title">OEM Panel</div>
                  <div className="sd-visual-sub">Brand & QCI Verification</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">OEM Dashboard</div>
                    <div className="sd-chip">QCI Assessment</div>
                    <div className="sd-chip">Brand Approval</div>
                    <div className="sd-chip">Reseller Mapping</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STOCK AUDIT */}
          <section className="service-detail-section bg-alt" id="stock-audit">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Stock Audit</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8f5e9,#a5d6a7)' }}>📋</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Secure Inventory Control<br /><em style={{ color: 'var(--gold-dark)' }}>With Reliable Stock Audits</em></h2>
                  <p className="reveal">Compliance and inventory validation are crucial for corporate credit and business health. We conduct professional stock audits, inventory valuations, and asset verification reports at highly reliable rates.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Physical verification of stock and matching with books of account</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Accurate inventory valuation using compliant accounting standards</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Verification of storage condition, slow-moving items, and damage checks</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Compliant audit reports for Bank CC/OD limits renewal</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Internal controls review to prevent stock leakages or theft</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Businesses availing bank cash-credit (CC) or overdraft (OD) facilities, wholesalers, large retailers, and manufacturing units.</p></div>
                  <Link to="/contact?service=itr&message=I%20need%20a%20Stock%20Audit%20and%20verification%20report%20for%20my%20business." className="btn btn-gold reveal">Request Stock Audit →</Link>
                </div>
                <div className="sd-visual reveal badge-teal">
                  <div className="sd-visual-icon">📋</div>
                  <div className="sd-visual-title">Stock Audit</div>
                  <div className="sd-visual-sub">Inventory Verification & Valuation</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Physical Check</div>
                    <div className="sd-chip">Valuation Report</div>
                    <div className="sd-chip">Bank CC Audit</div>
                    <div className="sd-chip">Internal Control</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PF/EPF & ESIC REGISTRATION */}
          <section className="service-detail-section bg-alt" id="pf-esic">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">PF/EPF & ESIC Registration</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e3f2fd,#90caf9)' }}>🛡️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Employee Benefits<br /><em style={{ color: 'var(--gold-dark)' }}>Registration & Compliance</em></h2>
                  <p className="reveal">Mandatory under Indian labour law — PF and ESIC registration protects both employer and employee. We handle complete registration, monthly return filing, and compliance management so you stay penalty-free.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>EPF Registration — for establishments with 20+ employees (mandatory)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>ESIC Registration — for employees earning ≤ ₹21,000/month</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Monthly ECR (Electronic Challan-cum-Return) filing for PF</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>ESIC half-yearly return filing & contribution management</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Employee UAN generation, KYC linking & transfer claims</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>PF withdrawal, advance & pension claim processing for employees</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Needs This?</h4><p>All businesses with 10+ employees must register for ESIC and 20+ for EPF. Also applicable to contractors, factories, shops, and establishments under state labour laws.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20PF%2FEPF%20%26%20ESIC%20registration%20and%20compliance%20services." className="btn btn-gold reveal">Start PF/ESIC Registration →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🛡️</div>
                  <div className="sd-visual-title">PF & ESIC</div>
                  <div className="sd-visual-sub">Employee Social Security</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">EPF Registration</div>
                    <div className="sd-chip">ESIC Filing</div>
                    <div className="sd-chip">UAN Setup</div>
                    <div className="sd-chip">Monthly Returns</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PAYROLL & LABOUR COMPLIANCE */}
          <section className="service-detail-section" id="payroll-compliance">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Payroll & Labour Compliance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fce4ec,#f48fb1)' }}>📋</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Stay Compliant<br /><em style={{ color: 'var(--gold-dark)' }}>Avoid Penalties & Notices</em></h2>
                  <p className="reveal">From Professional Tax registration to labour licence renewals — we handle all statutory compliance so you can focus on growing your business without legal worries.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Professional Tax (PT) registration & monthly/annual filing</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Labour Welfare Fund registration & compliance</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Shop & Establishment Act licence — registration & renewal</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Gratuity Trust setup and compliance for 5+ year employees</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Contract labour licence & compliance management</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Labour law return filing — annual & half-yearly as applicable</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Needs This?</h4><p>All employers in India — shops, offices, factories, contractors, and establishments. Non-compliance attracts heavy penalties under state and central labour laws.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20payroll%20and%20labour%20compliance%20services." className="btn btn-gold reveal">Get Compliance Support →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">📋</div>
                  <div className="sd-visual-title">Labour Compliance</div>
                  <div className="sd-visual-sub">Statutory Requirements</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Professional Tax</div>
                    <div className="sd-chip">Labour Licence</div>
                    <div className="sd-chip">Gratuity</div>
                    <div className="sd-chip">LWF</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DSC & TRADEMARK */}
          <section className="service-detail-section bg-alt" id="dsc-trademark">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">DSC, Trademark & IP</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#f3e5f5,#ce93d8)' }}>™️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Protect Your Brand<br /><em style={{ color: 'var(--gold-dark)' }}>Secure Your Identity</em></h2>
                  <p className="reveal">Digital Signatures for e-filing, Trademark registration to protect your brand, and Copyright/Patent filing to safeguard your intellectual property — we handle it all.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Digital Signature Certificate (DSC) — Class 2 & 3, for MCA, GST, e-Tender</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Trademark Registration — brand name, logo, tagline under 45 classes</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Trademark Objection Reply & Hearing representation</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Copyright Registration — for artistic, literary, software works</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Patent Filing — provisional and complete specification</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>DUNS Number registration for international business credibility</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Needs This?</h4><p>Every business, startup, freelancer, and creative professional. DSC is mandatory for company directors, GST filing, and e-tendering. Trademark protects your brand from copycats.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20DSC%2FTrademark%2FIP%20registration%20services." className="btn btn-gold reveal">Protect Your Brand →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">™️</div>
                  <div className="sd-visual-title">Brand Protection</div>
                  <div className="sd-visual-sub">DSC, Trademark & IP</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">DSC Certificate</div>
                    <div className="sd-chip">Trademark</div>
                    <div className="sd-chip">Copyright</div>
                    <div className="sd-chip">Patent</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FSSAI & ISO */}
          <section className="service-detail-section" id="fssai-iso">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">FSSAI, ISO & Certifications</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8f5e9,#81c784)' }}>🏅</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Get Certified<br /><em style={{ color: 'var(--gold-dark)' }}>Build Trust & Credibility</em></h2>
                  <p className="reveal">Certifications open doors to bigger contracts, government tenders, and customer trust. From FSSAI food licence to ISO quality certification — we handle the entire application and audit process.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>FSSAI Licence — Basic, State & Central level for food businesses</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (Safety)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>ISO 22000 (Food Safety) & HACCP Certification</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>BIS/ISI Certification for manufactured goods</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>GMP (Good Manufacturing Practice) Certification</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>NABL, CE Marking & other industry-specific certifications</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Needs This?</h4><p>Food manufacturers, restaurants, caterers (FSSAI mandatory). Manufacturers, exporters, and service companies seeking government tenders or international clients (ISO mandatory).</p></div>
                  <Link to="/contact?service=other&message=I%20need%20FSSAI%2FISO%20certification%20services." className="btn btn-gold reveal">Get Certified →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🏅</div>
                  <div className="sd-visual-title">Certifications</div>
                  <div className="sd-visual-sub">FSSAI, ISO & More</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">FSSAI</div>
                    <div className="sd-chip">ISO 9001</div>
                    <div className="sd-chip">ISO 14001</div>
                    <div className="sd-chip">BIS/ISI</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STARTUP ECOSYSTEM — COMPREHENSIVE */}
          <section className="service-detail-section bg-alt" id="startup-iec">
            <div className="container">
              <div className="sdg" style={{ gridTemplateColumns: '1fr' }}>
                <div className="sd-content" style={{ maxWidth: '100%' }}>
                  <div className="sd-eyebrow reveal">Startup Ecosystem, Investor Connect & NGO</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fff8e1,#ffd54f)' }}>🚀</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>From Idea to IPO<br /><em style={{ color: 'var(--gold-dark)' }}>We Build the Bridge</em></h2>
                  <p className="reveal">Whether you have a business idea that needs validation, a startup that needs funding, or an investor looking for opportunities — we provide the complete startup ecosystem support: registration, funding access, govt schemes, investor matchmaking, and compliance.</p>
                  
                  <h4 className="reveal" style={{ color: 'var(--green-deeper)', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>🏢 Startup Registration & Benefits</h4>
                  <div className="sd-benefits reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.5rem' }}>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>DPIIT Recognition</strong> — Startup India registration with 3-year tax holiday</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Self-Certification</strong> — compliance under 6 labour & 3 environment laws</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Patent Fast-Track</strong> — 80% rebate on patent filing for DPIIT startups</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Angel Tax Exemption</strong> — Section 56(2)(viib) exemption for recognized startups</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Public Procurement</strong> — GeM listing & govt tender relaxation for startups</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Easy Winding Up</strong> — Insolvency resolution in 90 days for startups</span></div>
                  </div>

                  <div className="reveal" style={{ background: 'linear-gradient(135deg, #e3f2fd, #fff3e0)', border: '2px solid var(--gold)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '1.5rem 0' }}>
                    <h4 style={{ color: 'var(--green-deeper)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>💰 Funding & Investor Access</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>SIDBI Fund of Funds</strong> — ₹10,000 Crore fund for startup equity investment</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Startup India Seed Fund (SISFS)</strong> — ₹20L–₹50L for proof of concept</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>AIM / Atal Incubation</strong> — ₹10 Crore grant for incubators & innovators</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Angel Investor Network</strong> — connect with HNIs & angel investors</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>VC/PE Fundraising</strong> — pitch deck prep & venture capital introductions</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Crowdfunding Support</strong> — equity & reward-based crowdfunding guidance</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Business Idea Validation</strong> — market research, viability analysis & revenue modelling</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Incubator/Accelerator</strong> — connect with 200+ govt & private incubators</span></div>
                    </div>
                  </div>

                  <h4 className="reveal" style={{ color: 'var(--green-deeper)', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>🌍 NGO, Trust & Import-Export</h4>
                  <div className="sd-benefits reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.5rem' }}>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>NGO/Trust/Society/Sec 8</strong> — Complete registration & compliance</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>12A & 80G</strong> — Tax exemption for NGOs & donors</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>FCRA Registration</strong> — For receiving foreign donations</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>IEC Code</strong> — Import Export Code for international trade</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>RCMC</strong> — Registration with export promotion councils</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>AD Code</strong> — Customs registration for export payments</span></div>
                  </div>
                  
                  <div className="sd-who reveal"><h4>💡 Who Is This For?</h4><p>First-time entrepreneurs with business ideas, startups seeking funding & recognition, investors looking for vetted startup opportunities, NGOs needing compliance, and exporters/importers entering international markets.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20startup%20ecosystem%20%2F%20investor%20connect%20%2F%20NGO%20services." className="btn btn-gold reveal">Launch Your Startup →</Link>
                </div>
              </div>
            </div>
          </section>

          {/* GOVT SUBSIDIES & PROJECT FINANCE */}
          <section className="service-detail-section" id="govt-subsidies">
            <div className="container">
              <div className="sdg" style={{ gridTemplateColumns: '1fr' }}>
                <div className="sd-content" style={{ maxWidth: '100%' }}>
                  <div className="sd-eyebrow reveal">Govt Subsidies & Project Support</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8eaf6,#7986cb)' }}>🏛️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Government Subsidies<br /><em style={{ color: 'var(--gold-dark)' }}>Turn Your Project into Reality</em></h2>
                  <p className="reveal">The government gives crores in subsidies every year — but most businesses don't know how to access them. We identify every scheme you're eligible for, prepare your project report, and file your subsidy applications end-to-end.</p>
                  
                  <div className="reveal" style={{ background: 'linear-gradient(135deg, #f3e5f5, #e8f5e9)', border: '2px solid var(--green)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '1.5rem 0' }}>
                    <h4 style={{ color: 'var(--green-deeper)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>🎯 Major Central & State Govt Subsidy Schemes</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>PLI Scheme</strong> — Production-Linked Incentive across 14 sectors</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>CLCSS</strong> — Credit Linked Capital Subsidy (15% on plant & machinery)</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>SFURTI</strong> — Scheme for traditional industries cluster development</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>ASPIRE</strong> — Agro/rural industry incubation & livelihood business</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>ZED Certification</strong> — Zero Defect Zero Effect with subsidy support</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>Technology Upgradation</strong> — TUFS, ATUF for textile & manufacturing</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>State Industrial Policy</strong> — Capital subsidy, stamp duty, power tariff benefits</span></div>
                      <div className="sd-benefit"><div className="sd-check">✓</div><span><strong>MSME Subsidy Schemes</strong> — DIC & state MSME subsidies</span></div>
                    </div>
                  </div>

                  <h4 className="reveal" style={{ color: 'var(--green-deeper)', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>📑 Our Project Support Services</h4>
                  <div className="sd-benefits reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.5rem' }}>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Detailed Project Report (DPR) preparation for bank & subsidy</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Techno-Economic Viability (TEV) study & CMA data</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Subsidy eligibility assessment — central + state schemes</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>End-to-end subsidy application & claim filing</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Land/industrial plot allotment assistance (MIDC, RIICO, GIDC)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Upcoming govt scheme alerts & pre-registration support</span></div>
                  </div>

                  <div className="sd-who reveal"><h4>💡 Who Benefits?</h4><p>Manufacturers, food processors, agri-businesses, tech companies, traditional artisans, exporters, and any MSME or large enterprise setting up or expanding operations. If you're investing in a project — there's likely a subsidy you're missing.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20help%20with%20Govt%20Subsidies%20and%20Project%20Report%20preparation." className="btn btn-gold reveal">Check Subsidy Eligibility →</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* GOVERNMENT & STUDENT SERVICES (JANA SEVA KENDRA) TAB PANEL */}
      {(activeTab === 'all' || activeTab === 'govt-services') && (
        <div id="govt-services" className="tab-panel active">
          {activeTab === 'all' && (
            <div className="container" style={{ paddingTop: '3.5rem', paddingBottom: '1rem', borderTop: '2px dashed var(--border)' }}>
              <div className="vertical-section-header">
                <span className="vsh-badge" style={{ background: '#fef3c7', color: '#b45309' }}>VERTICAL 3 OF 3</span>
                <h2>📜 Jana Seva Kendra (CSC), Govt Certificates &amp; Student Desk</h2>
                <p>Fast online citizen desk for official caste, income, residence certificates, PAN/Aadhaar corrections, RTO driving licenses, and scholarships.</p>
              </div>
            </div>
          )}
          {/* CSC CERTIFICATES */}
          <section className="service-detail-section" id="certificates">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">CSC Government Certificates</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e3f2fd,#bbdefb)' }}>📜</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Official Certificate Apply<br /><em style={{ color: 'var(--gold-dark)' }}>Hassle-Free Online</em></h2>
                  <p className="reveal">No need to visit government offices or wait in long lines. We handle the entire application process for Caste, Income, and Residence/Domicile certificates through verified CSC / Jana Seva Kendra channels.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="caste">Caste Certificate: SC, ST, OBC, and SEBC certificate apply</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="residence">Resident/Domicile Certificate: Online proof of address verification</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="income">Income Certificate: Government verified annual income certificates</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Birth and Death Certificate online application support</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Proper documentation checking before submission to prevent rejection</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Real-time status tracking and certificate downloading assistance</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Students applying for scholarships, job seekers, and citizens looking to avail government scheme benefits.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20help%20applying%20for%20a%20Government%20Certificate%20(Caste%2FIncome%2FResidence)." className="btn btn-gold reveal">Apply for Certificates →</Link>
                </div>
                <div className="sd-visual reveal badge-blue">
                  <div className="sd-visual-icon">📜</div>
                  <div className="sd-visual-title">CSC Services</div>
                  <div className="sd-visual-sub">Official Govt Certificates</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Caste Certificate</div>
                    <div className="sd-chip">Income Proof</div>
                    <div className="sd-chip">Residence / Domicile</div>
                    <div className="sd-chip">Birth & Death</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ID CARD CORRECTIONS */}
          <section className="service-detail-section bg-alt" id="id-corrections">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Identity Corrections</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)' }}>🆔</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Correct Name, Date of Birth<br /><em style={{ color: 'var(--gold-dark)' }}>& Address On Your IDs</em></h2>
                  <p className="reveal">Errors on identity cards cause major banking and travel problems. We provide comprehensive consultancy and form-filling support for correcting PAN, Voter ID, and Aadhaar cards.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="pan-change">PAN Card corrections: Name, Date of Birth, Father's Name change</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="aadhaar-change">Aadhaar Card update consultancy: Address, Name, Phone linking guide</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="voter-change">Voter ID Card correction and digital EPIC card download support</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Name correction in Educational marksheets/certificates guide</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Official Gazette notification advisory for legal name changes</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Individuals facing mismatch errors in bank accounts, passport applications, job verification, or tax filings.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20help%20correcting%20my%20details%20on%20my%20ID%20cards%20(PAN%2FAadhaar%2FVoter)." className="btn btn-gold reveal">Start ID Correction →</Link>
                </div>
                <div className="sd-visual reveal badge-teal">
                  <div className="sd-visual-icon">🆔</div>
                  <div className="sd-visual-title">ID Updates</div>
                  <div className="sd-visual-sub">Profile Corrections & Linking</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">PAN Card Changes</div>
                    <div className="sd-chip">Aadhaar Correction</div>
                    <div className="sd-chip">Voter Card Update</div>
                    <div className="sd-chip">Gazette Advisory</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RTO SERVICES */}
          <section className="service-detail-section" id="rto">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">RTO Services</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fff8e1,#ffecb3)' }}>🚗</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>RTO Licensing & Vehicle<br /><em style={{ color: 'var(--gold-dark)' }}>Registration Services</em></h2>
                  <p className="reveal">Skip the confusion of RTO rules. We provide professional consultancy for driving licenses, vehicle registrations, tax payments, and RC transfers through official online portals.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Fresh Driving License: Learner's & Permanent License apply</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Driving License Renewals and Address changes</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Vehicle RC Transfer (Transfer of Ownership) support</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Duplicate RC issue and High Security Registration Plate (HSRP) booking</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>State-tax payments, NOC applications, and fitness certificate guide</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Car & bike owners, buyers of second-hand vehicles, and people relocating to different states requiring state transfer.</p></div>
                  <Link to="/contact?service=motor&message=I%20need%20RTO%20License%20or%20RC%20transfer%20consultancy." className="btn btn-gold reveal">Apply for RTO Service →</Link>
                </div>
                <div className="sd-visual reveal badge-orange">
                  <div className="sd-visual-icon">🚗</div>
                  <div className="sd-visual-title">RTO Desk</div>
                  <div className="sd-visual-sub">Licensing & Registration Support</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Driving License</div>
                    <div className="sd-chip">RC Transfer</div>
                    <div className="sd-chip">Tax Payments</div>
                    <div className="sd-chip">Duplicate RC</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PASSPORT & VISA */}
          <section className="service-detail-section bg-alt" id="passport-visa">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Passport & VISA</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fce4ec,#f8bbd0)' }}>✈️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Global Travel Made Easy<br /><em style={{ color: 'var(--gold-dark)' }}>Passport & VISA Services</em></h2>
                  <p className="reveal">Planning an international vacation, study abroad, or global business expansion? We handle the entire application process for Indian Passports and assist in VISA documentation.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Apply for Fresh Passport and Re-issue of expired Passport</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Tatkaal Passport applications for urgent travel needs</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Documents checklist verification to prevent PSK rejection</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>VISA Consultancy: Tourist, Business, and Student VISA documents review</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Online form filling, appointment booking, and fee payment management</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Individuals planning overseas travel, corporate teams going abroad, and students heading to international colleges.</p></div>
                  <Link to="/contact?service=travel&message=I%20want%20to%20apply%20for%20Passport%2FVISA%20consultancy." className="btn btn-gold reveal">Get Passport / VISA Help →</Link>
                </div>
                <div className="sd-visual reveal badge-violet">
                  <div className="sd-visual-icon">✈️</div>
                  <div className="sd-visual-title">Global Travel</div>
                  <div className="sd-visual-sub">Application & Scheduling Desk</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Fresh Passport</div>
                    <div className="sd-chip">Renewals</div>
                    <div className="sd-chip">VISA Check</div>
                    <div className="sd-chip">Appointment</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STUDENT DESK */}
          <section className="service-detail-section" id="student-desk">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Student Desk</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#f3e5f5,#e1bee7)' }}>🎓</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Scholarships, Admissions<br /><em style={{ color: 'var(--gold-dark)' }}>& Competitive Exam Forms</em></h2>
                  <p className="reveal">Never miss an academic deadline. We provide dedicated application support for state/national scholarships, competitive examinations registration, and college applications.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="scholarships">Scholarship Applications: NSP, State Scholarships, and merit schemes</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Competitive Exams form-filling: JEE, NEET, CUET, Banking, SSC, and state exams</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>College/University admission form submissions</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Document scanning, resizing, and uploading in required pixel/size formats</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Alert notifications for last dates, correction windows, and admit card release</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Students, parents, and job aspirants looking for error-free forms submission to prevent registration rejection.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20assistance%20for%20Scholarship%2FExam%2FCollege%20applications." className="btn btn-gold reveal">Apply Now →</Link>
                </div>
                <div className="sd-visual reveal badge-purple">
                  <div className="sd-visual-icon">🎓</div>
                  <div className="sd-visual-title">Student Desk</div>
                  <div className="sd-visual-sub">Academic Forms & Scholarships</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Scholarships</div>
                    <div className="sd-chip">Exam Forms</div>
                    <div className="sd-chip">Admissions</div>
                    <div className="sd-chip">Format Resize</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* E-SHRAM & GOVT WELFARE SCHEMES */}
          <section className="service-detail-section bg-alt" id="eshram-welfare">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">E-Shram & Govt Welfare Schemes</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8eaf6,#9fa8da)' }}>🏛️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Government Benefits<br /><em style={{ color: 'var(--gold-dark)' }}>Direct to Your Doorstep</em></h2>
                  <p className="reveal">Millions of government schemes exist but most people don't know how to apply. We help you enroll in every eligible scheme — from E-Shram cards to Ayushman Bharat to pension plans — so you never miss a benefit you deserve.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>E-Shram Card registration — ₹2 Lakh accidental insurance for workers</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Ayushman Bharat / PMJAY — ₹5 Lakh free health cover for eligible families</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>PM Kisan Samman Nidhi — ₹6,000/year for farmers</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>PM Jeevan Jyoti Bima / Suraksha Bima Yojana — ₹2L/₹4L cover at ₹12-₹436/year</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Atal Pension Yojana (APY) — guaranteed pension of ₹1,000–₹5,000/month</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>PM Awas Yojana, Ujjwala Yojana & other state-specific welfare schemes</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Apply?</h4><p>Unorganized sector workers, daily wage labourers, farmers, BPL families, senior citizens, and anyone earning below ₹15,000/month. Many schemes have no income limit.</p></div>
                  <Link to="/contact?service=other&message=I%20want%20to%20apply%20for%20E-Shram%20%2F%20Government%20Welfare%20Schemes." className="btn btn-gold reveal">Apply for Schemes →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🏛️</div>
                  <div className="sd-visual-title">Welfare Schemes</div>
                  <div className="sd-visual-sub">Government Benefits</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">E-Shram</div>
                    <div className="sd-chip">Ayushman Bharat</div>
                    <div className="sd-chip">PM Kisan</div>
                    <div className="sd-chip">Atal Pension</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RATION CARD & UTILITY SERVICES */}
          <section className="service-detail-section" id="utility-services">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Ration Card & Utility Services</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fff3e0,#ffcc80)' }}>📄</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Essential Documents<br /><em style={{ color: 'var(--gold-dark)' }}>Without the Hassle</em></h2>
                  <p className="reveal">From new ration cards to electricity connections to property documents — we handle all essential utility and document services that every household needs, saving you time and government office visits.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Ration Card — new application, name addition/deletion, correction</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Electricity / Water connection — new, name transfer, load change</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Property documents — mutation, encumbrance certificate, land records</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Birth & Death Certificate — new registration, correction, duplicate</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Marriage Certificate registration & verification</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Affidavit, Notary & e-Stamp paper services</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Needs This?</h4><p>Every household and individual. Whether you're setting up a new home, updating family records, or need any government document — we make it simple and stress-free.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20help%20with%20Ration%20Card%20%2F%20Utility%20document%20services." className="btn btn-gold reveal">Get Document Help →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">📄</div>
                  <div className="sd-visual-title">Utility Services</div>
                  <div className="sd-visual-sub">Essential Documents</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Ration Card</div>
                    <div className="sd-chip">Birth/Death Cert</div>
                    <div className="sd-chip">Marriage Cert</div>
                    <div className="sd-chip">Property Docs</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-orb" aria-hidden="true"></div><div className="cta-orb2" aria-hidden="true"></div>
        <div className="container">
          <div className="cta-content reveal">
            <div className="cta-eyebrow"><div className="cta-eyebrow-line"></div><div className="cta-eyebrow-text">Free Advisory</div><div className="cta-eyebrow-line"></div></div>
            <h2>Not Sure Which Plan<br /><em>Is Right for You?</em></h2>
            <p>Our advisors will listen, understand your situation, and recommend the perfect coverage — at no cost to you, with zero pressure.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">Talk to an Advisor</Link>
              <a href="https://wa.me/919583425025?text=Hello!%20I%20need%20help%20choosing%20the%20right%20insurance%20plan." className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">WhatsApp Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
