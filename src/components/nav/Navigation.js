import React,{useState} from 'react';
import './Navigation.css';

function Navigation() {
  const [currencyMenu,SetCurrencyMenu]=useState(false);
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
        var currencyCollapse = document.getElementById('dropdown-collapse_currency');
               SetCurrencyMenu(!currencyMenu);
              }
      
  return (
    <div className="navigationbar row no-gutters no-gutters" style={{ backgroundColor: 'black' }}>
      <div className="row no-gutters header" style={{ backgroundColor: 'black' }}>
        {/* Social Icons */}
        <div className="col-md-6 col-3 col-lg-7 col-sm-3 mx-3 d-flex justify-content-left">
          <a href="">
            <i className="mx-2 fab fa-facebook-f header s-icons top-sub-heading" id="color_hover"></i>
          </a>
          <a href="">
            <i className="mx-1 fab fa-instagram header s-icons top-bar top-sub-heading" id="color_hover"></i>
          </a>
          <a href="">
            <i className="mx-2 far fa-envelope header s-icons top-bar top-sub-heading" id="color_hover"></i>
          </a>
        </div>
        {/* Currency Dropdown */}
        <div className="col-lg-1 col-1 col-md-0 col-lg-1 col-sm-1 d-flex justify-content-end"></div>
        <div id="" className="col-lg-1 col-2 col-md-2 currency_this_margin col-sm-2 px-0 d-flex justify-content-end margin-top_nav_atmob">
          <div className="gl-3">
            <li className="nav-item dropdown mt-0 pt-0 dropdown-div">
              <span onMouseOver={Collapse_Currency} onMouseLeave={() => SetCurrencyMenu(false)} lassName="dropdown-toggle dropdown-currency dropdown-currency-main header top-sub-heading top-bar" style={{ backgroundColor: '#000000', textDecoration: 'none' }} href="#" id="navbarDropdown" role="button" aria-expanded="false">
                usd <i className="fas ml-1  fa-angle-down"></i><i className="fas  fa-angle-right " style={{ display: 'none' }}></i>
              </span>
              {currencyMenu &&(<ul className="dropdown-menu dropdown-menu-currency show " id="dropdown-collapse_currency" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#000000', textDecoration: 'none' }}>
                <li><a className="dropdown-item dropdown-currency py-1 " href="#">usd</a></li>
                <li><a className="dropdown-item dropdown-currency py-1 " href="#">cad</a></li>
                <li><a className="dropdown-item dropdown-currency py-1 " href="#">aud</a></li>
                <li><a className="dropdown-item dropdown-currency py-1 " href="#">gbp</a></li>
                <li><a className="dropdown-item dropdown-currency py-1 " href="#">eur</a></li>
                <li><a className="dropdown-item dropdown-currency py-1 " href="#">inr</a></li>
              </ul>)}
              
            </li>
          </div>
        </div>
        {/* Login */}
        <div className="col-md-1 col-lg-1 col-3 col-lg-1 col-sm-3 mx-0 px-0 d-flex justify-content-end margin-top_nav_atmob">
          <div className="login d-flex justify-content-end">
            <a href="login.php" className="" style={{ textDecoration: 'none' }}>
              <i className="far fa-user pt-1 header d-flex justify-content-end top-sub-heading"></i>
            </a>
            <a href="login.php" style={{ textDecoration: 'none' }}>
              <span className="header d-flex justify-content-end mx-2 login_title top-sub-heading">Login</span>
            </a>
          </div>
        </div>
        {/* Cart */}
        <div className="col-md-1 col-1 col-lg-1 col-sm-1 mx-0 px-1 d-flex justify-content-end margin-top_nav_atmob" style={{ display: 'inline' }}>
          <a href="cart.php" className="cart_this_margin sub-heading" style={{ display: 'inline', textDecoration: 'none' }}>
            <i className="fas fa-shopping-cart" style={{ color: '#bbb572', textDecoration: 'none' }}></i>
            <span className="cart-counter sub-heading" style={{ color: '#bbb572', textDecoration: 'none', textAlign: 'center' }}>0</span>
          </a>
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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={ Collapse_Menu } data-bs-target="#navbarSupportedContent" style={{ fontFamily: 'Playfair Display, serif' }} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-light w-3"><span>&nbsp;Menu</span></i>
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
        <a className="dropdown-item dropdown-toggle"  style={{ color: '#bbb572' }}>
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
