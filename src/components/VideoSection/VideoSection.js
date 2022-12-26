import React from "react";
import vid from "../../assets/vid.mp4";
function VideoSection() {
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
      <video controls>
        <source src={vid} type="video/mp4" />
      </video>
    </section>
  );
}

export default VideoSection;
