import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import '../Home.css';
import BannerImage from '../components/BannerImage';
import { getCategoryImages,getBestSeller,
  getReadyToShip } from '../api';
import CategoryImageCard from '../components/CategoryImageCard';
import SectionCollection from '../components/collection/SectionCollection';
import SectionCard from '../components/collection/SectionCollectionCard';
function Home() {
  const [categoryImage, setCategoryImage] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [readyToShip, setReadyToShip] = useState([]);
  useEffect(() => {
    getCategoryImages().then(data => {
      setCategoryImage(data);
    });
    getBestSeller().then(data => {
      setBestSeller(data);
    });
    getReadyToShip().then(data => {
      setReadyToShip(data);
    });
  }, []);
  return (
    <div>
      <Carousel />
      <div className="content" style={{ backgroundColor: '#181510' }}>

        <div className=" pt-md-5 container ">
          <br />
          <br />
          <h2 className="text-center first_heading_index heading" style={{ color: '#bbb572' }} data-aos="slide-up">OUR FEATURED COLLECTIONS</h2>

          <hr style={{ color: '#bbb572' }} className="mt-4" />
{/* Banners */}
          <div className="cards mt-5 mt-sm-3 ">
            <div className="row no-gutters">
              <div className="row mb-3">
                <BannerImage image="https://cdn.sanity.io/images/qshndjal/production/69be3d41f88dc4771dd146673876cb7b625cf160-1628x2028.jpg" text="SHOP THE LOOK COLLECTION" />
                <BannerImage image="https://cdn.sanity.io/images/qshndjal/production/003ade4608eb07a7fd7e333199c705d1a0b69c87-1824x2376.jpg" text="BRIDAL COLLECTION" />
              </div>
  {/* Categories */}
              <div class="three-cards mt-5 mb-2">
                              <div class="row no-gutters row no-gutters  row no-gutters  g-4">
              {categoryImage.map((category, index) => (
                                 <CategoryImageCard image={category.pr_img.asset.url}/> 
                                  
                          ))}
                              </div>
                          </div>
   {/*Section Collections */}
                              {/* BEST SELLERS COLLECTION */}
      {/* 4 cards */}
      <div className="text mt-sm-3 mt-md-5">
        <h2 className="text-center heading mt-5 mt-sm-3" style={{ color: '#bbb572' }} data-aos="slide-up">BEST SELLERS COLLECTION</h2>
        <hr style={{ color: '#bbb572' }} className="mt-4" />
      </div>

      {/* BEST SELLERS COLLECTION */}
      <div className="row mb-3">
   {bestSeller.map((bestSeller, index) => (
        <SectionCard text={bestSeller.pr_name} image={bestSeller.pr_img.asset.url} />
                          ))}
      </div>
                              {/* Ready to Ship COLLECTION */}
      {/* 4 cards */}
      <div className="text mt-sm-3 mt-md-5">
        <h2 className="text-center heading mt-5 mt-sm-3" style={{ color: '#bbb572' }} data-aos="slide-up">READY-TO-SHIP COLLECTION</h2>
        <hr style={{ color: '#bbb572' }} className="mt-4" />
      </div>

      {/* READY-TO-SHIP COLLECTION */}
      <div className="row mb-3">
   {readyToShip.map((readyToShip, index) => (
        <SectionCard text={readyToShip.pr_name} image={readyToShip.pr_img.asset.url} />
                          ))}
      </div>
    
     {/* <!--one image carousel start--> */}
          <div id="carouselExampleSlidesOnly" class="carousel slide container " data-bs-ride="carousel">
              <div class="carousel-inner" style={{ cursor:'pointer' }} onclick="gotobands()">
                  <div class="carousel-items active">
                      <img src="https://cdn.sanity.io/images/qshndjal/production/eafd6460a8961727524dc7693dbe35411da09a77-1734x834.jpg"  class="shadow-lg one-image-carousel d-block w-100" alt="..."/>
                  </div>
              </div>
          </div>

          {/* <!--one image carousel end--> */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
