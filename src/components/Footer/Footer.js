import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import facebookLogo from "../../assets/facebook.png";
import instaLogo from "../../assets/Insta.png";
import youtubeLogo from "../../assets/youtube.png";
import twitterLogo from "../../assets/twitter.png";
import linkedinLogo from "../../assets/linkedin.png";
function footer({ contact_data, social, lang }) {
  console.log("contact_data", contact_data);
  console.log("social", social);
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
          <h2 className="footer__contact-title">
            {" "}
            {lang === "fr" ? "Contactez-nous" : "Contact Us"}
          </h2>
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
            <span className="flex-center footer__follow__icon">
              <a
                className="flex-center"
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterLogo} alt="twitter" />
              </a>
            </span>
            <span className="flex-center footer__follow__icon">
              <a
                className="flex-center"
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinLogo} alt="linkedin" />
              </a>
            </span>
            <span className="flex-center footer__follow__icon">
              <a
                className="flex-center"
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeLogo} alt="youtube" />
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
              href="https://technomasr.com/"
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
