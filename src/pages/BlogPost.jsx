import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = useMemo(() => {
    return BLOG_POSTS.find((p) => p.slug === slug);
  }, [slug]);

  // Related posts (from same or other categories)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);
  }, [post]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | SureVriksha Insights`;

      // Inject dynamic BlogPosting schema for SEO / AEO
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.id = 'blog-post-schema';
      schemaScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': post.title,
        'description': post.summary,
        'author': {
          '@type': 'Organization',
          'name': post.author,
          'url': 'https://www.surevriksha.in'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'SureVriksha Financial Advisory',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://www.surevriksha.in/images/logo.png'
          }
        },
        'datePublished': post.date,
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://www.surevriksha.in/blog/${post.slug}`
        },
        'keywords': post.tags.join(', ')
      });
      document.head.appendChild(schemaScript);

      return () => {
        const existing = document.getElementById('blog-post-schema');
        if (existing) existing.remove();
      };
    }
  }, [post]);

  if (!post) {
    return (
      <main className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <h2>Article Not Found</h2>
        <p style={{ margin: '1rem 0 2rem 0', color: 'var(--text-light)' }}>
          The article you are looking for might have been moved or updated.
        </p>
        <Link to="/blog" className="btn btn-gold">Back to All Guides</Link>
      </main>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://www.surevriksha.in/blog/${post.slug}`;
  const shareText = encodeURIComponent(`${post.title} - SureVriksha Financial Advisory`);

  return (
    <main className="blog-post-page">
      {/* ARTICLE HEADER HERO */}
      <section className="article-hero">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="article-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/blog">Blog &amp; Guides</Link>
            <span>/</span>
            <span className="current">{post.category.toUpperCase()}</span>
          </div>

          <h1 className="article-title">{post.title}</h1>

          <div className="article-header-meta">
            <div className="ahm-author">
              <div className="ahm-avatar">SV</div>
              <div>
                <div className="ahm-name">{post.author}</div>
                <div className="ahm-role">{post.authorRole}</div>
              </div>
            </div>
            <div className="ahm-divider"></div>
            <div className="ahm-info">
              <span>📅 {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>⏱️ {post.readTime}</span>
              <span className="ahm-badge">✓ IRDAI Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <div className="container" style={{ maxWidth: '860px', padding: '2.5rem 1.5rem 5rem 1.5rem' }}>
        {/* KEY TAKEAWAYS HIGHLIGHT BOX */}
        <div className="key-takeaways-box">
          <div className="ktb-title">
            <span>💡</span> Key Highlights &amp; Summary
          </div>
          <p>{post.summary}</p>
        </div>

        {/* PARSED ARTICLE BODY */}
        <article className="article-body">
          {post.content.split('\n\n').map((paragraph, idx) => {
            const p = paragraph.trim();
            if (!p) return null;

            if (p.startsWith('## ')) {
              return <h2 key={idx}>{p.replace('## ', '')}</h2>;
            }
            if (p.startsWith('### ')) {
              return <h3 key={idx}>{p.replace('### ', '')}</h3>;
            }
            if (p.startsWith('> ')) {
              return (
                <blockquote key={idx} className="article-quote">
                  {p.replace('> ', '').replace(/\*\*(.*?)\*\*/g, '$1')}
                </blockquote>
              );
            }
            if (p.startsWith('|') && p.includes('|')) {
              // Simple markdown table renderer
              const rows = p.split('\n').filter(r => r.trim() && !r.includes(':---'));
              return (
                <div key={idx} className="table-responsive">
                  <table className="article-table">
                    <tbody>
                      {rows.map((row, rIdx) => {
                        const cells = row.split('|').filter((_, cIdx, arr) => cIdx > 0 && cIdx < arr.length - 1);
                        if (rIdx === 0) {
                          return (
                            <tr key={rIdx}>
                              {cells.map((c, cIdx) => (
                                <th key={cIdx}>{c.trim().replace(/\*\*/g, '')}</th>
                              ))}
                            </tr>
                          );
                        }
                        return (
                          <tr key={rIdx}>
                            {cells.map((c, cIdx) => (
                              <td key={cIdx}>{c.trim().replace(/\*\*/g, '')}</td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            }
            if (p.startsWith('1. ') || p.startsWith('- ')) {
              const items = p.split('\n');
              return (
                <ul key={idx} className="article-list">
                  {items.map((item, i) => (
                    <li key={i}>
                      {item.replace(/^[0-9]+\.\s+/, '').replace(/^-\s+/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
                    </li>
                  ))}
                </ul>
              );
            }

            return <p key={idx}>{p.replace(/\*\*(.*?)\*\*/g, '$1')}</p>;
          })}
        </article>

        {/* ARTICLE TAGS */}
        <div className="article-tags-wrap">
          <span style={{ fontWeight: 600, color: 'var(--green-deeper)', marginRight: '0.5rem' }}>Tags:</span>
          {post.tags.map((tag, idx) => (
            <span key={idx} className="blog-tag">#{tag}</span>
          ))}
        </div>

        {/* SOCIAL SHARE & CONSULTATION CTA */}
        <div className="article-share-box">
          <div className="asb-left">
            <span className="asb-label">Share this insight:</span>
            <a
              href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn share-whatsapp"
              aria-label="Share on WhatsApp"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn share-linkedin"
              aria-label="Share on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn share-twitter"
              aria-label="Share on Twitter / X"
            >
              X / Twitter
            </a>
          </div>
          <div className="asb-right">
            <button
              type="button"
              className="share-btn share-copy"
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(shareUrl);
                  alert('Link copied to clipboard!');
                }
              }}
            >
              📋 Copy Link
            </button>
          </div>
        </div>

        {/* IN-ARTICLE EXPERT ASSISTANCE BOX */}
        <div className="expert-assistance-card">
          <div className="eac-icon">🛡️</div>
          <div className="eac-content">
            <h3>Need Expert Advice on This?</h3>
            <p>
              Don&apos;t navigate complex insurance clauses, loan subsidies, or tax rules alone. Speak with an experienced SureVriksha advisor today for customized, transparent advice with zero pressure.
            </p>
            <div className="eac-buttons">
              <Link to="/contact" className="btn btn-gold btn-sm">Talk to an Advisor</Link>
              <a
                href={`https://wa.me/919583425025?text=Hello%20SureVriksha%2C%20I%20read%20your%20article%20%22${encodeURIComponent(post.title)}%22%20and%20want%20to%20consult%20an%20advisor`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
              >
                💬 WhatsApp Query
              </a>
            </div>
          </div>
        </div>

        {/* RELATED ARTICLES */}
        {relatedPosts.length > 0 && (
          <div className="related-articles-section">
            <h3 className="ras-title">Related Financial Guides</h3>
            <div className="related-grid">
              {relatedPosts.map((rp) => (
                <div key={rp.id} className="related-card">
                  <div className="rc-cat">{rp.category.toUpperCase()}</div>
                  <h4><Link to={`/blog/${rp.slug}`}>{rp.title}</Link></h4>
                  <p>{rp.summary.substring(0, 95)}...</p>
                  <Link to={`/blog/${rp.slug}`} className="rc-more">Read Guide →</Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
