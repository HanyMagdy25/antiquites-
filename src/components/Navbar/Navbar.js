import React, { useState } from "react";
// Import React Router Dom
import { Link, NavLink } from "react-router-dom";
//  import CSS File
import "./Navbar.css";
// Import Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = ({ siteLogo,setLang }) => {
  const [click, setClick] = useState(false);
  // const [lang, setLang] = useState("fr");


  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <div className="navbar-logo">
            <Link to="/">
              <img src={siteLogo} alt="logo" loading="lazy" />
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
            <select
              onChange={(e) => setLang(e.target.value)}
              className="navbar__select"
            >
              <option value="fr">French</option>
              <option value="en">English</option>
            </select>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
