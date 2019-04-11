import React from 'react';
import './styles.css';
import img from '../../img/logo.svg';
const BgSlider = () => (

    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="5000000">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

        </ol>
        <div className="carousel-inner" role="listbox">

            <div className="carousel-item active mainCarouselItem">
              <section className="welcome">
                  <img className="bigLogo" src={img} alt=""/>
              </section>
            </div>
            <div className="carousel-item carouselImage1 mainCarouselItem"></div>
            <div className="carousel-item carouselImage2 mainCarouselItem"></div>
            <div className="carousel-item carouselImage3 mainCarouselItem"></div>

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
