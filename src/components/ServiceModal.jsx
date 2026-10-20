import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [service, onClose]);

  if (!service) return null;

  const waText = encodeURIComponent(`Hello SureVriksha, I would like to get more information and apply for ${service.title}.`);

  return (
    <div className="service-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="sm-header">
          <div className="sm-header-left">
            <div className="sm-icon" style={{ background: service.gradient }}>
              {service.icon}
            </div>
            <div>
              <span className="sm-cat-badge">{service.categoryLabel}</span>
              <h2 id="modal-title" className="sm-title">{service.title}</h2>
            </div>
          </div>
          <button type="button" className="sm-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="sm-body">
          {/* Simple Explanation Callout */}
          <div className="sm-callout">
            <div className="sm-callout-label">💡 Aasan Bhasha Mein (What is this?):</div>
            <p className="sm-callout-text">{service.simpleExplain}</p>
          </div>

          {/* Quick Info Grid */}
          <div className="sm-info-grid">
            <div className="sm-info-item">
              <span className="sm-info-lbl">👥 Kiske Liye Hai (Who is this for?):</span>
              <span className="sm-info-val">{service.forWhom}</span>
            </div>
            <div className="sm-info-item">
              <span className="sm-info-lbl">⏱️ Turnaround Time (Kitne time mein):</span>
              <span className="sm-info-val sm-val-highlight">{service.turnaround}</span>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="sm-section">
            <h3>Key Benefits &amp; Coverage</h3>
            <div className="sm-tags-grid">
              {service.features.map((feat, idx) => (
                <div key={idx} className="sm-feat-chip">
                  <span className="sm-check">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          {service.docsRequired && service.docsRequired.length > 0 && (
            <div className="sm-section">
              <h3>📄 Documents Required</h3>
              <ul className="sm-docs-list">
                {service.docsRequired.map((doc, idx) => (
                  <li key={idx}>
                    <span className="sm-doc-icon">📌</span> {doc}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* How It Works Steps */}
          {service.howItWorks && service.howItWorks.length > 0 && (
            <div className="sm-section">
              <h3>🚀 Kaise Hoga (3 Easy Steps)</h3>
              <div className="sm-steps-flow">
                {service.howItWorks.map((step, idx) => (
                  <div key={idx} className="sm-step-item">
                    <div className="sm-step-num">{idx + 1}</div>
                    <div className="sm-step-text">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="sm-footer">
          <a
            href={`https://wa.me/919583425025?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>💬</span> Inquire on WhatsApp Now
          </a>
          <Link to={service.link} onClick={onClose} className="btn btn-gold">
            View In-Depth Details &amp; Plan →
          </Link>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
