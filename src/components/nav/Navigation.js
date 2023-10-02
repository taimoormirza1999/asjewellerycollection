import React, { useState } from 'react';
import './Navigation.css';
import { useUser } from '../../userContext';

function Navigation() {

  const {user}=useUser();
  const [currencyMenu, SetCurrencyMenu] = useState(false);
  // alert("Rendered Navigation");
  function t(x) {
    x.style.color = '#bbb572';
    x.style.backgroundColor = '#000000';
  }

  function tt(x) {
    x.style.color = '#bbb572';
    x.style.border = '1px solid white';
    x.style.backgroundColor = '#000000';
  }

  var b = false;

  function Collapse_Menu() {
    var menuCollapse = document.getElementById('navbarSupportedContent');
    if (b == false) {
      menuCollapse.style.display = 'block';
      b = true;
    } else {
      menuCollapse.style.display = 'none';
      b = false;
    }
  }

  function Collapse_Type_OF_Jewellery() {
    var typeOfJewelleryCollapse = document.getElementById('collapse_type_of_jewellery_id');
    if (b == false) {
      typeOfJewelleryCollapse.style.display = 'block';
      b = true;
    } else {
      typeOfJewelleryCollapse.style.display = 'none';
      b = false;
    }
  }

  function Collapse_Accessories() {
    var accessoriesCollapse = document.getElementById('dropdown-collapse_accessories');
    if (b == false) {
      accessoriesCollapse.style.display = 'block';
      b = true;
    } else {
      accessoriesCollapse.style.display = 'none';
      b = false;
    }
  }

  function Collapse_Currency() {
    SetCurrencyMenu(!currencyMenu);
  }

  return (
    <div className="navigationbar row no-gutters no-gutters" style={{ backgroundColor: 'black' }}>
      <div className="row no-gutters header" style={{ backgroundColor: 'black', justifyContent: 'space-between' }}>
        {/* Left-side content */}
        <div className="col mx-3 d-flex align-items-center">
          <a href="" className="mx-2 header-icon" id="color_hover">
            <i className="fab fa-facebook-f fs-6 text-light"></i>
          </a>
          <a href="" className="mx-2 header-icon" id="color_hover">
            <i className="fab fa-instagram fs-6 text-light"></i>
          </a>
          <a href="" className="mx-2 header-icon" id="color_hover">
            <i className="far fa-envelope fs-6 text-light"></i>
          </a>
        </div>

        {/* Right-side content */}
        <div className="col d-flex align-items-center justify-content-end mx-md-3">
          <div className="gl-3 mx-2">
            <li className="nav-item dropdown mt-0 pt-0 dropdown-div">
              <span onMouseOver={Collapse_Currency} onClick={() => SetCurrencyMenu(!currencyMenu)} className="fs-6 dropdown-toggle dropdown-currency dropdown-currency-main header top-sub-heading top-bar" href="#" role="button" aria-expanded="false" style={{ backgroundColor: '#000000', textDecoration: 'none' }}>
                usd <i className="fas ml-1 fs-6  fa-angle-down"></i><i className="fas  fa-angle-right " style={{ display: 'none' }}></i>
              </span>
              {currencyMenu && (
                <ul className="dropdown-menu dropdown-menu-currency show" id="dropdown-collapse_currency" style={{ backgroundColor: '#000000', textDecoration: 'none' }}>
                  <li><a className="dropdown-item dropdown-currency py-1 " href="#">usd</a></li>
                  <li><a className="dropdown-item dropdown-currency py-1 " href="#">cad</a></li>
                  <li><a className="dropdown-item dropdown-currency py-1 " href="#">aud</a></li>
                  <li><a className="dropdown-item dropdown-currency py-1 " href="#">gbp</a></li>
                  <li><a className="dropdown-item dropdown-currency py-1 " href="#">eur</a></li>
                  <li><a className="dropdown-item dropdown-currency py-1 " href="#">inr</a></li>
                </ul>
              )}
            </li>
          </div>

          {/* Login */}
          <div className="login mx-2">
            <a href="" className="header-icon mx-2" style={{ textDecoration: 'none' }}>
              <i className="fs-6 far fa-user pt-1 text-light mx-1"></i>

              <span className="fs-6 top-sub-heading text-light">
              {user? user.name : 'Login'}
              </span>
            </a>
          </div>
          
          {/* Cart */}
          <div className="mx-2">
            <a href="cart.php" className="cart-this-margin">
              <i className="fs-6 fas fa-shopping-cart" style={{ color: '#bbb572' }}></i>
              <span className="fs-6 cart-counter" style={{ color: '#bbb572', textAlign: 'center' }}>0</span>
            </a>
          </div>
        </div>
      </div>

      {/* Second Div */}
      <div className="second_nav" style={{ backgroundColor: '#000000', '--bs-gutter-x': '0rem' }}>
        <div className="logo text-center p-1" style={{ width: '100%', '--bs-gutter-x': '0rem' }}>
          <a href="index.php"><img id="logo-brand" src="/asjewellary_collaction.png" alt="logo not working" height="100rem;" /></a>
        </div>
      </div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg gx-2 text-center" id="nav">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={Collapse_Menu} data-bs-target="#navbarSupportedContent" style={{ fontFamily: 'Playfair Display, serif' }} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-light w-3 fs-6"><span className="fs-6">&nbsp;Menu</span></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active bottom_border" style={{ color: '#bbb572' }} aria-current="page" href="index.php">HOME</a>
              </li>
              <li className="nav-item dropdown">
                <a onClick={Collapse_Type_OF_Jewellery} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" style={{ color: '#bbb572' }} data-bs-toggle="dropdown" aria-expanded="false">
                  Type of jewellery <i className="ml-1 fas fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu uu" id="collapse_type_of_jewellery_id" aria-labelledby="navbarDropdown" style={{ backgroundColor: 'black' }}>
                  <li className="dropdown-submenu bg_black">
                    <a className="dropdown-item dropdown-toggle" style={{ color: '#bbb572' }}>
                      ACCESSORIES <i className="ml-1 fas fa-angle-down" onClick={Collapse_Accessories} id="accessories_angle_down "></i><i className="fas fa-angle-right" id="accessories_angle_right" style={{ display: 'none' }}></i>
                    </a>
                    <ul className="dropdown-menu" id="dropdown-collapse_accessories">
                      <li><a className="dropdown-item" href="">Tops</a></li>
                      <li><a className="dropdown-item" href="">Chains</a></li>
                      <li><a className="dropdown-item" href="">Locket-Tops</a></li>
                      <li><a className="dropdown-item" href="">Anklet</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="">Necklace Set</a></li>
                  <li><a className="dropdown-item" href="">Bali Plain</a></li>
                  <li><a className="dropdown-item" href="">Harrs</a></li>
                  <li><a className="dropdown-item" href="">Jumar Teekah</a></li>
                  <li><a className="dropdown-item" href="">Bands</a></li>
                  <li><a className="dropdown-item" href="">Rings</a></li>
                  <li><a className="dropdown-item" href="">Nose-Pin</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link bottom_border" style={{ color: '#b1b1b0' }} href="commingsoon.php">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bottom_border" style={{ color: '#b1b1b0' }} href="team.php">team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bottom_border" style={{ color: '#b1b1b0' }} href="commingsoon.php">CUSTOM ORDERS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bottom_border" style={{ color: '#b1b1b0' }} href="about.php">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bottom_border" style={{ color: '#b1b1b0' }} href="commingsoon.php">old jewellery repair shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bottom_border" style={{ color: 'white' }} href="commingsoon.php">online orders</a>
              </li>
              <div className="search-container">
                <form action="/action_page.php" autoComplete="off">
                  <input type="text" placeholder=" Search.." name="search" className="sub-heading search" style={{ padding: '5px', backgroundColor: '#000000', borderRadius: '30px', fontSize: '90%', color: '#bbb572', outline: 'none' }} />
                  <button type="submit" className="mx-2" style={{ backgroundColor: '#000000', borderRadius: '50px', padding: '2.8px 6px', color: '#bbb572', outline: 'none' }}>
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navigation;

