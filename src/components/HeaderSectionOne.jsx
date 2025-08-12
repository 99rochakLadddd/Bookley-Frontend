// HeaderSectionOne.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const HeaderSectionOne = () => {
  return (
    <header className="header-section-1 bg-dark">
      <div className="container-fluid fluid-wala-container d-flex flex-wrap justify-content-between align-items-center">
        <div className="contact-info p-3 fs-6">
          <p className="contact-info-p mb-0 fw-bold">
            <i className="fa-solid fa-envelope p-2 me-2"></i>
            <span className="contact-email me-4">bookley@store.com</span>
            <i className="ri-phone-fill contact-phone me-2 px-2 py-1"></i>
            <span className="contact-phone">123-456-7890</span>
          </p>
        </div>
        <div className="social-media d-flex">
          <p className="social-media-icons mt-3 fs-4 me-4">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-line ms-2"></i>
            <i className="ri-twitter-fill ms-2"></i>
            <i className="ri-youtube-fill ms-2"></i>
          </p>

          <div className="btn-group language-btn-div text-center align-items-center">

            <Link to="/member-register" className="btn fs-6 fw-bolder">
            Register
            </Link>

          </div>

          <div className="dropdown profile-btn-div me-2">
            <button
              className="btn dropdown-toggle profile-button p-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ri-account-circle-fill"></i>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"><i className="ri-login-box-line fs-5"></i> Login</a></li>
              <li><a className="dropdown-item" href="#"><i className="ri-logout-box-line fs-5"></i> Logout</a></li>
              <li><a className="dropdown-item" href="/my-profile"><i className="ri-account-pin-circle-fill fs-5"></i> View Profile</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};






export default HeaderSectionOne;
