import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts }) => {
  return (
    <div className="container my-4">
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4 mb-4" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
