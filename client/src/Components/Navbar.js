import React from 'react';
import image from '../static/images/whatsapp_logo.png';

function Navbar() {
  return (
    <div>
      {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg bg-white rounded-pill px-3 py-3 w-100  mx-auto mt-3 shadow">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img
                    src={image}
                    alt="Logo"
                    width="65"
                    height="60"
                    className="d-inline-block align-text-top rounded"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-dark me-3">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Privacy Policy</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Terms & Conditions</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    </div>
  )
}

export default Navbar
