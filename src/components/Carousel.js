import React, { useState, useEffect } from 'react';
import { getCarouselImages } from '../api';

function Carousel() {
  const [carouselImage, setCarouselImage] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getCarouselImages().then(data => {
      setCarouselImage(data);
    });
  }, []);

  function gotoproduct() {
    window.location = "sets.php";
  }

  return (
    <div className="gx-2 gy-2">
      <div id="carouselExampleIndicators" className="carousel slide carousel-light carousel-fade" autoFocus data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselImage.map((carouselimg, index) => (
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === activeIndex ? "active" : ""}
              aria-current={index === activeIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              key={index}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselImage.map((carouselimg, index) => (
            <div className={`carousel-item ${index === activeIndex ? "active" : ""}`} key={index}>
              <img
                src={carouselimg.carousel_img.asset.url}
                className="d-block w-100 img-fluid img-responsive"
                alt={`Slide ${index + 1}`}
                onClick={gotoproduct}
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
