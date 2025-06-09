import React from 'react';
import CategoriesCard from './CategoryCard';

const CategoryList = ({ categories }) => {
  return (
    <div className="row g-3 mb-4">
      {categories.map((category, index) => (
        <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
          <CategoriesCard category={category} />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
