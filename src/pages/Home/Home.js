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
      </div>
      <div className="home__content">
        <div className="container home__content__container">
          <p>
            Nous achetons et vendons des antiquités. tapis. mobilier. verre .
            argent . bijoux. Nous avons un département spécial pour le nettoyage
            et la réparation des tapis
          </p>
        </div>
      </div>
      <div className="container">
        <div className="secondSwiper-section">
          <div className="flex-center mb-10">
            <div className="secondSwiper-section__title-div">
              <h2 className="secondSwiper-section__title">Cusotmer Reviews</h2>
            </div>
          </div>
          <SecondSwiper />
        </div>
      </div>
    </div>
  );
}

export default Home;
