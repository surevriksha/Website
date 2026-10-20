// Master Services Catalog for SureVriksha
// Designed for crystal-clear clarity: "Kya Hai, Kiske Liye Hai, aur Kaise Milega"

export const SERVICE_PERSONAS = [
  {
    id: 'family',
    title: '👨‍👩‍👧 For Families & Salaried Individuals',
    short: 'Family & Salaried',
    tagline: 'Protect your health, family future, vehicle, and maximize income tax refunds',
    recommendedIds: ['health', 'term', 'motor', 'itr', 'investment', 'home']
  },
  {
    id: 'business',
    title: '🏢 For Business Owners, MSMEs & Startups',
    short: 'Business & Startups',
    tagline: 'Get government subsidy loans up to 35%, 3-day GST, MCA company setup, and GEM tenders',
    recommendedIds: ['loan-advisory', 'gst', 'company', 'msme', 'gem', 'oem', 'dsc-trademark', 'fssai-iso', 'stock-audit']
  },
  {
    id: 'citizen',
    title: '📜 For Citizens & Students (Jana Seva Kendra)',
    short: 'Citizens & Students',
    tagline: 'Apply for official government certificates, PAN/Aadhaar corrections, and passport without queues',
    recommendedIds: ['certificates', 'id-corrections', 'passport-visa', 'rto', 'student-desk', 'eshram-welfare']
  },
  {
    id: 'nri',
    title: '🌍 For Non-Resident Indians (Global NRI Desk)',
    short: 'NRI Global Desk',
    tagline: 'Healthcare for parents in India, worldwide term life, Form 13 Lower TDS, and property tax advice',
    recommendedIds: ['health', 'term', 'itr', 'loan-advisory']
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services (26+)', icon: '🌟' },
  { id: 'insurance-services', label: 'Insurance & Wealth', icon: '🛡️' },
  { id: 'tax-services', label: 'Tax, Corporate & Loans', icon: '💼' },
  { id: 'govt-services', label: 'Govt & Student Services', icon: '📜' }
];

export const ALL_SERVICES = [
  // --- Category 1: Insurance & Wealth ---
  {
    id: 'health',
    title: 'Health Insurance',
    category: 'insurance-services',
    categoryLabel: 'Insurance & Wealth',
    icon: '🏥',
    gradient: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
    simpleExplain: 'Hospital & ICU bills se 100% cashless azaadi. 10,000+ hospitals mein bina jeb se paisa diye admit hone ki suvidha.',
    forWhom: 'Self, Spouse, Children & Senior Citizen Parents',
    turnaround: 'Instant Policy Approval',
    desc: 'Cashless treatment at 10,000+ network hospitals. Family floater, individual & senior citizen plans with zero room-rent capping.',
    link: '/services?tab=insurance#health',
    badge: 'Most Essential',
    features: ['10,000+ Hospitals', 'Zero Room Rent Capping', '100% Restore Benefit', 'Sec 80D Tax Benefit'],
    docsRequired: ['Aadhaar Card', 'PAN Card', 'Pre-existing medical reports (if any)'],
    howItWorks: [
      'Share your family age & coverage requirement',
      'Compare 30+ top plans side-by-side with zero commission markup',
      'Instant digital policy issue + 24/7 dedicated cashless claim assistance'
    ]
  },
  {
    id: 'term',
    title: 'Term Life Insurance',
    category: 'insurance-services',
    categoryLabel: 'Insurance & Wealth',
    icon: '🛡️',
    gradient: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
    simpleExplain: 'Agar aapko kuch ho jaye, toh aapki family ko ₹1 Crore se ₹5 Crore ka 100% tax-free paisa milta hai taaki unka lifestyle surakshit rahe.',
    forWhom: 'Anyone who earns and has financial dependents',
    turnaround: '24-48 Hours Sanction',
    desc: '₹1 Crore financial cover starting at ₹500/month. 100% tax-free claim settlement for family protection.',
    link: '/services?tab=insurance#term',
    badge: '₹1 Cr @ ₹500/mo',
    features: ['₹1 Cr Cover from ₹500/mo', 'Critical Illness Rider', 'Return of Premium Option', 'IRDAI Certified'],
    docsRequired: ['PAN Card', 'Aadhaar Card', '3 Months Salary Slips / ITR'],
    howItWorks: [
      'Calculate family dependency & ideal sum assured',
      'Choose from top life insurers (LIC, HDFC, SBI, Max)',
      'Video tele-medical verification & policy dispatched'
    ]
  },
  {
    id: 'motor',
    title: 'Motor Insurance (Car & Bike)',
    category: 'insurance-services',
    categoryLabel: 'Insurance & Wealth',
    icon: '🚗',
    gradient: 'linear-gradient(135deg, #fff8e1, #ffecb3)',
    simpleExplain: 'Accident, theft ya damage hone par car aur bike ki cashless garage repair. Zero-depreciation aur roadside help included.',
    forWhom: 'All Two-Wheeler, Car & Commercial Vehicle Owners',
    turnaround: 'Instant in 5 Minutes',
    desc: 'Comprehensive car and two-wheeler insurance with cashless garage repairs, zero-depreciation, and 24/7 roadside assistance.',
    link: '/services?tab=insurance#motor',
    badge: 'Instant Renewal',
    features: ['Cashless Garages', 'Zero-Depreciation Add-on', 'Engine Protection', '24/7 Roadside Assistance'],
    docsRequired: ['Previous Policy Copy', 'Vehicle RC'],
    howItWorks: [
      'Send RC photo on WhatsApp',
      'Compare quotes with up to 50% No-Claim Bonus discount',
      'Instant digital PDF policy generated'
    ]
  },
  {
    id: 'travel',
    title: 'International Travel Insurance',
    category: 'insurance-services',
    categoryLabel: 'Insurance & Wealth',
    icon: '✈️',
    gradient: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
    simpleExplain: 'Videsh yatra par emergency hospital kharche, flight delay, visa approval aur bag gum hone par poori bharpai.',
    forWhom: 'Overseas Travelers, Students Studying Abroad & Tourists',
    turnaround: 'Instant Online Issue',
    desc: 'International Schengen/USA/UK and domestic travel protection. Covers medical emergencies, flight cancellations, and baggage loss.',
    link: '/services?tab=insurance#travel',
    features: ['Schengen & US Visa Compliant', 'Emergency Hospitalization', 'Lost Baggage / Passport', 'Flight Delay Cover'],
    docsRequired: ['Passport Copy', 'Travel Dates / Flight Ticket'],
    howItWorks: [
      'Select destination country & travel duration',
      'Receive official embassy-approved insurance certificate',
      '24/7 worldwide emergency helpline'
    ]
  },
  {
    id: 'home',
    title: 'Home & Property Insurance',
    category: 'insurance-services',
    categoryLabel: 'Insurance & Wealth',
    icon: '🏠',
    gradient: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
    simpleExplain: 'Aapke ghar ki deewaron aur andar ke saamaan (electronics, jewellery, furniture) ka aag, toofan aur chori se suraksha.',
    forWhom: 'Homeowners, Flat Owners & Renters',
    turnaround: 'Same Day Cover',
    desc: 'Safeguard your most valuable asset against fire, flood, cyclones, earthquakes, and burglary for building and contents.',
    link: '/services?tab=insurance#home',
    features: ['Building + Content Cover', 'Natural Calamities & Floods', 'Theft & Burglary', 'Nominal Premium'],
    docsRequired: ['Property Address Proof', 'Approximate Value of Contents'],
    howItWorks: [
      'Specify carpet area & estimated content value',
      'Instant policy issuance with zero pre-inspection',
      'Complete claim assistance for any accidental damage'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial & Marine Insurance',
    category: 'insurance-services',
    categoryLabel: 'Insurance & Wealth',
    icon: '🏭',
    gradient: 'linear-gradient(135deg, #e0f2f1, #b2dfdb)',
    desc: 'Factory fire insurance, transit marine cargo, machinery breakdown, workmen compensation, and public liability.',
    simpleExplain: 'Factory, warehouse, dukaan aur transit mein maal ki suraksha. Mazdooron ke liye mandatory Workmen Compensation.',
    forWhom: 'Factory Owners, Wholesalers, Transporters & Contractors',
    turnaround: '2-3 Business Days',
    link: '/services?tab=insurance#commercial',
    features: ['Industrial Risk Cover', 'Marine Transit Goods', 'Workmen Compensation', 'Machinery Breakdown'],
    docsRequired: ['Business GST / Trade License', 'Stock / Asset Valuation'],
    howItWorks: [
      'Site or transit risk inspection & assessment',
      'Tailored commercial quotation with risk mitigation clauses',
      'Annual policy underwriting & compliance support'
    ]
  },
  {
    id: 'group-insurance',
    title: 'Group Health (GMC & GPA)',
    category: 'insurance-services',
    categoryLabel: 'Insurance & Wealth',
    icon: '👥',
    gradient: 'linear-gradient(135deg, #ede7f6, #d1c4e9)',
    desc: 'Cost-effective group medical (GMC), group personal accident (GPA), and group term life for companies of 5 to 5,000 employees.',
    simpleExplain: 'Apni company ke employees aur unki family ko medical cover dein. Day-1 se pre-existing bimariyan aur delivery covered.',
    forWhom: 'Startups, Small Businesses & Corporate Employers (5+ Staff)',
    turnaround: '3-5 Business Days',
    link: '/services?tab=insurance#group-insurance',
    badge: 'For Employers',
    features: ['Day-1 Pre-existing Covered', 'Maternity Benefits', 'Custom Co-pay Splits', 'Tax Deduction under Sec 37'],
    docsRequired: ['Employee Census Sheet (Name, DOB, Relation)', 'Company GSTIN'],
    howItWorks: [
      'Submit employee count and desired cover amount',
      'We negotiate lowest corporate group premiums across insurers',
      'Digital employee cashless cards & portal activation'
    ]
  },
  {
    id: 'investment',
    title: 'Investment, SIP & Wealth Planning',
    category: 'insurance-services',
    categoryLabel: 'Insurance & Wealth',
    icon: '📈',
    gradient: 'linear-gradient(135deg, #e8f5e9, #a5d6a7)',
    desc: 'Systematic Investment Plans (SIP), mutual fund portfolios, NPS pension, capital gains bonds, and retirement planning.',
    simpleExplain: 'Chhoti bachat se bada corpus banayein. SIP, Mutual Funds, NPS aur tax-saving ELSS mein expert guidance ke saath invest karein.',
    forWhom: 'Salaried, Young Professionals & Retirement Seekers',
    turnaround: 'Instant Online Account',
    link: '/services?tab=insurance#investment',
    features: ['Disciplined SIP Advisory', 'ELSS Tax Saver (Sec 80C)', 'National Pension Scheme', 'Goal-based Planning'],
    docsRequired: ['PAN Card', 'Aadhaar Card', 'Cancelled Cheque / Bank Statement'],
    howItWorks: [
      'Risk profiling and financial goal mapping',
      'Curated asset allocation portfolio recommendation',
      'Paperless digital KYC & automated monthly SIP setup'
    ]
  },
  {
    id: 'loan-advisory',
    title: 'Business Loans & Govt Subsidies',
    category: 'insurance-services',
    categoryLabel: 'Insurance & Wealth',
    icon: '💰',
    gradient: 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
    desc: 'Home loans, business loans, Mudra loans, and PMEGP subsidy loans with maximum capital subsidy through 30+ partner banks.',
    simpleExplain: 'Naya business ya expansion ke liye bank loan. PMEGP mein 35% tak sarkari subsidy aur Mudra mein ₹20 Lakhs tak collateral-free loan.',
    forWhom: 'Entrepreneurs, MSMEs, Retailers, Women Founders & Home Buyers',
    turnaround: '7-14 Days Sanction',
    link: '/services?tab=insurance#loan-advisory',
    badge: 'Up to 35% Subsidy',
    features: ['PMEGP 15%-35% Subsidy', 'Mudra up to ₹20 Lakhs', 'Home & Mortgage Loans', '30+ Top Banks'],
    docsRequired: ['PAN & Aadhaar', 'Bank Statements (12 Months)', 'Project Quotation', 'Udyam Certificate'],
    howItWorks: [
      'Assess subsidy eligibility under central & state schemes',
      'Prepare Bank-grade Detailed Project Report (DPR) & CMA data',
      'Direct application & liaisoning with partner banks until disbursement'
    ]
  },

  // --- Category 2: Tax, Corporate & Business ---
  {
    id: 'gst',
    title: 'GST Registration & Return Filing',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '🧾',
    gradient: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
    desc: 'Hassle-free GST registration in 3 days. Monthly GSTR-1, GSTR-3B filings, input tax credit (ITC) reconciliation, and audit representation.',
    simpleExplain: 'Naye business ke liye GST number sirf 3 din mein. Har mahine timely return filing taaki department se koi notice ya penalty na aaye.',
    forWhom: 'Traders, Manufacturers, Service Providers & Ecommerce Sellers',
    turnaround: '3 Business Days',
    link: '/services?tab=tax#gst',
    badge: 'Popular',
    features: ['3-Day GSTIN Approval', 'Monthly Filing & ITC Match', 'LUT Export Filing', 'Department Notice Handling'],
    docsRequired: ['PAN & Aadhaar', 'Electricity Bill / Rent Agreement of Shop', 'Bank Cheque'],
    howItWorks: [
      'Document submission on WhatsApp or email',
      'Government GST portal filing with geo-tagging assistance',
      'GSTIN Certificate delivery + automated monthly reminder for returns'
    ]
  },
  {
    id: 'itr',
    title: 'Income Tax Return (ITR) Filing',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #e8f5e9, #a5d6a7)',
    desc: 'Accurate ITR filing for salaried, business, stock traders, and NRIs. Double-check Old vs New regime to maximize tax refunds legally.',
    simpleExplain: 'Salary, dukan ya share market kamai ka ITR file karein. Old vs New regime compare karke maximum tax refund bank account mein wapas layein.',
    forWhom: 'Salaried Employees, Business Owners, Freelancers, Doctors & NRIs',
    turnaround: 'Same Day / 24 Hours',
    link: '/services?tab=tax#itr',
    badge: 'Max Refund',
    features: ['ITR-1 to ITR-7 Filings', 'Capital Gains Calculations', 'Old vs New Regime Review', 'Maximum Legal Refund'],
    docsRequired: ['Form 16 / Salary Slips', 'Bank Statements', 'PAN & Aadhaar Card', 'Investment Proofs'],
    howItWorks: [
      'Share Form 16 or bank statements',
      'Chartered advisor prepares dual-computation (Old vs New)',
      'E-filing on Income Tax portal + Instant acknowledgement receipt'
    ]
  },
  {
    id: 'company',
    title: 'Company & Startup Registration',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '🏢',
    gradient: 'linear-gradient(135deg, #e8eaf6, #c5cae9)',
    desc: 'Register Private Limited Company, LLP, One Person Company (OPC), or Partnership Firm with MCA, PAN, TAN & DIN in 7-10 days.',
    simpleExplain: 'Apne business ko official Private Limited ya LLP banayein. MCA approval, PAN, TAN, DIN aur bank account sab ek hi jagah.',
    forWhom: 'Startup Founders, Co-founders & Scaling Businesses',
    turnaround: '7-10 Business Days',
    link: '/services?tab=tax#company',
    badge: 'MCA Certified',
    features: ['MCA Approval in 7 Days', 'PAN, TAN & DIN Included', 'MoA & AoA Drafting', 'Free Corporate Bank Help'],
    docsRequired: ['Directors PAN & Aadhaar', 'Passport Photos', 'Office Address Proof (Electricity bill + NOC)'],
    howItWorks: [
      'Name reservation approval on MCA portal',
      'Drafting digital MoA & AoA + Digital Signatures (DSC)',
      'Certificate of Incorporation issued with PAN & TAN'
    ]
  },
  {
    id: 'msme',
    title: 'MSME / Udyam Certification',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '📜',
    gradient: 'linear-gradient(135deg, #fff8e1, #ffecb3)',
    desc: 'Official Udyam registration to unlock priority bank loans, lower interest rates, government tender exemptions, and MSME subsidies.',
    simpleExplain: 'Sarkari MSME Certificate. Isse bank loan mein discount, tender fee maaf, aur sarkari scheme ke laabh milte hain.',
    forWhom: 'Small Businesses, Workshops, Retailers & Manufacturers',
    turnaround: 'Same Day / 24 Hours',
    link: '/services?tab=tax#msme',
    features: ['Priority Sector Lending', 'Tender Fee Waiver', 'Electricity Tariff Subsidy', 'Govt Scheme Benefits'],
    docsRequired: ['Aadhaar Card (Mobile linked)', 'PAN Card', 'Business Name & Bank Details'],
    howItWorks: [
      'Provide basic enterprise details and turnover estimate',
      'Online submission on National Udyam Portal',
      'Official Government Udyam Certificate with QR code delivered'
    ]
  },
  {
    id: 'gem',
    title: 'GEM Portal & Tender Bidding',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '💼',
    gradient: 'linear-gradient(135deg, #e8eaf6, #c5cae9)',
    desc: 'Government e-Marketplace vendor onboarding, primary seller profile, catalogue listing, caution money setup, and tender bidding support.',
    simpleExplain: 'Sarkar ko direct maal bechein. Government e-Marketplace (GEM) par vendor registration, product listing aur tender bidding.',
    forWhom: 'Suppliers, Contractors, IT Companies & Manufacturers',
    turnaround: '3-5 Business Days',
    link: '/services?tab=tax#gem',
    features: ['GEM Seller Registration', 'Cataloging & Product Pairing', 'Tender Search & Documentation', 'Bid Participation'],
    docsRequired: ['GSTIN', 'PAN', 'Udyam Certificate', 'Bank Account Verification'],
    howItWorks: [
      'Primary seller profile creation & Aadhaar/PAN authentication',
      'Caution money deposit management & product cataloging',
      'Live bid discovery, technical document preparation & bidding'
    ]
  },
  {
    id: 'oem',
    title: 'OEM Vendor Registration (GEM)',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '⚙️',
    gradient: 'linear-gradient(135deg, #fff8e1, #ffecb3)',
    desc: 'Original Equipment Manufacturer (OEM) vendor dashboard approval on GEM. Manage brand creation, QCI vendor assessment, and reseller authorizations.',
    simpleExplain: 'Agar aap khud product banate hain, toh GEM par OEM ban kar apna brand register karein aur resellers ko authorization dein.',
    forWhom: 'Original Equipment Manufacturers, Brand Owners & Factories',
    turnaround: '7-14 Business Days',
    link: '/services?tab=tax#oem',
    badge: 'Specialized',
    features: ['QCI Assessment Guidance', 'Brand Registration on GEM', 'Reseller Authorization Codes', 'Exclusive Catalog Control'],
    docsRequired: ['Trademark Certificate / Brand Proof', 'Factory License / Udyam', 'Machinery List & Quality Testing Setup'],
    howItWorks: [
      'Brand validation on GEM portal',
      'QCI Vendor Assessment documentation & physical/video desktop audit',
      'OEM dashboard approval & reseller pairing capability unlocked'
    ]
  },
  {
    id: 'stock-audit',
    title: 'Stock Audit & Asset Valuation',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '📋',
    gradient: 'linear-gradient(135deg, #e8f5e9, #a5d6a7)',
    desc: 'Independent physical stock audit, asset verification, valuation reports, and bank credit monitoring for corporates and MSMEs.',
    simpleExplain: 'Bank CC/OD limit ke liye godown ke stock aur machinery ka physical verification aur CA certified valuation report.',
    forWhom: 'Borrowers with Bank CC/OD Limits & Corporate Warehouses',
    turnaround: '3-7 Business Days',
    link: '/services?tab=tax#stock-audit',
    features: ['Physical Stock Verification', 'Bank Drawing Power Audit', 'Asset Tagging & Valuation', 'Statutory Compliance Report'],
    docsRequired: ['Stock Register / ERP Sheet', 'Bank Sanction Letter', 'Recent Financials'],
    howItWorks: [
      'Physical site visit by certified audit executive',
      'Quantitative stock count, aging analysis & valuation',
      'Bank-compliant audit certificate with Drawing Power computation'
    ]
  },
  {
    id: 'pf-esic',
    title: 'PF/EPF & ESIC Payroll Compliance',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '👥',
    gradient: 'linear-gradient(135deg, #ede7f6, #d1c4e9)',
    desc: 'Provident Fund (EPFO) and Employee State Insurance (ESIC) employer registration, monthly return filings, and employee UAN generation.',
    simpleExplain: 'Karamchariyon ka PF aur ESI account banayein aur har mahine challan file karein taaki labor inspection mein koi dikkat na aaye.',
    forWhom: 'Companies & Contractors with 10+ or 20+ Employees',
    turnaround: '3-5 Business Days',
    link: '/services?tab=tax#pf-esic',
    features: ['EPF & ESIC Code Allotment', 'Monthly ECR Challans', 'UAN & KYC Seeding', 'Inspection & Notice Help'],
    docsRequired: ['Company Registration / GST', 'Staff Salary Sheet', 'Cancelled Cheque'],
    howItWorks: [
      'Employer code allotment on Shram Suvidha portal',
      'Employee UAN and IP registration',
      'Monthly payroll calculation and electronic challan generation'
    ]
  },
  {
    id: 'dsc-trademark',
    title: 'Trademark, DSC & Brand Protection',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '®️',
    gradient: 'linear-gradient(135deg, #e0f2f1, #80cbc4)',
    desc: 'Protect your brand name, logo, and inventions. Class 3 Digital Signature Certificate (DSC) for tenders, MCA, and tax filings.',
    simpleExplain: 'Apne brand name aur logo par ™ lagayein taaki koi aur copy na kar sake. Sarkari tender aur MCA ke liye Class 3 Digital Signature (DSC).',
    forWhom: 'Brand Owners, Contractors, CAs & Directors',
    turnaround: 'DSC: 1 Hour | TM: 24 Hours',
    link: '/services?tab=tax#dsc-trademark',
    features: ['Trademark TM Search & Filing', 'Class 3 DSC USB Token', 'Copyright & Patent Advisory', 'Objection Reply Assistance'],
    docsRequired: ['PAN & Aadhaar', 'Brand Name & Logo File', 'Applicant Mobile & Email'],
    howItWorks: [
      'Public trademark search to confirm availability',
      'Class identification and application filing under TM Act',
      'TM application number generated in 24 hours to start using ™'
    ]
  },
  {
    id: 'fssai-iso',
    title: 'FSSAI Food License & ISO Quality',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '🏅',
    gradient: 'linear-gradient(135deg, #e8f5e9, #81c784)',
    desc: 'Basic, State and Central FSSAI food licenses for food businesses. ISO 9001 (Quality), 14001, 22000, and BIS certifications.',
    simpleExplain: 'Food business (restaurant, cloud kitchen, food packaging) ke liye FSSAI license. Tenders aur quality standard ke liye ISO certification.',
    forWhom: 'Food Businesses, Cloud Kitchens, Manufacturers & Exporters',
    turnaround: '5-7 Business Days',
    link: '/services?tab=tax#fssai-iso',
    features: ['FSSAI Food License', 'ISO 9001 Quality Certified', 'BIS / ISI Testing Support', 'Tender Eligibility Standard'],
    docsRequired: ['PAN & Aadhaar', 'Shop/Kitchen Address Proof', 'Food Item Category List'],
    howItWorks: [
      'Determine license tier (Basic, State, or Central FSSAI)',
      'Document filing on FoSCoS portal with food safety declaration',
      'Official FSSAI 14-digit registration number granted'
    ]
  },
  {
    id: 'startup-iec',
    title: 'Startup India & Export Code (IEC)',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #fff3e0, #ffb74d)',
    desc: 'DPIIT Startup India recognition for 3-year income tax holiday, angel tax exemption, seed funds, and DGFT Import Export Code (IEC).',
    simpleExplain: 'DPIIT Startup certificate se 3 saal tak income tax chhoot aur sarkari seed funding. Videsh maal bhejne ke liye DGFT IEC Code.',
    forWhom: 'Tech Startups, Innovators, Exporters & Importers',
    turnaround: '2-4 Business Days',
    link: '/services?tab=tax#startup-iec',
    features: ['DPIIT Startup Recognition', '3-Year Tax Exemption 80-IAC', 'Import Export Code (IEC)', 'Investor Connect Assistance'],
    docsRequired: ['Company Certificate of Incorporation', 'Pitch Deck / Business Note', 'Bank Account'],
    howItWorks: [
      'File application on Startup India portal with innovation summary',
      'Apply for DGFT Import Export Code (IEC)',
      'Certificate issued with tax holiday & patent fee concession benefits'
    ]
  },
  {
    id: 'govt-subsidies',
    title: 'Govt Subsidies & Project DPR',
    category: 'tax-services',
    categoryLabel: 'Tax, Corporate & Loans',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #e8eaf6, #7986cb)',
    desc: 'Detailed Project Report (DPR) preparation, TEV study, and subsidy application for PLI, SFURTI, and Odisha State Industrial Policy.',
    simpleExplain: 'Factory lagane ya plant lagane par sarkar se crores ki subsidy milti hai. Hum aapka bank-grade project report (DPR) banate hain.',
    forWhom: 'Manufacturing Units, Food Processing, Solar & Agro Projects',
    turnaround: '7-14 Business Days',
    link: '/services?tab=tax#govt-subsidies',
    badge: 'Capital Grant',
    features: ['Bank-Grade DPR Modeling', 'PLI Scheme Filing', 'State Capital & Power Subsidies', 'Industrial Land Allotment'],
    docsRequired: ['Land / Factory Details', 'Machinery Quotations', 'Promoter KYC'],
    howItWorks: [
      'Project cost & viability evaluation',
      'Preparation of 5-year Techno-Economic Viability (TEV) & DPR',
      'Filing on state industrial portal & claim disbursement tracking'
    ]
  },

  // --- Category 3: Government, CSC & Student Services ---
  {
    id: 'certificates',
    title: 'Govt Certificates (CSC Jana Seva)',
    category: 'govt-services',
    categoryLabel: 'Govt & Student Services',
    icon: '📜',
    gradient: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
    desc: 'Official Jana Seva Kendra (CSC) application for Caste, Residence, Income, Legal Heir, Solvency, Birth, and Death certificates.',
    simpleExplain: 'Bina tehsil ke chakkar kaate online Jati, Niwas, Aay, Legal Heir aur Janm/Mrityu praman patra banwayein.',
    forWhom: 'General Citizens, Students, Job Applicants & Beneficiaries',
    turnaround: '3-7 Working Days',
    link: '/services?tab=govt#certificates',
    badge: 'CSC Kendra',
    features: ['Caste & Income Certificate', 'Resident / Domicile Proof', 'Legal Heir & Solvency', 'Fast Online Delivery'],
    docsRequired: ['Aadhaar Card', 'Ration Card / RoR (Khatian)', 'Photo & Self-declaration'],
    howItWorks: [
      'Upload Aadhaar and land/family proofs on WhatsApp',
      'Application verification & e-district portal submission',
      'Official digitally signed government certificate delivered on WhatsApp'
    ]
  },
  {
    id: 'id-corrections',
    title: 'PAN, Aadhaar & Voter Card Changes',
    category: 'govt-services',
    categoryLabel: 'Govt & Student Services',
    icon: '🆔',
    gradient: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
    desc: 'Hassle-free corrections in name, date of birth, father’s name, address, and mobile number linkage across PAN, Aadhaar, and Voter ID.',
    simpleExplain: 'Aapke PAN card, Aadhaar ya Voter ID mein naam, janam tithi ya pata galat hai? Hum bina line mein lage theek karwate hain.',
    forWhom: 'Anyone needing ID proof correction for bank, passport or jobs',
    turnaround: '3-7 Business Days',
    link: '/services?tab=govt#id-corrections',
    features: ['PAN Name & DOB Correction', 'Aadhaar Mobile Linkage Advice', 'Voter Card EPIC Download', 'Zero Queue Assistance'],
    docsRequired: ['Supporting ID (School Certificate / Birth Certificate)', 'Existing Document Copy'],
    howItWorks: [
      'Audit mismatch between Aadhaar, Matric certificate & PAN',
      'File official rectification form with verified gazette/gazetted officer proofs',
      'Updated document delivered digitally and by speed post'
    ]
  },
  {
    id: 'rto',
    title: 'RTO & Driving License Desk',
    category: 'govt-services',
    categoryLabel: 'Govt & Student Services',
    icon: '🚘',
    gradient: 'linear-gradient(135deg, #fff8e1, #ffecb3)',
    desc: 'Learner’s license (LL), permanent driving license (DL), renewal, address change, duplicate DL, vehicle registration, and RC transfer.',
    simpleExplain: 'Driving License banana, renew karna, ya purani gaadi ka RC apne naam karwana — bina kisi pareshani ke online.',
    forWhom: 'Vehicle Buyers, New Drivers & License Renewal Applicants',
    turnaround: 'Fast Track Appointment',
    link: '/services?tab=govt#rto',
    features: ['Learner & Permanent DL', 'DL Renewal & International Permit', 'RC Ownership Transfer', 'Hypothecation Termination'],
    docsRequired: ['Aadhaar Card', 'Blood Group Proof', 'Vehicle RC (for transfer)'],
    howItWorks: [
      'Online application on Sarathi / Vahan portal',
      'Slot booking for computerized test or biometric slot',
      'Driving License / RC dispatched directly to your home'
    ]
  },
  {
    id: 'passport-visa',
    title: 'Passport & VISA Services',
    category: 'govt-services',
    categoryLabel: 'Govt & Student Services',
    icon: '🛂',
    gradient: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
    desc: 'Complete online application, appointment scheduling, and document verification for Fresh Passport, Tatkaal, Renewal, and Tourist/Work VISAs.',
    simpleExplain: 'Naya Passport, Tatkaal passport ya visa apply karein. Document verification aur slot booking sab hamare expert guidance mein.',
    forWhom: 'First-time Passport Applicants, Hajj/Umrah Travelers, Tourists & Students',
    turnaround: 'Instant Appointment Booking',
    link: '/services?tab=govt#passport-visa',
    badge: 'Tatkaal Support',
    features: ['Fresh & Tatkaal Passport', 'Passport Renewal & Damaged Reissue', 'Police Clearance Certificate (PCC)', 'Global Tourist VISA Help'],
    docsRequired: ['Aadhaar Card', 'PAN Card', '10th Certificate (for Non-ECR)', 'Electricity Bill'],
    howItWorks: [
      'Pre-verification of documents to eliminate PSK rejections',
      'PSK / Post Office Passport Kendra appointment slot booking',
      'Step-by-step guidance until police verification and home delivery'
    ]
  },
  {
    id: 'student-desk',
    title: 'Student Desk & Competitive Exams',
    category: 'govt-services',
    categoryLabel: 'Govt & Student Services',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
    desc: 'Application support for national and state scholarships (NSP, Odisha PRERANA), college admissions, and competitive exam form submissions.',
    simpleExplain: 'College scholarship (NSP, Medhabruti) aur sarkari naukri / entrance exam ke form bina kisi mistake ke bharwayein.',
    forWhom: 'School & College Students, Scholarship Seekers & Aspirants',
    turnaround: 'Same Day Filing',
    link: '/services?tab=govt#student-desk',
    features: ['National Scholarship Portal (NSP)', 'State Post-Matric Scholarships', 'UGC / CUET / NEET / OPSC Forms', 'Error-Free Document Upload'],
    docsRequired: ['Student ID', 'Income & Caste Certificate', 'Bank Passbook', 'Marksheets'],
    howItWorks: [
      'Eligibility matching for national and state merit scholarships',
      'High-resolution document scanning and portal data entry',
      'Confirmed submission receipt provided with application reference ID'
    ]
  },
  {
    id: 'eshram-welfare',
    title: 'E-Shram & Govt Welfare Schemes',
    category: 'govt-services',
    categoryLabel: 'Govt & Student Services',
    icon: '🌾',
    gradient: 'linear-gradient(135deg, #e8f5e9, #a5d6a7)',
    desc: 'E-Shram registration, Ayushman Bharat health card (PM-JAY), PM Kisan Samman Nidhi, Atal Pension Yojana (APY), and PMJJBY enrollments.',
    simpleExplain: 'Ayushman Bharat card (₹5 Lakhs tak free ilaj), E-Shram card aur PM Kisan samman nidhi ka laabh lene ke liye online panjikaran.',
    forWhom: 'Unorganized Workers, Farmers, Daily Wage Earners & Seniors',
    turnaround: 'Instant Online Card',
    link: '/services?tab=govt#eshram-welfare',
    badge: 'Govt Welfare',
    features: ['E-Shram UAN Card', 'Ayushman Golden Card ₹5L Cover', 'PM Kisan Subsidy Setup', 'Atal Pension Yojana (APY)'],
    docsRequired: ['Aadhaar Card (Linked with Mobile)', 'Bank Account Details', 'Ration Card'],
    howItWorks: [
      'Instant e-KYC authentication via biometric or OTP',
      'Registration on Ministry of Labour / NHA portal',
      'Laminated plastic smart card delivered'
    ]
  },
  {
    id: 'utility-services',
    title: 'Utility & Government Citizen Payments',
    category: 'govt-services',
    categoryLabel: 'Govt & Student Services',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
    desc: 'Instant online payment of electricity bills (TPCODL/TPWODL/TPSODL), water bills, municipality holding taxes, and vehicle FASTag recharges.',
    simpleExplain: 'Bijli bill, holding tax, pani bill aur FASTag recharge karein bina line mein khade hue, turant stamped sarkari receipt ke saath.',
    forWhom: 'All Residents & Commercial Establishments',
    turnaround: 'Instant 1 Minute',
    link: '/services?tab=govt#utility-services',
    features: ['Instant Electricity Bill Receipt', 'Municipal Holding Tax', 'FASTag Recharge & Issue', 'Official Stamped Receipts'],
    docsRequired: ['Consumer Number / Bill Copy / Vehicle Number'],
    howItWorks: [
      'Provide consumer ID or vehicle registration number',
      'Instant online fetch and payment clearance',
      'Download officially verified stamped digital receipt'
    ]
  }
];
