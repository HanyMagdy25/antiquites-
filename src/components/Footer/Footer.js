import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import facebookLogo from "../../assets/facebook.png";
import instaLogo from "../../assets/Insta.png";
function footer({ contact_data, social }) {
  return (
    <footer>
      <div className="container footer__container">
        <div>
          <div className="footer-logo">
            <Link to="/">
              <img src={contact_data.footerImage} alt="logo" loading="lazy" />
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
              <span>{contact_data.phone}</span>
            </div>
            <div className="flex mb-2">
              <span className="footer__icon flex-center">
                <AiOutlineMail />
              </span>{" "}
              <span>{contact_data.email}</span>
            </div>
            <div className="flex mb-2">
              <span className="footer__icon flex-center">
                <MdLocationOn />
              </span>{" "}
              <span>{contact_data.address}</span>
            </div>
          </div>
        </div>
        <div className="footer__follow">
          <h2 className="footer__contact-title">Follow Us</h2>
          <div className="flex">
            <span className="flex-center footer__follow__icon">
              <a
                className="flex-center"
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookLogo} alt="facebook" />
              </a>
            </span>
            <span className="flex-center footer__follow__icon">
              <a
                className="flex-center"
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaLogo} alt="instagram" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom__container">
          <span>
            © All copyrights to Mahmoud Antiquites {new Date().getFullYear()}
          </span>
          <span>
            Created by
            <a
              className="footer__bottom__techno"
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Technomasr
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default footer;
