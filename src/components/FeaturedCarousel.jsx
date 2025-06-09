import React from 'react';
import { Carousel } from 'react-bootstrap';

const FeaturedCarousel = ({ posts }) => {
  return (
    <div className="w-100" style={{ height: '60vh', overflow: 'hidden' }}>
      <Carousel fade>
        {posts.map((post, index) => (
          <Carousel.Item key={index}>
            <div
              className="position-relative w-100"
              style={{ height: '60vh' }}
            >
              <img
                src={post.image || '/assets/title.png'}
                alt={post.title}
                className="d-block w-100 h-100 object-fit-cover"
                style={{ filter: 'brightness(80%)' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>{post.title}</h3>
                <p>{post.excerpt || post.body?.slice(0, 100)}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
