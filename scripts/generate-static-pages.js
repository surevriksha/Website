import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BLOG_POSTS } from '../src/data/blogData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const pages = [
  {
    path: 'services',
    title: 'Complete Services Portfolio — Insurance, Loans, GST, ITR & CSC | SureVriksha',
    description: 'Explore 26+ expert financial, tax, and government services by SureVriksha. 30+ insurer partners, 20+ banks for Mudra/PMEGP loans, GST return filing, and CSC certificates.'
  },
  {
    path: 'about',
    title: 'About SureVriksha Financial Advisory — 10+ Years of Trusted Service',
    description: 'Learn about SureVriksha Financial Advisory, headquartered in Kalinga Vihar, Bhubaneswar. IRDAI-certified financial planners serving 2,000+ families with a 98% claim settlement ratio.'
  },
  {
    path: 'reviews',
    title: 'Client Reviews & Ratings (4.9★) — SureVriksha Financial Advisory',
    description: 'Read 500+ verified customer reviews for health insurance claims, term life protection, GST compliance, and loan subsidies with SureVriksha.'
  },
  {
    path: 'contact',
    title: 'Contact SureVriksha — Bhubaneswar Head Office & Pan-India Desk',
    description: 'Get in touch with SureVriksha Financial Advisory. Call or WhatsApp +91 95834 25025 for a free consultation on insurance, tax filings, or loan subsidies.'
  },
  {
    path: 'blog',
    title: 'Financial Insights, Guides & Scheme Updates | SureVriksha Blog',
    description: 'Authoritative financial guides on health insurance, PMEGP & Mudra loan subsidies, GST compliance, GEM OEM registrations, and NRI tax planning.'
  },
  {
    path: 'privacy',
    title: 'Privacy Policy — SureVriksha Financial Advisory',
    description: 'SureVriksha Financial Advisory privacy policy regarding personal data protection, IRDAI compliance, and client confidential information.'
  }
];

// Add all blog posts
for (const post of BLOG_POSTS) {
  pages.push({
    path: `blog/${post.slug}`,
    title: `${post.title} | SureVriksha Guides`,
    description: post.summary
  });
}

console.log(`Generating static pre-rendered HTML entrypoints for ${pages.length} pages...`);

for (const page of pages) {
  const pageUrl = `https://www.surevriksha.in/${page.path}`;
  const targetDir = path.join(distDir, page.path);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let html = templateHtml;

  // Replace canonical tag
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${pageUrl}" />`
  );

  // Replace og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${pageUrl}" />`
  );

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/i,
    `<title>${page.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${page.description.replace(/"/g, '&quot;')}" />`
  );

  // Replace og:title & og:description
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${page.title.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${page.description.replace(/"/g, '&quot;')}" />`
  );

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
  console.log(`✓ Created: dist/${page.path}/index.html (200 OK + Unique Canonical)`);
}

console.log('All static pages successfully generated! Googlebot will now receive HTTP 200 OK on all URLs.');
