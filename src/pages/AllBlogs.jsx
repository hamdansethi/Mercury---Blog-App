// src/pages/AllBlogsPage.jsx

import React, { useState } from 'react';
import postsData from '../data/posts.json';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';

const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const totalPages = Math.ceil(postsData.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <main className="container py-5">
      <h2 className="text-center mb-4">All Blog Posts</h2>
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
    </main>
  );
};

export default AllBlogs;
