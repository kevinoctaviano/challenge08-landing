import React from 'react';
import facebook from '../svg/icon_facebook.svg';
import instagram from '../svg/icon_instagram.svg';
import twitter from '../svg/icon_twitter.svg';
import mail from '../svg/icon_mail.svg';
import twitch from '../svg/icon_twitch.svg';
import { Link } from 'react-router-dom';

export default function FooterLanding() {
  return (
    <>
      <footer className="container">
        <div className="row">
          <div className="col-md-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-md-3">
            <ul>
              <li className="">
                <a className="text-decoration-none" href="#services">
                  Our Services
                </a>
              </li>
              <li className="mt-2">
                <a className="text-decoration-none" href="#whyus">
                  Why Us
                </a>
              </li>
              <li className="mt-2">
                <a className="text-decoration-none" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="mt-2">
                <a className="text-decoration-none" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 contact-us">
            <p>Connect with us</p>
            <Link
              className="text-decoration-none"
              to="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </Link>
            <Link
              className="text-decoration-none"
              to="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </Link>
            <Link
              className="text-decoration-none"
              to="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </Link>
            <Link
              className="text-decoration-none"
              to="https://gmail.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mail} alt="Gmail" />
            </Link>
            <Link
              className="text-decoration-none"
              to="https://www.twitch.tv/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitch} alt="Twitch" />
            </Link>
          </div>
          <div className="col-md-3 copyright">
            Copyright Binar 2022
            <div className="kotak"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
