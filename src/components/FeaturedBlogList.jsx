import React from 'react';
import FeaturedBlogsCard from './FeaturedBlogsCard';

const FeaturedBlogList = ({ posts }) => {
  return (
    <div className="container my-4">
      <div className="row">
        {posts.map((post, index) => (
          <FeaturedBlogsCard
            key={post.id}
            post={post}
            color={index % 2 === 0 ? '#DFD0B8' : '#948979'} // alternating colors
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogList;
