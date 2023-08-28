import React from 'react';

function CardImage({instagramImage}) {
  const handleMouseOver = (event) => {
    event.target.nextElementSibling.style.display = 'block';
  };

  const handleMouseOut = (event) => {
    event.target.nextElementSibling.style.display = 'none';
  };

  return (
    <div className="card" data-aos="zoom-in">
      <a href="productList.php?id=1" className="gallery_part">
        <img
          src={instagramImage}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="card-img-top instagram-opacity img-fluid"
          alt="..."
        />
        <i
          id="instaicon1"
          className="fab fa-instagram insta_icon text-light"
          style={{ display: 'none' }}
        ></i>
      </a>
    </div>
  );
}

export default CardImage;
