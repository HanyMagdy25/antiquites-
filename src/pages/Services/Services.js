import React from "react";
import "./Services.css";
import ContactUs from "../../components/Contact-Us/ContactUs";
import VideoSection from "../../components/VideoSection/VideoSection";
import Spinner from "../../components/Spinner/Spinner";
function Services({ aboutUs, loading ,lang}) {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="services-section">
          <div className="container">
            <VideoSection lang={lang} />
          </div>
          <div className="services__content">
            <div className="services__content__container container">
              <div className="services__content-img">
                <img src={aboutUs.aboutusPhoto} alt="services" />
              </div>
              <div
                className="flex-center flex-column"
                dangerouslySetInnerHTML={{ __html: aboutUs.Description }}
              />
            </div>
          </div>
          <ContactUs lang={lang}/>
        </div>
      )}
    </>
  );
}
export default Services;
