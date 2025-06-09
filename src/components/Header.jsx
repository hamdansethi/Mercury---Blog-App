import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const linkStyle = {
    color: '#DFD0B8',
    textDecoration: 'none',
  };

  const hoverStyle = {
    color: '#948979',
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#222831' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={linkStyle}>
          Mercury
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Add 'blogs' explicitly */}
            {[
              { name: 'Home', path: '/' },
              { name: 'Categories', path: '/categories' },
              { name: 'Blogs', path: '/blogs' },
              { name: 'About', path: '/about' }
            ].map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link
                  to={item.path}
                  className="nav-link"
                  style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color}
                  onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav">
            {['Login', 'Register'].map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="nav-link"
                  style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color}
                  onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
