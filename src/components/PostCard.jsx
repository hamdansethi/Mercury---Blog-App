import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="card mb-4 shadow-sm w-100 justify-content-center align-items-center h-100 card-hover-scale">
      <img
        src={post.thumbnailUrl && post.thumbnailUrl.trim() !== '' ? post.thumbnailUrl : "../assets/default.png"}
        className="card-img-top"
        alt={post.title && post.title.trim() !== '' ? post.title : "Default Image"}
        style={{ maxHeight: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <a href={`/post/${post.id}`} className="text-decoration-none text-dark">
          <h5 className="card-title">{post.title}</h5>
        </a>
        <p className="card-text">
          {post.excerpt.length > 150 ? post.excerpt.slice(0, 150) + '...' : post.excerpt}
        </p>

        {/* Spacer to push footer to bottom */}
        <div className="mt-auto d-flex justify-content-between text-muted small">
          <span>By @{post.author}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
