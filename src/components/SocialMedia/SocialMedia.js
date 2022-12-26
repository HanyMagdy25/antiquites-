import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
function SocialMedia() {
  return (
    <div className="app__social">
      <div className="phone-icon">
        <FaPhone />
      </div>
      <div className="whats-icon">
        <BsWhatsapp />
      </div>
    </div>
  );
}

export default SocialMedia;
