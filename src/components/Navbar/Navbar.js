import React, { useState } from "react";
// Import React Router Dom
import { Link, NavLink, useNavigate } from "react-router-dom";
//  import CSS File
import "./Navbar.css";
// Import Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
// Import Images
import logo from "../../assets/logo.png";
import Dropdown from "./Dropdown";

const Navbar = ({ userOfLivre }) => {
  const [click, setClick] = useState(false);
  const [dropNav, setDropNav] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Livre" loading="lazy" />
            </Link>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <span className="flex">
              {click ? <AiOutlineClose /> : <AiOutlineMenu />}
            </span>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={"nav-links "}
                onClick={() => {
                  handleClick();
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={"nav-links "}
                onClick={() => {
                  handleClick();
                }}
              >
                Services
              </NavLink>
            </li>
            <select className="navbar__select">
              <option>French</option>
              <option>English</option>
            </select>
       
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
