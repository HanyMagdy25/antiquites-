import React, { useEffect, useState } from "react";
import "./Home.css";
import FirstSwiper from "../../components/FirstSwiper/FirstSwiper";
import SecondSwiper from "../../components/SecondSwiper/SecondSwiper";
import Spinner from "../../components/Spinner/Spinner";

function Home({ url_main, general_Settings }) {
  const [photos, setPhotos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${url_main}/photos`, {
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
        setLoading(false);
        setPhotos(data);
      });
  }, [url_main]);
  useEffect(() => {
    fetch(`${url_main}/reviews`, {
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
        setLoading(false);
        setReviews(data);
      });
  }, [url_main]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="home-section">
          <div className="container">
            <div className="firstSwiper-section">
              <FirstSwiper photos={photos} url_main={url_main} />
            </div>
          </div>
          <div className="home__content">
            <div className="container home__content__container">
              <p
                dangerouslySetInnerHTML={{
                  __html: general_Settings.siteHeader,
                }}
              />
            </div>
          </div>
          <div className="container">
            <div className="secondSwiper-section">
              <div className="flex-center mb-10">
                <div className="secondSwiper-section__title-div">
                  <h2 className="secondSwiper-section__title">
                    Cusotmer Reviews
                  </h2>
                </div>
              </div>
              <SecondSwiper reviews={reviews} url_main={url_main} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
