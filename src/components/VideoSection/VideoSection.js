import React, { useEffect, useState } from "react";
const url_main = "https://dashboard.mahmoud-antiquites.com/api";

function VideoSection({ lang }) {
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
        {lang === "fr"
          ? "Cette vidéo explique comment nous nettoyons nos tapis"
          : "This video explains how we clean our carpets"}
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
