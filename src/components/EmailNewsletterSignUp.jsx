import React from 'react';

const EmailNewsletterSignUp = () => {
  return (
    <div className="container my-5">
      <div
        className="p-5 rounded text-center"
        style={{
          backgroundColor: '#222831',
          color: '#DFD0B8',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h3 className="mb-3 fw-bold" style={{ color: '#DFD0B8' }}>
          Join Our Newsletter
        </h3>
        <p className="mb-4" style={{ color: '#C1B7A0' }}>
          Get the latest blog posts, articles, and updates straight to your inbox.
        </p>
        <form className="row g-3 justify-content-center">
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              style={{
                backgroundColor: '#393E46',
                border: 'none',
                color: '#DFD0B8',
              }}
              required
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: '#DFD0B8',
                color: '#222831',
                fontWeight: 'bold',
                padding: '0.5rem 2rem',
              }}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailNewsletterSignUp;
