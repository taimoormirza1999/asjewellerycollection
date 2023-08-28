import React from 'react'

function SectionCard({text,image}) {
  return (
    <div className="col-md-3 col-6 col-sm-6 c" data-aos="zoom-in-up">
          <div className="card">
            <a href="productList.php?id=2">
              <img src={image} className="w-95 card-img-top img-fluid best-seller-collection img-fluid" id="img1" alt="..."  height="300px" />
            </a>
            <a href="productList.php?id=2">
              <h5 className="card-title text-center">
                <a className="product-info__caption " href="productList.php?id=2" itemprop="url">
                  <div className="product-details">
                    <span className="title text-center text-break" itemprop="name">{text}</span>
                    <span className="price "> <br /><span className="money c" data-aos="zoom-in" id="earring" data-currency-usd="">21000 Rs</span></span>
                  </div>
                </a>
              </h5>
            </a>
          </div>
        </div>
  )
}

export default SectionCard