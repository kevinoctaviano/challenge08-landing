import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-lightGrey sticky-top">
        <div className="container">
          <Link to={'/'} className="navbar-brand" href="#top">
            <div className="square"></div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-link mx-3 active" href="#services">
                Our Services <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link mx-3" href="#whyus">
                Why Us
              </a>
              <a className="nav-link mx-3" href="#testimonial">
                Testimonial
              </a>
              <a className="nav-link mx-3" href="#faq">
                FAQ
              </a>
              <Link className="btn btn-success mx-3" to={'/register'}>
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
