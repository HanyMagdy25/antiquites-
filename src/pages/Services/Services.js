import React from "react";
// import vid from "../../assets/vid.mp4";
import img from "../../assets/services.jpeg";
import "./Services.css";
import ContactUs from "../../components/Contact-Us/ContactUs";
import VideoSection from "../../components/VideoSection/VideoSection";
function Services() {
  return (
    <div className="services-section">
      {/* <div className="container"> */}
      <div className="container">
        <VideoSection />
      </div>
      <div className="services__content">
        <div className="services__content__container container">
          <div className="services__content-img">
            <img src={img} alt="services" />
          </div>
          <p>
            Nous avons les dernières machines de nettoyage et de détachage de
            tapis. Une section spéciale pour réparer les tapis à la main avec
            des experts iraniens. Plus de 50 ans d'expérience dans ce domaine
          </p>
        </div>
      </div>
      <ContactUs />
      {/* </div> */}
    </div>
  );
}

export default Services;
