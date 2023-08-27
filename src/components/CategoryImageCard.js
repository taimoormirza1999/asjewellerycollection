import React from 'react'

function CategoryImageCard({image}) {
  return (
    <div class="col-6 col-md-4 sub-main_collection c" data-aos="zoom-in">
                                      <a href="productList.php?id=2">
                                          <div class="card card-border">
                                              <img src={image} class="main-img1 card-img-top img-fluid" alt="..." height="350px"/>
                                          </div>
                                      </a>
                                      <a href="productList.php?id=2">
                                          <div class="card-body">
                                              <h5 class="card-title text-center  sub-heading" style={{ color:'#bbb572' }}>EARRINGS</h5>
                                          </div>
                                      </a>
                                  </div>
  )
}

export default CategoryImageCard