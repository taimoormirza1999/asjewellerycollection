import React from 'react';
import './Footer.css';
function Footer() {
//   function changecolor(x) {
//     x.style.backgroundColor = "rgba(201, 201, 50, 0.713)";
//   }

//   function backcolor(x) {
//     x.style.backgroundColor = "#bbb572";
//   }
  var b = false;

  function Collapse_popularCollection() {
    var footer_collapse_1 = document.getElementById('footer_collapse_1');
    if (b == false) {
      footer_collapse_1.style.display = "block";
      b = true;
    } else {
      footer_collapse_1.style.display = "none";
      b = false;
    }
  }
  function Collapse_gotQuestion() {
    var footer_collapse_2 = document.getElementById('footer_collapse_2');
    if (b == false) {
      footer_collapse_2.style.display = "block";
      b = true;
    } else {
      footer_collapse_2.style.display = "none";
      b = false;
    }
  }
  
  return (
    <>
      <div className="line" style={{ height: '0.4px', color: '#b1b1b0', paddingTop: '1px' }}></div>

      <div className="footer" style={{ backgroundColor: '#242424' }}>
    <footer className="py-5 container" style={{backgroundColor: '#242424'}}>
    <div className="card-group" >
  <div className="card border-0 px-5 align-items-center">
    <img src="asjewellary_collaction.png"  className="pb-2 px-3 img-fluid w-80" id="footer_logo" height="140px" alt="..." />
    <div className="col-sm-5 col-8 col-md-8 pb-2 mt-3 text-center d-flex justify-content-center" style={{ width: '100%' }}>
    <a href="" className="px-2">
                            <i class=" pt-3 fab fa-facebook-f  links_color_hover "> </i></a>
                        <a href=""className="px-2" >
                            <i class=" pt-3 fab fa-instagram  links_color_hover"></i></a>
                        <a href=""className="px-2" >
                            <i class=" pt-3 far fa-envelope  links_color_hover"></i></a>
                    </div>
  </div>
  <div className="card border-0">
    <hr style={{ color: '#bbb572' }} className="footer_hr" />
    <h6 style={{ color: '#bbb572', display: 'inline-block' }} className="text-left footer-heading" onClick={Collapse_popularCollection}>
      <span style={{ visibility: 'hidden' }}>......</span>
      POPULAR COLLECTIONS <i className="ml-2 fas fa-angle-down" id="accessories_angle_down"></i>
    </h6>
    <ul id="footer_collapse_1">
      <li style={{ marginBottom: '1rem' }}><a href="productList.php?id=1" className="top-sub-heading">Sets</a></li>
     
                        <li><a href="productList.php?id=2" className="top-sub-heading">Earrings</a></li>
                        <li><a href="commingsoon.php" className="top-sub-heading">Ready-to-Ship</a></li>
                        <li><a href="commingsoon.php" className="top-sub-heading">Men's Collection</a></li>
                        <li><a href="commingsoon.php" className="top-sub-heading">Tribal Collection</a></li>
                        <li><a href="commingsoon.php" className="top-sub-heading">Diamanté Collection</a></li>
                        <li><a href="commingsoon.php" className="top-sub-heading">Sale</a></li>
                        <li><a href="commingsoon.php" className="top-sub-heading">Gift Cards</a></li>
    </ul>
  </div>
  <div className="card border-0">
    <hr style={{ color: '#bbb572' }} className="footer_hr" />
    <h6 style={{ color: '#bbb572' }} className="text-left footer-heading" onClick={Collapse_gotQuestion}>
      <span style={{ visibility: 'hidden' }}>......</span> GOT QUESTIONS?{' '}
      <i className="ml-2 fas fa-angle-down" id="accessories_angle_down"></i>
    </h6>
    <ul id="footer_collapse_2" style={{ display: 'block' }}>
      <li style={{ marginBottom: '1rem' }}><a href="about.php" className="top-sub-heading">About Us</a></li>
      <li><a href="commingsoon.php" class="top-sub-heading">FAQs</a></li>
                        <li><a href="commingsoon.php" class="top-sub-heading">Returns & Exchanges</a></li>
                        <li><a href="commingsoon.php" class="top-sub-heading">Shipping</a></li>
                        <li><a href="commingsoon.php" class="top-sub-heading">Track Your Order</a></li>
                        <li><a href="policies.php" class="top-sub-heading">Privacy Policy</a></li>
                        <li><a href="contactus.php" class="top-sub-heading">Contact Us</a></li>
    </ul>
    <hr style={{ color: '#bbb572' }} className="footer_hr" />
  </div>
  <div className="card border-0 text-center">
    <h6 style={{ color: '#bbb572' }} className="mx-0 px-0 footer-heading">
      <span style={{ visibility: 'hidden' }} className="footer_hidden_dots">....</span> GET ON OUR V.I.P. LIST
    </h6>
    <ul>
      <p style={{ marginBottom: '1rem', color: '#b1b1b0', fontSize: 'small' }}>
        Enter your name and email address below to get FREE SHIPPING on your first order! Also, be the first to know
        about new arrivals & our sales!
      </p>
      <li>
        <form id="form_footer">
          <div className="mb-3">
            <input
              type="text"
              className="form-control footer_fname sub-heading"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="First Name"
              autoComplete="off"
            />
          </div>
          {/* Rest of the form */}
          <button
            type="submit"
            className="btn text-light sub-heading"
            // onMouseOver={changecolor}
            // onMouseOut={backcolor}
            style={{
              borderRadius: '50px',
              width: '120px',
              padding: '10px',
              backgroundColor: '#bbb572',
              fontWeight: '520'
            }}
          >
            Sign up
          </button>
        </form>
      </li>
    </ul>
  </div>
</div>

            <div className="row container mt-5">
            <hr className="line text-light" style={{height: '0.4px', paddingTop: '1px'}} />
            <div className="col-md-6 col-12 pt-2" style={{ color: '#b1b1b0', fontSize: '14px' }}>
              <h6 style={{ color: '#b1b1b0', fontSize: '15px' }} className="font-bold">
                © 2021 AS Collection. All Rights Reserved. Powered by <a href="https://taimoor-hamza-fullstack-developer.vercel.app/" style={{color: '#bbb572'}}>Taimoor Hamza</a>
              </h6>
            </div>
            <div className="col-md-6 col-12" style={{ color: '#b1b1b0',  }}>
                    <div className="row">
                    
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Footer