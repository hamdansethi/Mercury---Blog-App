import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="position-relative overflow-hidden rounded shadow-sm card-hover-scale">
      <a href="">
          <img
          src={
            category.thumbnailUrl && category.thumbnailUrl.trim() !== ''
              ? category.thumbnailUrl
              : '../assets/default.png'
          }
          className="img-fluid w-100"
          alt={category.title || 'Category Image'}
          style={{ height: '40px', objectFit: 'cover', filter: 'brightness(30%)' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-white fw-semibold text-center px-2">
          {category.title}
        </div>
      </a>

    </div>
  );
};

export default CategoryCard;
