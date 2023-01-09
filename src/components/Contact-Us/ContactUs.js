import React, { useState } from "react";
import "./ContactUs.css";
const url_main = "https://dashboard.mahmoud-antiquites.com/api";
function ContactUs({ lang }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState("");

  const handleContact = (e) => {
    e.preventDefault();
    const blog = { name, phone, content: text, email };
    fetch(`${url_main}/sendContactMessage`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
        lang: "en",
      },
      body: JSON.stringify(blog),
    })
      .then((data) => data.json())
      .then((res) => {
        setDone(res.status);

        console.log("res", res);
        if (res.status === "success") {
          setName("");
          setText("");
          setPhone("");
          setEmail("");
        }
      });
  };
  return (
    <section className="contactUs">
      <div className="box-shadow contactUs__container">
        <div className="flex-center">
          <div className="secondSwiper-section__title-div">
            <h2 className="contactUs__title secondSwiper-section__title">
              {lang === "fr" ? "Contactez-nous" : "Contact Us"}
            </h2>
          </div>
        </div>
        <form className="contactUs__form " onSubmit={handleContact}>
          <input
            type="text"
            placeholder={lang === "fr" ? "Nom" : "Name"}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder={lang === "fr" ? "Adresse e-mail" : "Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder={lang === "fr" ? "Téléphone" : "Phone"}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="Message"
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="">
            {lang === "fr" ? "Envoyer" : "SUBMIT"}
          </button>
          {done === "success" && <p className="contact__done">Sent</p>}
          {done === "faild" && <p className="contact__done">Failed to send</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
