import React, { useEffect, useState } from "react";
const url_main = "https://dashboard.mahmoud-antiquites.com/api";

function VideoSection() {
  const [vid, setVid] = useState({});
  useEffect(() => {
    fetch(`${url_main}/video`, {
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
        setVid(data[0]);
      });
  }, []);
  return (
    <section className="videoSection">
      <div className="flex-center">
        <div className="secondSwiper-section__title-div">
          <h2 className="secondSwiper-section__title">Demo Reel</h2>
        </div>
      </div>
      <p className="videoSection__content">
        Nous avons les dernières machines de nettoyage et de détachage de tapis.
        Une section spéciale pour réparer les tapis à la main avec des experts
        iraniens. Plus de 50 ans d'expérience dans ce domaine
      </p>
      {vid.status === 1 && (
        <video controls>
          <source
            src={`https://dashboard.mahmoud-antiquites.com/public/uploads/${vid.video}`}
            type="video/mp4"
          />
        </video>
      )}
    </section>
  );
}

export default VideoSection;
