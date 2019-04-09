import React from 'react';
import CallButton from '../../atoms/CallButton';
import OrderCall from '../../atoms/OrderCall';
import './styles.css';

const Connect = () => (
    <div className="container-fluid" id="contact">
        <div className="row">
            <div className="col-12">
                <h2>Связаться с нами</h2>
            </div>
            <hr />
            <div className="col-md-4 col-12 pt-4">
                <CallButton />
                {/*<OrderCall />*/}
            </div>
            <div className="col-md-8 col-12 ">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <a href="https://vk.com/zrpremiumtobacco">
                            <i className="fab fa-vk fa-5x mx-5 vk"></i>
                        </a>
                    </div>
                    <div className="col-md-6 col-12">
                        <a href="https://www.instagram.com/zr_premium_lounge/">
                            <i className="fab fa-instagram mx-5 fa-5x instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div >
);

export default Connect;
