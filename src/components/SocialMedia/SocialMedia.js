import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
const url_main = "https://dashboard.mahmoud-antiquites.com/api";
function SocialMedia() {
  const [whatsapp, setWhatsapp] = useState({});
  const [phone, setPhone] = useState({});
  useEffect(() => {
    fetch(`${url_main}/settings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: "en",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWhatsapp(data.data[0].social.whatsapp);
        setPhone(data.data[0].contact_data.phone);
      });
  }, []);
  return (
    <div className="app__social">
      <div className="phone-icon">
        <a
          className="flex-center"
          href={`tel:${phone}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaPhone />
        </a>
      </div>
      <div className="whats-icon">
        <a
          className="flex-center"
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          <BsWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
