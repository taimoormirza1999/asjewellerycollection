import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import '../Home.css';

import BannerImage from '../components/BannerImage';
import {
  getCategoryImages, getBestSeller,
  getReadyToShip, getInstagramImages
} from '../api';
import CategoryImageCard from '../components/CategoryImageCard';
// import SectionCollection from '../components/collection/SectionCollection';
import SectionCard from '../components/collection/SectionCollectionCard';
import InstagramImage from '../components/InstagramImage';

function Home() {
  const [categoryImage, setCategoryImage] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [readyToShip, setReadyToShip] = useState([]);
  const [instagramImages, setInstagramImages] = useState([]);
  useEffect(() => {
    getCategoryImages().then(data => {
      setCategoryImage(data);
    });
    getInstagramImages().then(data => {
      setInstagramImages(data);
    });
    getBestSeller().then(data => {
      setBestSeller(data);
    });
    getReadyToShip().then(data => {
      setReadyToShip(data);
    });
  }, []);
  return (
    <div style={{ backgroundColor: '#181510' }}>
      <Carousel />
      <div className="content w-md-95 w-lg-100 mx-auto" >

        <div className=" pt-md-5  ">
          <br />
          <br />
          <section className="w-95 w-lg-80 mx-auto">
            <h2 className="text-center first_heading_index heading" style={{ color: '#bbb572' }} data-aos="slide-up">OUR FEATURED COLLECTIONS</h2>

            <hr style={{ color: '#bbb572' }} className="mt-4" />
            {/* Banners */}
            <div className="cards mt-5 mt-sm-3 ">
              <div className="row no-gutters">
                <div className="row mb-3 mx-auto">
                  <BannerImage image="https://cdn.sanity.io/images/qshndjal/production/69be3d41f88dc4771dd146673876cb7b625cf160-1628x2028.jpg" text="SHOP THE LOOK COLLECTION" />
                  <BannerImage image="https://cdn.sanity.io/images/qshndjal/production/003ade4608eb07a7fd7e333199c705d1a0b69c87-1824x2376.jpg" text="BRIDAL COLLECTION" />
                </div>
              </div>
            </div>
          </section>
          {/* Categories */}
          <section className="w-95 w-lg-80 mx-auto">
            <div class="three-cards mt-5 mb-2 ">
              <div class="row no-gutters row no-gutters  row no-gutters  g-4">
                {categoryImage.map((category, index) => (
                  <CategoryImageCard image={category.pr_img.asset.url} />

                ))}
              </div>
            </div>
          </section>
          {/*Section Collections */}
          {/* BEST SELLERS COLLECTION */}
          {/* 4 cards */}
          <section className="w-95 w-lg-80 mx-auto">
            <div className="text mt-sm-3 mt-md-5">
              <h2 className="text-center heading mt-5 mt-sm-3" style={{ color: '#bbb572' }} data-aos="slide-up">BEST SELLERS COLLECTION</h2>
              <hr style={{ color: '#bbb572' }} className="mt-4" />
            </div>

            {/* BEST SELLERS COLLECTION */}
            <div className="row mb-3 w-8 mx-auto">
              {bestSeller.map((bestSeller, index) => (
                <SectionCard text={bestSeller.pr_name} image={bestSeller.pr_img.asset.url} />
              ))}
            </div>
          </section>
          {/* Ready to Ship COLLECTION */}
          {/* 4 cards */}
          <section className="w-95 w-lg-80 mx-auto">
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
          </section>
          {/* <!--one image carousel start--> */}
          <section>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner" style={{ cursor: 'pointer' }} onclick="gotobands()">
                <div class="carousel-items active">
                  <img src="https://cdn.sanity.io/images/qshndjal/production/eafd6460a8961727524dc7693dbe35411da09a77-1734x834.jpg" class="shadow-lg one-image-carousel d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </section>
          {/* <!--Instagram--> */}
          <div class="gallery py-5 container-fluid ">
            <h2 style={{ textAlign: 'center', color: '#bbb572' }} data-aos="slide-up heading">Instagram</h2>
            <hr style={{ color: '#bbb572' }} class="mt-4" />

            <br />

            <div class="" style={{
              boxSizing: 'border-box',
              margin: 0,
              padding: 0
            }}>
              <div class="four-cards ">
                <div class="row no-gutters g-4" >
                  {/* <InstagramImage/> */}
                  <InstagramImage instagramImages={instagramImages} />
                </div>
              </div>
              {/* <!-- container-fluid div--> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Home;
