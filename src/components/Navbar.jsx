import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logoBookley from '../images/logo_bookly.png';


const Navbar = () => {
  return (
    <>
    <style>{`
      .contact-info-p i {
          border: solid none !important;
      }
      .header-section-1 {
          background-color: #F99F3F !important;
      }
      .shopping-btn-div {
          background: none;
      }
      .search-line i, .shopping-btn-div i {
          background-color: white;
          color:#012E4A;
      }
      .search-line i {
          padding: 10px 10px;
          border-radius: 50%;
      }
      .search-line:hover {
          background-color: none !important;
      }
      .ri-shopping-cart-fill:hover {
          background-color: none !important;
      }
      .navbar-nav a {
          color: white;
      }
      .navbar-nav a:hover{
        color: white;
    }


      .navbar-nav a:focus {
          color: white !important;
      }
      .navbar-expand-lg {
          background-color: #012E4A !important;
          color: white;
      }
      .search-line, .ri-shopping-cart-fill  {
          background-color: #012E4A; 
      }
      .ri-heart-line {
          font-size: 24px;
      }
    `}</style>
      <nav className="nav-section-1">
        <nav className="navbar navbar-expand-lg">
          <div className="container justify-content-evenly">
            <a className="navbar-brand me-5" href="#">
              <img
                src={logoBookley}
                alt="logo"
                width="180"
                href="/"
                height="60"
                className="d-inline-block align-text-top"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav nav-underline me-auto ms-5">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">Home</Link>
              </li>
            
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Books
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/books">All books</a></li>
                    <li><a className="dropdown-item" href="#">Top Featured</a></li>
                    <li><a className="dropdown-item" href="#">Most Selling</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/my-orders">My Orders</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">About us</a></li>
                    <li><a className="dropdown-item" href="#">Contact us</a></li>
                    <li><a className="dropdown-item" href="#">Faq</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Team</a>
                </li>
              </ul>
            </div>

            {/* Cart & Search Buttons */}
            <button className="shopping-btn-div" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
              <i className="ri-shopping-cart-fill fs-3 p-2"></i>
            </button>
            <Link to="/wishlist" className="search-line border-0">
            <i className="ri-heart-line"></i>
          </Link>
          
            <button className="search-line border-0" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
              <i className="ri-search-line fs-4"></i>
            </button>

            {/* Modal Search Box */}
            <div className="modal" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <lord-icon
                    className="search-cross-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    src="https://cdn.lordicon.com/zxvuvcnc.json"
                    trigger="hover"
                    colors="primary:#ff681b"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>

                  <div className="modal-body">
                    <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="search here..." aria-label="Search" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </nav>

      {/* Cart Offcanvas */}
      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Your Cart</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </div>

        <div className="offcanvas-body text-danger text-center">
          <img src="images/Screen Recording 2024-07-09 at 22.32.10.gif" width="150px" height="160px" alt="Empty cart" />
          <p>You have not added any items into the cart !!</p>
        </div>
      </div>

      {/* Toggle Menu Offcanvas */}
      <div className="navbar">
        <div className="offcanvas-contain">
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
