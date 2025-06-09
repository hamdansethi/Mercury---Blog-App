import React from 'react';

const AuthorCard = ({ imageUrl, name, identifier }) => {
  return (
    <div className="text-center p-3">
        <a href="" className='card-hover-scale text-decoration-none text-reset'>
            <img
                src={imageUrl || '/assets/default.png'}
                alt={name}
                className="rounded-circle mb-2 card-hover-scale"
                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
            />
            <h6 className="mb-1 fw-bold">{name}</h6>
            <p className="text-muted mb-0 small">{identifier}</p>
        </a>

    </div>
  );
};

export default AuthorCard;
