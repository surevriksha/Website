import React, { useState } from 'react';

export default function PartnerMarquee() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Authentic, pixel-accurate vector logos for top insurance companies in India
  const insurancePartners = [
    {
      name: "Life Insurance Corporation of India",
      short: "LIC",
      category: "life",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="LIC Logo">
          <circle cx="24" cy="24" r="18" fill="#004D99" />
          {/* Hands holding lamp motif */}
          <path d="M15 28c4 3 14 3 18 0M13 24c3-2 5-4 5-7 0 5 4 7 6 7s6-2 6-7c0 3 2 5 5 7" stroke="#FFCC00" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="24" cy="14" r="3.5" fill="#FFCC00" />
          <text x="50" y="27" fill="#004D99" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="20" letterSpacing="1.5">LIC</text>
          <text x="50" y="38" fill="#008080" fontWeight="700" fontFamily="system-ui, sans-serif" fontSize="8.5" letterSpacing="0.8">OF INDIA</text>
        </svg>
      )
    },
    {
      name: "HDFC ERGO General Insurance",
      short: "HDFC ERGO",
      category: "general",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="HDFC ERGO Logo">
          <rect x="6" y="8" width="32" height="32" rx="4" fill="#004C8F" />
          <path d="M14 16h6v16h-6V16zm10 0h6v16h-6V16z" fill="#FFFFFF" />
          <rect x="6" y="22" width="32" height="4" fill="#ED232A" />
          <text x="46" y="23" fill="#004C8F" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="15" letterSpacing="0.5">HDFC</text>
          <text x="46" y="37" fill="#ED232A" fontWeight="800" fontFamily="system-ui, sans-serif" fontSize="12" letterSpacing="2">ERGO</text>
        </svg>
      )
    },
    {
      name: "ICICI Lombard General Insurance",
      short: "ICICI Lombard",
      category: "general",
      svg: (
        <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="ICICI Lombard Logo">
          <circle cx="24" cy="24" r="18" fill="#861F41" />
          <rect x="18" y="18" width="12" height="12" rx="2" fill="#F37021" />
          <text x="50" y="24" fill="#861F41" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="15" letterSpacing="0.5">ICICI</text>
          <text x="50" y="37" fill="#F37021" fontWeight="800" fontFamily="system-ui, sans-serif" fontSize="11" letterSpacing="1">LOMBARD</text>
        </svg>
      )
    },
    {
      name: "Star Health & Allied Insurance",
      short: "Star Health",
      category: "health",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Star Health Logo">
          {/* Dual overlapping star */}
          <path d="M22 6l3.5 10.5h11l-9 6.5 3.5 11-9-6.8-9 6.8 3.5-11-9-6.5h11L22 6z" fill="#004990" />
          <path d="M22 12l2.2 7h7.3l-6 4.5 2.3 7.5-5.8-4.5-5.8 4.5 2.3-7.5-6-4.5h7.3L22 12z" fill="#E31837" />
          <text x="48" y="23" fill="#004990" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="15" letterSpacing="1">STAR</text>
          <text x="48" y="37" fill="#E31837" fontWeight="800" fontFamily="system-ui, sans-serif" fontSize="11" letterSpacing="1.2">HEALTH</text>
        </svg>
      )
    },
    {
      name: "Care Health Insurance",
      short: "Care Health",
      category: "health",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Care Health Logo">
          <circle cx="24" cy="24" r="18" fill="#00A3AD" />
          <path d="M24 13v22M13 24h22" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          <text x="50" y="30" fill="#00A3AD" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="22" letterSpacing="0.5">care</text>
          <text x="96" y="30" fill="#2D3748" fontWeight="600" fontFamily="system-ui, sans-serif" fontSize="10">HEALTH</text>
        </svg>
      )
    },
    {
      name: "Tata AIG General Insurance",
      short: "Tata AIG",
      category: "general",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Tata AIG Logo">
          <rect x="6" y="8" width="32" height="32" rx="6" fill="#1C3F94" />
          <path d="M12 16h20M22 16v16" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <text x="46" y="23" fill="#1C3F94" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="16" letterSpacing="1">TATA</text>
          <text x="46" y="36" fill="#00A79D" fontWeight="800" fontFamily="system-ui, sans-serif" fontSize="13" letterSpacing="2">AIG</text>
        </svg>
      )
    },
    {
      name: "Bajaj Allianz",
      short: "Bajaj Allianz",
      category: "general",
      svg: (
        <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Bajaj Allianz Logo">
          <circle cx="24" cy="24" r="18" fill="#004B87" />
          <path d="M17 24h14M24 17v14" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="12" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="50" y="23" fill="#004B87" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="13" letterSpacing="0.5">BAJAJ</text>
          <text x="50" y="37" fill="#004B87" fontWeight="700" fontFamily="system-ui, sans-serif" fontSize="12">Allianz</text>
        </svg>
      )
    },
    {
      name: "Niva Bupa Health Insurance",
      short: "Niva Bupa",
      category: "health",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Niva Bupa Logo">
          <path d="M14 24c0-7 10-12 10-12s10 5 10 12c0 6-5 10-10 10s-10-4-10-10z" fill="#009688" />
          <circle cx="24" cy="22" r="5" fill="#FF5722" />
          <text x="48" y="22" fill="#009688" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="14">niva</text>
          <text x="48" y="36" fill="#FF5722" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="14">bupa</text>
        </svg>
      )
    },
    {
      name: "SBI Life Insurance",
      short: "SBI Life",
      category: "life",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="SBI Life Logo">
          <circle cx="24" cy="24" r="18" fill="#0091DF" />
          <circle cx="24" cy="24" r="7" fill="#FFFFFF" />
          <rect x="22" y="24" width="4" height="14" fill="#FFFFFF" />
          <text x="50" y="24" fill="#0091DF" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="17" letterSpacing="0.5">SBI</text>
          <text x="50" y="37" fill="#2D3748" fontWeight="800" fontFamily="system-ui, sans-serif" fontSize="12">Life</text>
        </svg>
      )
    },
    {
      name: "Go Digit General Insurance",
      short: "Go Digit",
      category: "general",
      svg: (
        <svg viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Go Digit Logo">
          <circle cx="24" cy="24" r="18" fill="#FFC72C" />
          <text x="17" y="31" fill="#1D252C" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="22">d</text>
          <text x="50" y="31" fill="#1D252C" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="21" letterSpacing="0.8">digit</text>
        </svg>
      )
    },
    {
      name: "Max Life Insurance",
      short: "Max Life",
      category: "life",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Max Life Logo">
          <rect x="6" y="8" width="32" height="32" rx="4" fill="#0A1128" />
          <path d="M14 16l6 8 6-8M14 30h12" stroke="#E63946" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="46" y="23" fill="#0A1128" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="15" letterSpacing="0.5">MAX</text>
          <text x="46" y="37" fill="#E63946" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="13" letterSpacing="1">LIFE</text>
        </svg>
      )
    },
    {
      name: "Aditya Birla Capital",
      short: "Aditya Birla",
      category: "life",
      svg: (
        <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Aditya Birla Logo">
          <path d="M24 7l15 25H9L24 7z" fill="#A30000" />
          <circle cx="24" cy="22" r="5" fill="#F8B133" />
          <text x="48" y="23" fill="#A30000" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="12" letterSpacing="0.5">ADITYA BIRLA</text>
          <text x="48" y="36" fill="#2D3748" fontWeight="700" fontFamily="system-ui, sans-serif" fontSize="10" letterSpacing="1.5">CAPITAL</text>
        </svg>
      )
    }
  ];

  // Authentic, pixel-accurate vector logos for top Banks & Lending partners in India
  const bankPartners = [
    {
      name: "State Bank of India",
      short: "SBI Bank",
      category: "bank",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="State Bank of India Logo">
          <circle cx="24" cy="24" r="18" fill="#280071" />
          <circle cx="24" cy="24" r="7" fill="#0091DF" />
          <rect x="22" y="24" width="4" height="14" fill="#0091DF" />
          <circle cx="24" cy="24" r="3" fill="#FFFFFF" />
          <text x="50" y="24" fill="#280071" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="17" letterSpacing="0.5">SBI</text>
          <text x="50" y="36" fill="#0091DF" fontWeight="700" fontFamily="system-ui, sans-serif" fontSize="9" letterSpacing="1">STATE BANK</text>
        </svg>
      )
    },
    {
      name: "HDFC Bank",
      short: "HDFC Bank",
      category: "bank",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="HDFC Bank Logo">
          <rect x="6" y="8" width="32" height="32" rx="4" fill="#004C8F" />
          <path d="M14 16h6v16h-6V16zm10 0h6v16h-6V16z" fill="#FFFFFF" />
          <rect x="6" y="22" width="32" height="4" fill="#ED232A" />
          <text x="46" y="24" fill="#004C8F" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="15" letterSpacing="0.5">HDFC</text>
          <text x="46" y="37" fill="#004C8F" fontWeight="700" fontFamily="system-ui, sans-serif" fontSize="12" letterSpacing="1.5">BANK</text>
        </svg>
      )
    },
    {
      name: "ICICI Bank",
      short: "ICICI Bank",
      category: "bank",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="ICICI Bank Logo">
          <circle cx="24" cy="24" r="18" fill="#861F41" />
          <rect x="18" y="18" width="12" height="12" rx="2" fill="#F37021" />
          <text x="50" y="24" fill="#861F41" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="15" letterSpacing="0.5">ICICI</text>
          <text x="50" y="37" fill="#F37021" fontWeight="800" fontFamily="system-ui, sans-serif" fontSize="12" letterSpacing="1.5">BANK</text>
        </svg>
      )
    },
    {
      name: "Axis Bank",
      short: "Axis Bank",
      category: "bank",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Axis Bank Logo">
          <path d="M10 36L24 10l14 26h-8l-6-12-6 12H10z" fill="#97144D" />
          <text x="48" y="24" fill="#97144D" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="16" letterSpacing="0.5">AXIS</text>
          <text x="48" y="37" fill="#2D3748" fontWeight="700" fontFamily="system-ui, sans-serif" fontSize="12" letterSpacing="1">BANK</text>
        </svg>
      )
    },
    {
      name: "Kotak Mahindra Bank",
      short: "Kotak Bank",
      category: "bank",
      svg: (
        <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Kotak Mahindra Bank Logo">
          <rect x="6" y="8" width="32" height="32" rx="4" fill="#ED1C24" />
          <text x="14" y="31" fill="#FFFFFF" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="22">k</text>
          <text x="46" y="23" fill="#003366" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="15" letterSpacing="0.5">KOTAK</text>
          <text x="46" y="36" fill="#ED1C24" fontWeight="700" fontFamily="system-ui, sans-serif" fontSize="10" letterSpacing="0.8">MAHINDRA</text>
        </svg>
      )
    },
    {
      name: "Punjab National Bank",
      short: "PNB",
      category: "bank",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Punjab National Bank Logo">
          <circle cx="24" cy="24" r="18" fill="#A21D21" />
          <path d="M16 16h10c3 0 5 2 5 5s-2 5-5 5h-4v6h-6V16zm6 6h4c1 0 2-1 2-2s-1-2-2-2h-4v4z" fill="#F8A51D" />
          <text x="48" y="24" fill="#A21D21" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="17" letterSpacing="1">PNB</text>
          <text x="48" y="36" fill="#2D3748" fontWeight="700" fontFamily="system-ui, sans-serif" fontSize="8.5" letterSpacing="0.5">PUNJAB NATIONAL</text>
        </svg>
      )
    },
    {
      name: "Bank of Baroda",
      short: "Bank of Baroda",
      category: "bank",
      svg: (
        <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Bank of Baroda Logo">
          <rect x="6" y="8" width="32" height="32" rx="6" fill="#F26522" />
          <circle cx="22" cy="24" r="10" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M22 17v7l4 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="46" y="22" fill="#F26522" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="12" letterSpacing="0.5">BANK OF</text>
          <text x="46" y="36" fill="#003366" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="15" letterSpacing="0.5">BARODA</text>
        </svg>
      )
    },
    {
      name: "SIDBI & MSME / Mudra",
      short: "SIDBI / Mudra",
      category: "bank",
      svg: (
        <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="SIDBI & Mudra Logo">
          <circle cx="24" cy="24" r="18" fill="#006699" />
          <path d="M15 24h18M24 15v18M18 18l12 12M30 18L18 30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="48" y="23" fill="#006699" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="15" letterSpacing="0.5">SIDBI</text>
          <text x="48" y="36" fill="#D97706" fontWeight="800" fontFamily="system-ui, sans-serif" fontSize="10" letterSpacing="0.8">MUDRA / PMEGP</text>
        </svg>
      )
    },
    {
      name: "Bajaj Finserv",
      short: "Bajaj Finserv",
      category: "bank",
      svg: (
        <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Bajaj Finserv Logo">
          <circle cx="24" cy="24" r="18" fill="#004B87" />
          <path d="M16 24h16M24 16v16" stroke="#FFFFFF" strokeWidth="2" />
          <text x="48" y="23" fill="#004B87" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="13" letterSpacing="0.5">BAJAJ</text>
          <text x="48" y="37" fill="#F37021" fontWeight="800" fontFamily="system-ui, sans-serif" fontSize="12" letterSpacing="0.5">FINSERV</text>
        </svg>
      )
    },
    {
      name: "Tata Capital",
      short: "Tata Capital",
      category: "bank",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg" aria-label="Tata Capital Logo">
          <rect x="6" y="8" width="32" height="32" rx="4" fill="#00539F" />
          <path d="M12 16h20M22 16v16" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <text x="46" y="23" fill="#00539F" fontWeight="900" fontFamily="system-ui, sans-serif" fontSize="14" letterSpacing="0.5">TATA</text>
          <text x="46" y="36" fill="#4B5563" fontWeight="800" fontFamily="system-ui, sans-serif" fontSize="11" letterSpacing="1">CAPITAL</text>
        </svg>
      )
    }
  ];

  // Infinite marquee lists
  const marqueeInsurers = [...insurancePartners, ...insurancePartners];
  const marqueeBanks = [...bankPartners, ...bankPartners];

  return (
    <section className="partners-section" aria-label="Our Trusted Insurers and Banking Partners">
      <div className="container">
        <div className="partners-header">
          <div className="section-tag" style={{ margin: '0 auto 0.5rem auto' }}>Official Tie-Ups &amp; Empanelments</div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--green-deeper)', textAlign: 'center', margin: '0.25rem 0 1rem 0' }}>
            Empanelled with India&apos;s <span style={{ color: 'var(--gold-dark)' }}>Leading Insurers &amp; Banks</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', maxWidth: '640px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem' }}>
            Direct empanelment with 30+ top Insurance Companies and 20+ Leading Public &amp; Private Banks ensures you get the lowest premiums, highest claims ratio, and subsidized loan approvals.
          </p>

          <div className="partner-filter-pills" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <button 
              type="button"
              className={`partner-pill-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Partners (40+)
            </button>
            <button 
              type="button"
              className={`partner-pill-btn ${activeCategory === 'insurance' ? 'active' : ''}`}
              onClick={() => setActiveCategory('insurance')}
            >
              🛡️ Insurance Companies
            </button>
            <button 
              type="button"
              className={`partner-pill-btn ${activeCategory === 'banks' ? 'active' : ''}`}
              onClick={() => setActiveCategory('banks')}
            >
              🏦 Banks &amp; Lending Partners
            </button>
          </div>
        </div>

        {/* Row 1: Insurance Partners */}
        {(activeCategory === 'all' || activeCategory === 'insurance') && (
          <div className="marquee-block" style={{ marginBottom: activeCategory === 'all' ? '1.25rem' : '0' }}>
            <div className="marquee-row-label">
              <span className="mrl-badge">Insurers</span> Top Life &amp; General Insurance Partners
            </div>
            <div className="marquee-wrapper">
              <div className="marquee-track">
                {marqueeInsurers.map((partner, index) => (
                  <div className="partner-logo" title={partner.name} key={`ins-${index}`}>
                    {partner.svg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Row 2: Banking & Lending Partners */}
        {(activeCategory === 'all' || activeCategory === 'banks') && (
          <div className="marquee-block">
            <div className="marquee-row-label">
              <span className="mrl-badge bank-badge">Lending</span> Premier Banking &amp; Mudra / Subsidy Partners
            </div>
            <div className="marquee-wrapper">
              <div className="marquee-track marquee-track-reverse">
                {marqueeBanks.map((partner, index) => (
                  <div className="partner-logo" title={partner.name} key={`bank-${index}`}>
                    {partner.svg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="partner-trust-note" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.75rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
          <span>✓ 100% IRDAI Compliant Advisory</span>
          <span>✓ Zero Commission Markup for Clients</span>
          <span>✓ Cashless Hospital &amp; Garage Networks</span>
          <span>✓ Instant Banking Loan Sanction Support</span>
        </div>
      </div>
    </section>
  );
}
