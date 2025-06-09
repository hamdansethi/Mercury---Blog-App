// src/pages/HomePage.jsx

import React, { useState } from 'react';
import FeaturedCarousel from '../components/FeaturedCarousel';
import FeaturedBlogList from '../components/FeaturedBlogList';
import AuthorList from '../components/AuthorList';
import EmailNewsletterSignUp from '../components/EmailNewsletterSignUp';
// import PostList from '../components/PostList';
// import Pagination from '../components/Pagination';

import postsData from '../data/posts.json';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const totalPages = Math.ceil(postsData.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <main className="flex-grow-1">
      <FeaturedCarousel posts={postsData.slice(0, 5)} />
      <div className="pt-4">
        <h2 className="text-center">Featured Blogs</h2>
        <FeaturedBlogList posts={postsData.slice(0, 4)} />
      </div>
      <AuthorList />
      {/* Uncomment if you want full blog listing and pagination */}
      {/* 
      <div>
        <h2 className='text-center'>Blogs</h2>
        <PostList posts={currentPosts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            if (page >= 1 && page <= totalPages) {
              setCurrentPage(page);
            }
          }}
        />
      </div>
      */}
      <EmailNewsletterSignUp />
    </main>
  );
};

export default HomePage;
