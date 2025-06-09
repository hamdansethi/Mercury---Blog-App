import React from 'react';
import AuthorCard from './AuthorCard';
import authors from '../data/authors.json';

const AuthorList = () => {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Meet the Authors</h2>
      <div className="row">
        {authors.map((author) => (
          <div key={author.id} className="col-md-3 mb-4">
            <AuthorCard
              imageUrl={author.imageUrl}
              name={author.name}
              identifier={author.identifier}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorList;
