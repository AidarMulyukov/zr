import React from 'react';
import './styles.css';
// import img from './logo.svg';
import img from '../../img/logo.svg';
const BgSlider = () => (
//todo fix width
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="5000">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

        </ol>
        <div className="carousel-inner" role="listbox">

            <div className="carousel-item active">
              <section className="welcome">
                  <img className="bigLogo" src={img} alt=""/>
              </section>
                {/*
                  <!--
                  <div class="carousel-caption d-none d-md-block text-center">

                      <h5>Уникальная палитра вкусов</h5>
                      <p>Среди наших продуктов выделяют "зелйный банан", "лесные ягоды" и многие другие экзотичные ароматы.</p>
                      <a className="btn btn-outline-light btn-lg" href="#about">Подробнее</a>
                  </div>
                  -->*/}
            </div>
            <div className="carousel-item carouselImage1"></div>
            <div className="carousel-item carouselImage2"></div>
            <div className="carousel-item carouselImage3"></div>

        </div>


        <a className="carousel-control-prev" href="#carouselExampleIndicators" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" data-slide="next">
            <span className="carousel-control-next-icon"></span>
        </a>
    </div>
);

export default BgSlider;
