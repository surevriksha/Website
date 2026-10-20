// Complete directory of 40+ Empanelled Insurance Partners and PBPartner POSP Credentials
export const PB_PARTNERS_INFO = {
  brandTitle: "Verified & Certified PBPartner POSP",
  pospText: "Certified Point of Sales Person (POSP)",
  parentCompany: "PBPartners is a brand of Policybazaar Insurance Brokers Private Limited",
  tagline: "Ek Rishta Bharose Ka",
  registrationNote: "IRDAI Regulated • Official PBPartner POSP • Pan-India Advisory",
  logoUrl: "/images/pbpartners-logo.png",
  bannerUrl: "/images/pbpartners-banner.png",
  highlights: [
    { 
      icon: "🛡️", 
      title: "40+ Top Insurers", 
      desc: "Direct access to India's top Life, Health, Motor, SME & Commercial insurers" 
    },
    { 
      icon: "🤝", 
      title: "Policybazaar Backed", 
      desc: "Empanelled with PBPartners — a brand of Policybazaar Insurance Brokers Pvt. Ltd." 
    },
    { 
      icon: "⚖️", 
      title: "Zero Commission Bias", 
      desc: "100% impartial comparison to get you the lowest premiums and highest claim settlement ratio" 
    },
    { 
      icon: "🏥", 
      title: "Dedicated Claim Desk", 
      desc: "Full claim filing and cashless assistance across 15,000+ network hospitals & 10,000+ garages" 
    }
  ]
};

export const INSURER_PARTNERS = [
  // Health Insurance Specialists & Leaders
  { id: 'star-health', name: 'Star Health & Allied Insurance', short: 'Star Health', category: 'health', img: '/images/insurers/star-health.png', tag: 'Cashless Network' },
  { id: 'care-health', name: 'Care Health Insurance', short: 'Care Health', category: 'health', img: '/images/insurers/care-health.png', tag: 'No Room Rent Capping' },
  { id: 'niva-bupa', name: 'Niva Bupa Health Insurance', short: 'Niva Bupa', category: 'health', img: '/images/insurers/niva-bupa.png', tag: 'ReAssure Forever' },
  { id: 'hdfc-ergo', name: 'HDFC ERGO General Insurance', short: 'HDFC ERGO', category: 'health', img: '/images/insurers/hdfc-ergo.png', tag: 'Optima Secure' },
  { id: 'icici-lombard', name: 'ICICI Lombard General Insurance', short: 'ICICI Lombard', category: 'health', img: '/images/insurers/icici-lombard.png', tag: 'Instant Cashless' },
  { id: 'manipal-cigna', name: 'ManipalCigna Health Insurance', short: 'ManipalCigna', category: 'health', img: '/images/insurers/manipal-cigna.png', tag: 'Global Protection' },
  { id: 'aditya-birla-health', name: 'Aditya Birla Health Insurance', short: 'Aditya Birla Health', category: 'health', img: '/images/insurers/aditya-birla-health.png', tag: 'Active Health' },
  
  // Life & Term Insurance Leaders
  { id: 'lic', name: 'Life Insurance Corporation of India', short: 'LIC of India', category: 'life', img: '/images/insurers/lic.png', tag: 'Sovereign Guarantee' },
  { id: 'hdfc-life', name: 'HDFC Life Insurance', short: 'HDFC Life', category: 'life', img: '/images/insurers/hdfc-life.png', tag: 'Sar Utha Ke Jiyo' },
  { id: 'sbi-life', name: 'SBI Life Insurance', short: 'SBI Life', category: 'life', img: '/images/insurers/sbi-life.png', tag: 'Apne Liye. Apno Ke Liye.' },
  { id: 'icici-prudential', name: 'ICICI Prudential Life Insurance', short: 'ICICI Prudential', category: 'life', img: '/images/insurers/icici-prudential.png', tag: 'iProtect Smart' },
  { id: 'tata-aia', name: 'Tata AIA Life Insurance', short: 'Tata AIA', category: 'life', img: '/images/insurers/tata-aia.png', tag: 'High Claim Ratio' },
  { id: 'axis-max-life', name: 'Axis Max Life Insurance', short: 'Max Life', category: 'life', img: '/images/insurers/axis-max-life.png', tag: '99.5% Claim Ratio' },
  { id: 'bajaj-allianz', name: 'Bajaj Allianz Life & General', short: 'Bajaj Allianz', category: 'life', img: '/images/insurers/bajaj-allianz.png', tag: 'Caringly Yours' },
  { id: 'aditya-birla-capital', name: 'Aditya Birla Capital', short: 'Aditya Birla', category: 'life', img: '/images/insurers/aditya-birla-capital.png', tag: 'Wealth & Term' },
  { id: 'pnb-metlife', name: 'PNB MetLife India Insurance', short: 'PNB MetLife', category: 'life', img: '/images/insurers/pnb-metlife.png', tag: 'Milkar Life Aage Badhein' },
  { id: 'canara-hsbc', name: 'Canara HSBC Life Insurance', short: 'Canara HSBC', category: 'life', img: '/images/insurers/canara-hsbc.png', tag: 'Guaranteed Returns' },
  { id: 'indiafirst-life', name: 'IndiaFirst Life Insurance', short: 'IndiaFirst', category: 'life', img: '/images/insurers/indiafirst-life.png', tag: 'Govt. Bank Backed' },
  { id: 'aegon-life', name: 'Aegon Life Insurance', short: 'Aegon Life', category: 'life', img: '/images/insurers/aegon-life.png', tag: 'Digital Term' },
  { id: 'aviva', name: 'Aviva Life Insurance', short: 'Aviva', category: 'life', img: '/images/insurers/aviva.png', tag: 'Child & Wealth Plans' },
  { id: 'exide-life', name: 'Exide Life Insurance', short: 'Exide Life', category: 'life', img: '/images/insurers/exide-life.png', tag: 'Long Term Protection' },
  { id: 'generali-central', name: 'Generali Central Life Insurance', short: 'Generali Central', category: 'life', img: '/images/insurers/generali-central.png', tag: 'Global Trust' },
  { id: 'shriram-life', name: 'Shriram Life Insurance', short: 'Shriram Life', category: 'life', img: '/images/insurers/shriram-life.png', tag: 'Affordable Coverage' },
  
  // Motor, General, SME & Commercial Insurers
  { id: 'tata-aig', name: 'Tata AIG General Insurance', short: 'Tata AIG', category: 'motor', img: '/images/insurers/tata-aig.png', tag: 'Comprehensive Auto' },
  { id: 'digit', name: 'Go Digit General Insurance', short: 'Go Digit', category: 'motor', img: '/images/insurers/digit.png', tag: 'Paperless Claims' },
  { id: 'sbi-general', name: 'SBI General Insurance', short: 'SBI General', category: 'motor', img: '/images/insurers/sbi-general.png', tag: 'Suraksha Aur Bharosa' },
  { id: 'new-india-assurance', name: 'New India Assurance Co.', short: 'New India Assurance', category: 'general', img: '/images/insurers/new-india-assurance.png', tag: 'Govt. of India' },
  { id: 'oriental-insurance', name: 'The Oriental Insurance Company', short: 'Oriental Insurance', category: 'general', img: '/images/insurers/oriental-insurance.png', tag: 'Govt. of India' },
  { id: 'national-insurance', name: 'National Insurance Company', short: 'National Insurance', category: 'general', img: '/images/insurers/national-insurance.png', tag: 'Govt. of India' },
  { id: 'united-india', name: 'United India Insurance Co.', short: 'United India', category: 'general', img: '/images/insurers/united-india.png', tag: 'Govt. of India' },
  { id: 'chola-ms', name: 'Cholamandalam MS General Insurance', short: 'Chola MS', category: 'motor', img: '/images/insurers/chola-ms.png', tag: 'Motor & Fleet' },
  { id: 'iffco-tokio', name: 'IFFCO-TOKIO General Insurance', short: 'IFFCO-TOKIO', category: 'motor', img: '/images/insurers/iffco-tokio.png', tag: 'Muskurate Raho' },
  { id: 'royal-sundaram', name: 'Royal Sundaram General Insurance', short: 'Royal Sundaram', category: 'motor', img: '/images/insurers/royal-sundaram.png', tag: 'Auto & Travel' },
  { id: 'navi', name: 'Navi General Insurance', short: 'Navi', category: 'motor', img: '/images/insurers/navi.png', tag: 'Digital EMI' },
  { id: 'zuno', name: 'Zuno General Insurance (Edelweiss)', short: 'Zuno (Edelweiss)', category: 'motor', img: '/images/insurers/zuno.png', tag: 'Smart Pay-As-You-Drive' },
  { id: 'zurich-kotak', name: 'Zurich Kotak General Insurance', short: 'Zurich Kotak', category: 'general', img: '/images/insurers/zurich-kotak.png', tag: 'Kotak Group' },
  { id: 'universal-sompo', name: 'Universal Sompo General Insurance', short: 'Universal Sompo', category: 'general', img: '/images/insurers/universal-sompo.png', tag: 'SME & Auto' },
  { id: 'raheja-qbe', name: 'Raheja QBE General Insurance', short: 'Raheja QBE', category: 'general', img: '/images/insurers/raheja-qbe.png', tag: 'Business Assets' },
  { id: 'liberty-general', name: 'Liberty General Insurance', short: 'Liberty General', category: 'motor', img: '/images/insurers/liberty-general.png', tag: 'Motor & Fire' },
  { id: 'magma-hdi', name: 'Magma HDI General Insurance', short: 'Magma HDI', category: 'general', img: '/images/insurers/magma-hdi.png', tag: 'Rural & SME' },
  { id: 'indusind', name: 'IndusInd General Insurance', short: 'IndusInd', category: 'general', img: '/images/insurers/indusind.png', tag: 'Business Insurance' },
  { id: 'bharti-axa', name: 'Bharti AXA General & Life', short: 'Bharti AXA', category: 'general', img: '/images/insurers/bharti-axa.png', tag: 'Protection Plans' }
];

export const BANKING_PARTNERS = [
  { name: "State Bank of India", short: "SBI Bank", category: "Public Sector", tag: "Lowest Home Loan Rates" },
  { name: "HDFC Bank", short: "HDFC Bank", category: "Private Bank", tag: "Fast Business Loans" },
  { name: "ICICI Bank", short: "ICICI Bank", category: "Private Bank", tag: "Pre-approved Mortgages" },
  { name: "Axis Bank", short: "Axis Bank", category: "Private Bank", tag: "MSME Working Capital" },
  { name: "Kotak Mahindra Bank", short: "Kotak Bank", category: "Private Bank", tag: "Term Loans & OD" },
  { name: "Punjab National Bank", short: "PNB", category: "Public Sector", tag: "PMEGP / Mudra Desk" },
  { name: "Bank of Baroda", short: "Bank of Baroda", category: "Public Sector", tag: "Subsidy Loans" },
  { name: "SIDBI & MSME / Mudra", short: "SIDBI / Mudra", category: "Govt. Institution", tag: "Up to 35% Govt. Subsidy" },
  { name: "Bajaj Finserv", short: "Bajaj Finserv", category: "NBFC", tag: "Instant Doctor / CA Loans" },
  { name: "Tata Capital", short: "Tata Capital", category: "NBFC", tag: "Corporate Loan Advisory" }
];
