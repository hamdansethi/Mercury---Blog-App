import React from 'react';

const Footer = () => {
  const linkStyle = {
    color: '#DFD0B8',
    textDecoration: 'none',
  };

  const hoverStyle = {
    color: '#948979',
  };

  return (
    <footer 
      className="text-center py-4 mt-auto" 
      style={{ backgroundColor: '#222831', color: '#DFD0B8' }}
    >
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Mercury. All rights reserved.</p>
        <small>
          <a
            href="/privacy"
            style={linkStyle}
            onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color}
            onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}
            className="me-3"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            style={linkStyle}
            onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color}
            onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}
          >
            Terms of Service
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
