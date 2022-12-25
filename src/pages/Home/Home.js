import React from "react";
import "./Home.css";
import FirstSwiper from "../../components/FirstSwiper/FirstSwiper";
import SecondSwiper from "../../components/SecondSwiper/SecondSwiper";

function Home() {
  return (
    <div className="home-section">
      <div className="container">
        <div className="firstSwiper-section">
          <FirstSwiper />
        </div>
        <div className="home__content">
          <p>
            Nous achetons et vendons des antiquités. tapis. mobilier. verre .
            argent . bijoux. Nous avons un département spécial pour le nettoyage
            et la réparation des tapis
          </p>
        </div>
        <div className="secondSwiper-section">
          <h3 className="secondSwiper-section__title">Cusotmer Reviews</h3>
          <SecondSwiper />
        </div>
      </div>
    </div>
  );
}

export default Home;
