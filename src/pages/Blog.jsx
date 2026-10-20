import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogData';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on selected category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  return (
    <main className="blog-page">
      {/* BLOG HERO */}
      <section className="page-hero">
        <div className="page-hero-eyebrow">Knowledge Center &amp; Daily Insights</div>
        <h1>
          Financial Clarity,<br />
          <em style={{ color: 'var(--gold-light)' }}>Expert Insights for India &amp; NRIs</em>
        </h1>
        <p>
          Authoritative guides, policy comparisons, government scheme updates, and practical tax-saving strategies curated by certified advisors.
        </p>
        <div className="page-hero-line"></div>
      </section>

      <div className="container" style={{ padding: '2.5rem 1.5rem 5rem 1.5rem' }}>
        {/* SEARCH AND CATEGORY BAR */}
        <div className="blog-controls-card">
          <div className="blog-search-box">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="blog-search-input"
              placeholder="Search guides, e.g. 'health insurance', 'PMEGP loan', 'GST', 'OEM GEM', 'NRI tax'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search articles"
            />
            {searchQuery && (
              <button
                type="button"
                className="blog-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>

          <div className="blog-categories-wrapper" role="tablist" aria-label="Article Categories">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`blog-category-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED POST BANNER (Only on 'all' without active search) */}
        {activeCategory === 'all' && !searchQuery && featuredPost && (
          <div className="blog-featured-card reveal">
            <div className="bfc-badge">⭐ FEATURED MASTER GUIDE</div>
            <div className="bfc-content">
              <div className="bfc-meta">
                <span className="bfc-cat">{featuredPost.category.toUpperCase()}</span>
                <span className="bfc-dot">•</span>
                <span className="bfc-read">{featuredPost.readTime}</span>
                <span className="bfc-dot">•</span>
                <span className="bfc-date">{new Date(featuredPost.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
              <h2 className="bfc-title">
                <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>
              <p className="bfc-summary">{featuredPost.summary}</p>
              <div className="bfc-tags">
                {featuredPost.tags.map((t, idx) => (
                  <span key={idx} className="blog-tag">#{t}</span>
                ))}
              </div>
              <div className="bfc-footer">
                <div className="bfc-author">
                  <div className="bfc-avatar">SV</div>
                  <div>
                    <div className="bfc-author-name">{featuredPost.author}</div>
                    <div className="bfc-author-role">{featuredPost.authorRole}</div>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.slug}`} className="btn btn-gold btn-sm">Read Full Guide →</Link>
              </div>
            </div>
          </div>
        )}

        {/* ARTICLES COUNT */}
        <div className="blog-results-meta">
          <span>Showing <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'}</span>
          {searchQuery && (
            <span> for &ldquo;<em>{searchQuery}</em>&rdquo;</span>
          )}
        </div>

        {/* ARTICLES GRID */}
        {filteredPosts.length > 0 ? (
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card reveal">
                <div className="bc-top">
                  <span className="bc-category-tag">{post.category.toUpperCase()}</span>
                  <span className="bc-read-time">⏱️ {post.readTime}</span>
                </div>
                <h3 className="bc-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="bc-summary">{post.summary}</p>
                <div className="bc-tags">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="blog-tag">#{tag}</span>
                  ))}
                </div>
                <div className="bc-divider"></div>
                <div className="bc-footer">
                  <div className="bc-author-info">
                    <span className="bc-author-icon">✍️</span>
                    <div>
                      <div className="bc-author-name">{post.author}</div>
                      <div className="bc-date">
                        {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="bc-link" aria-label={`Read article: ${post.title}`}>
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-empty-state">
            <div className="bes-icon">🔍</div>
            <h3>No articles found</h3>
            <p>Try searching with different keywords like &ldquo;insurance&rdquo;, &ldquo;loan&rdquo;, or &ldquo;GST&rdquo;.</p>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* BLOG NEWSLETTER & INQUIRY BANNER */}
        <div className="blog-cta-banner reveal">
          <div className="bcb-content">
            <div className="bcb-tag">HAVE A SPECIFIC QUERY?</div>
            <h2>Need Personalized Financial or Tax Guidance?</h2>
            <p>
              Our certified financial advisors and tax consultants in Bhubaneswar provide direct 1-on-1 consultations for families, businesses, and NRIs.
            </p>
          </div>
          <div className="bcb-actions">
            <Link to="/contact" className="btn btn-gold">Schedule Free Consultation</Link>
            <a
              href="https://wa.me/919583425025?text=Hello%20SureVriksha%2C%20I%20have%20a%20question%20regarding%20financial%20advisory%20and%20services"
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Us Anytime
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
