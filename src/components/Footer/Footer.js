import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";
// icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import facebookLogo from "../../assets/facebook.png";
import instaLogo from "../../assets/Insta.png";
function footer() {
  return (
    <footer>
      <div className="container footer__container">
        <div>
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Livre" loading="lazy" />
            </Link>
          </div>
        </div>
        <div className="footer__contact">
          <h2 className="footer__contact-title">Contact Us</h2>
          <div>
            <div className="flex mb-2">
              <span className="footer__icon flex-center">
                <BsFillTelephoneFill />
              </span>{" "}
              <span>003758035776</span>
            </div>
            <div className="flex mb-2">
              <span className="footer__icon flex-center">
                <AiOutlineMail />
              </span>{" "}
              <span>mahmoud123.kh@icloud.com</span>
            </div>
            <div className="flex mb-2">
              <span className="footer__icon flex-center">
                <MdLocationOn />
              </span>{" "}
              <span>Mansoura City</span>
            </div>
          </div>
        </div>
        <div className="footer__follow">
          <h2 className="footer__contact-title">Follow Us</h2>
          <div className="flex">
            <span className="flex-center">
              <img src={facebookLogo} alt="facebook" />
            </span>
            <span className="flex-center">
              <img src={instaLogo} alt="instagram" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
