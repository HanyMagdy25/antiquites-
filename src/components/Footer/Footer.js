import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";
// icons
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {MdLocationOn} from "react-icons/md"
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
        <div>
          <h2>Contact Us</h2>
          <div>
            <div>
              <span><BsFillTelephoneFill/></span> <span>02315456654</span>
            </div>
            <div>
              <span><AiOutlineMail/></span> <span>test@gmail.com</span>
            </div>
            <div>
              <span><MdLocationOn/></span> <span>Mansoura City</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default footer;
