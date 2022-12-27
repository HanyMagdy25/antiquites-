import React from "react";
import "./ContactUs.css";
function ContactUs() {
  return (
    <section className="contactUs">
      <div className="box-shadow contactUs__container">
        <div className="flex-center">
          <div className="secondSwiper-section__title-div">
            <h2 className="contactUs__title secondSwiper-section__title">
              Contact us
            </h2>
          </div>
        </div>
        <form className="contactUs__form ">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit" className="">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
