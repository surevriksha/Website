import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Lazy load pages to split bundle and speed up mobile load times
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      width: '100%'
    }}>
      <div className="spinner" style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(0, 77, 64, 0.1)',
        borderTop: '3px solid var(--green-base, #004d40)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}

function ScrollToTopAndAnimations() {
  const location = useLocation();

  // Track page views and update dynamic Canonical URL, OG tags and Titles on route changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-VBMR2BYPD6', {
        page_path: location.pathname + location.search + location.hash
      });
    }

    // Dynamically update Canonical URL for SEO indexing
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const cleanPath = location.pathname === '/' ? '' : location.pathname;
    const fullUrl = `https://www.surevriksha.in${cleanPath}`;
    canonical.setAttribute('href', fullUrl);

    // Dynamically update og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', fullUrl);
    }

    // Set page titles for primary routes (blog post handles its own title)
    if (!location.pathname.startsWith('/blog/')) {
      const pageTitles = {
        '/': 'SureVriksha — Insurance, Loans, GST, ITR & Tax Advisor in Bhubaneswar, Odisha | Pan-India & NRI Services',
        '/services': 'Complete Services Portfolio — Insurance, Loans, GST, ITR & CSC | SureVriksha',
        '/about': 'About SureVriksha Financial Advisory — 10+ Years of Trusted Service',
        '/reviews': 'Client Reviews & Ratings (4.9★) — SureVriksha Financial Advisory',
        '/contact': 'Contact SureVriksha — Bhubaneswar Head Office & Pan-India Desk',
        '/blog': 'Financial Insights, Guides & Scheme Updates | SureVriksha Blog',
        '/privacy': 'Privacy Policy — SureVriksha Financial Advisory'
      };
      if (pageTitles[location.pathname]) {
        document.title = pageTitles[location.pathname];
      }
    }
  }, [location.pathname, location.search, location.hash]);

  // Track all user clicks globally
  useEffect(() => {
    const handleGlobalClick = (event) => {
      let target = event.target;
      
      // Traverse up to find the closest interactive element (button, link, input, etc.)
      let interactiveElement = null;
      let current = target;
      for (let i = 0; i < 5; i++) {
        if (!current) break;
        const tagName = current.tagName?.toLowerCase();
        const role = current.getAttribute('role');
        
        let hasPointerCursor = false;
        try {
          const cursorStyle = window.getComputedStyle(current).cursor;
          hasPointerCursor = cursorStyle === 'pointer';
        } catch (e) {
          // Ignore style calculation errors on detached elements
        }

        if (
          tagName === 'a' || 
          tagName === 'button' || 
          tagName === 'input' || 
          tagName === 'select' || 
          tagName === 'textarea' ||
          role === 'button' || 
          role === 'link' ||
          hasPointerCursor ||
          current.classList?.contains('btn') ||
          current.classList?.contains('nav-link')
        ) {
          interactiveElement = current;
          break;
        }
        current = current.parentElement;
      }

      // If no interactive element found, fallback to the clicked element itself
      const elementToTrack = interactiveElement || target;
      
      const tag = elementToTrack.tagName?.toLowerCase() || '';
      const text = (elementToTrack.innerText || elementToTrack.textContent || '').trim().substring(0, 60);
      const id = elementToTrack.id || '';
      const classes = Array.from(elementToTrack.classList || []).join(' ');
      const href = elementToTrack.getAttribute('href') || elementToTrack.href || '';
      const ariaLabel = elementToTrack.getAttribute('aria-label') || '';
      const type = elementToTrack.getAttribute('type') || '';

      // Create a descriptive label
      const label = ariaLabel || text || id || classes || `unnamed_${tag}`;

      if (window.gtag) {
        window.gtag('event', 'user_click', {
          element_tag: tag,
          element_text: text,
          element_id: id,
          element_classes: classes,
          element_label: label,
          click_url: href,
          input_type: type,
          page_path: window.location.pathname + window.location.search
        });
      }
    };

    document.addEventListener('click', handleGlobalClick, true);
    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  // 1. Handle scroll positioning or hashes on location changes
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.search, location.hash]);

  // 2. Setup IntersectionObserver for reveal animations
  useEffect(() => {
    // --- STEP A: Reset all reveal states from previous page ---
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.remove('reveal-init', 'visible');
      el.removeAttribute('data-delay');
    });

    // --- STEP B: Create a robust IntersectionObserver ---
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        if (delay > 0) {
          setTimeout(() => {
            if (el) el.classList.add('visible');
          }, delay);
        } else {
          el.classList.add('visible');
        }
        revealObs.unobserve(el);
      });
    }, { threshold: 0.01, rootMargin: '0px 0px 100px 0px' });

    const setupRevealElements = () => {
      const revealEls = document.querySelectorAll('.reveal');
      const viewportH = window.innerHeight;

      revealEls.forEach((el) => {
        // Skip already processed
        if (el.classList.contains('visible') || el.classList.contains('reveal-init')) return;

        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < viewportH + 50;

        if (isInViewport) {
          // Element is in viewport — show it immediately (CSS animation handles fade)
          // Don't add reveal-init, just let the default .reveal animation play
          return;
        }

        // Element is below fold — hide it and observe for scroll
        const siblings = Array.from(el.parentElement.querySelectorAll('.reveal'));
        const idx = siblings.indexOf(el);
        const delay = Math.min(idx * 30, 200); // Max 200ms delay
        el.setAttribute('data-delay', delay.toString());
        el.classList.add('reveal-init');
        revealObs.observe(el);
      });
    };

    // --- STEP C: Wait for DOM paint, then set up ---
    // Use double-requestAnimationFrame to ensure the browser has painted the new page
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setupRevealElements();
      });
    });

    // --- STEP D: Watch for dynamic DOM additions (e.g. tab switches) ---
    let mutationDebounce = null;
    const mutationObs = new MutationObserver(() => {
      clearTimeout(mutationDebounce);
      mutationDebounce = setTimeout(() => {
        setupRevealElements();
      }, 50);
    });
    mutationObs.observe(document.body, { childList: true, subtree: true });

    // --- STEP E: Safety fallback — force show any stuck elements after 1.5s ---
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll('.reveal.reveal-init:not(.visible)').forEach((el) => {
        el.classList.add('visible');
      });
    }, 1500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(mutationDebounce);
      clearTimeout(fallbackTimer);
      revealObs.disconnect();
      mutationObs.disconnect();
    };
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTopAndAnimations />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
