import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import postsData from '../data/posts.json';
import AuthorCard from '../components/AuthorCard';  // Assuming you already have this

const Blog = () => {
  const { id } = useParams();
  const blogId = Number(id);
  const blog = postsData.find((post) => post.id === blogId);

  // Simple like button state
  const [likes, setLikes] = useState(blog ? blog.likes || 0 : 0);
  const [liked, setLiked] = useState(false);

  // Basic comments state
  const [comments, setComments] = useState(blog ? blog.comments || [] : []);
  const [commentInput, setCommentInput] = useState('');

  if (!blog) {
    return <p className="text-center my-5">Blog not found.</p>;
  }

  // Get similar blogs (same category, exclude current)
  const similarBlogs = postsData
    .filter(p => p.category === blog.category && p.id !== blog.id)
    .slice(0, 3);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments([...comments, { id: Date.now(), text: commentInput }]);
    setCommentInput('');
  };

  return (
    <div className="container my-5">
      <h1 className="mb-3">{blog.title}</h1>
      <p className="text-muted mb-4">Category: {blog.category}</p>
      <img
        src={blog.imageUrl || '/assets/default.png'}
        alt={blog.title}
        className="img-fluid rounded mb-4"
        style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
      />
      <article className="mb-5" dangerouslySetInnerHTML={{ __html: blog.content }} />

      <div className="d-flex align-items-center mb-4">
        <button 
          className={`btn btn-sm me-2 ${liked ? 'btn-danger' : 'btn-outline-danger'}`}
          onClick={handleLike}
        >
          {liked ? '♥ Liked' : '♡ Like'} {likes}
        </button>
      </div>

      {/* Author card using your props */}
      <div className="mb-5">
        <h4>About the Author</h4>
        <AuthorCard 
          imageUrl={blog.author.image} 
          name={blog.author.name} 
          identifier={blog.author.identifier} 
        />
      </div>

      {/* Comments Section */}
      <div className="mb-5">
        <h4>Comments ({comments.length})</h4>
        <form onSubmit={handleCommentSubmit} className="mb-3">
          <textarea
            className="form-control mb-2"
            rows="3"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={e => setCommentInput(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary btn-sm">Submit Comment</button>
        </form>
        {comments.length === 0 && <p>No comments yet. Be the first to comment!</p>}
        <ul className="list-group">
          {comments.map((comment) => (
            <li key={comment.id} className="list-group-item">
              {comment.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Similar Blogs */}
      <div>
        <h4>Similar Blogs</h4>
        <div className="row">
          {similarBlogs.length === 0 && <p>No similar blogs found.</p>}
          {similarBlogs.map((post) => (
            <div key={post.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <img
                  src={post.thumbnailUrl}
                  className="card-img-top"
                  alt={post.title}
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{post.title}</h6>
                  <Link to={`/blogs/${post.id}`} className="btn btn-sm btn-outline-primary mt-auto">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
