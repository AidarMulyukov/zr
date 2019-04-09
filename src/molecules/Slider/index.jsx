import React from 'react'
import car1 from './car1.jpg';
import car2 from './car2.jpg';
import car3 from './car3.jpg';
import './styles.css';

function Slider() {
    return (
        <div className="">
        {/* <img src={car1} alt="1" className="d-block carImage w-100"/> */}

            <div id="slides" className="carousel slide" data-ride="">

                <ul className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={car1} alt="1" className="d-block w-100"/>
                        <div className="container row carousel-caption d-none d-md-block">
                            <div className="col-md-6">
                                <h1>Уникальная линейка табака</h1>
                                <h3>Свой завод в Татарстане</h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={car2} alt="1" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src={car3} alt="1" className="d-block w-100"/>
                    </div>
                </div>


                
                <a className="carousel-control-prev" href="#slides" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#slides" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    );
}

export default Slider;
