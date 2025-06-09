import React from 'react';

const FeaturedBlogsCard = ({
  post,
  bgColor = '#222831',
  textColor = '#DFD0B8',
}) => {
  return (
    <div className="col-md-6 mb-4">
      <a
        href=""
        className="text-decoration-none text-reset d-block h-100"
        style={{ height: '400px' }} // fix height on link wrapper
      >
        <div
          className="card border-0 overflow-hidden h-100 card-hover-scale"
          style={{ backgroundColor: bgColor }}
        >
          <img
            src={post.thumbnailUrl && post.thumbnailUrl.trim() !== '' ? post.thumbnailUrl : '/assets/default.png'}
            className="card-img-top"
            alt={post.title}
            style={{ height: '250px', objectFit: 'cover' }}
          />
          <div
            className="card-body d-flex flex-column overflow-hidden"
            style={{ height: '150px' }}
          >
            <h5
              className="card-title fw-bold mb-2 text-truncate"
              style={{ color: textColor }}
              title={post.title} // tooltip on hover if truncated
            >
              {post.title}
            </h5>
            <p
              className="card-text mb-0 text-truncate"
              style={{ color: textColor }}
              title={post.excerpt} // tooltip on hover if truncated
            >
              {post.excerpt}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FeaturedBlogsCard;
