import React from 'react';
import './styles.css';

const CallButton = (props) => (
    <div>
        {/*<div className="btn btn-success text-white rounded-pill linkFix">*/}

        {/*<a className="phoneNumber" href="tel:+7 (800) 555 35 35">+7 (800) 555 35 35</a>*/}
        {/*<i class="fas fa-phone"></i>*/}
        {/*<span className="fa-stack ">*/}
        {/*<i className="fas fa-phone fa-stack-1x"></i>*/}
        {/*<i className="far fa-circle fa-stack-1x"></i>*/}
        {/**/}
        {/*</span>*/}
        <a>
            <i className="fab fa-whatsapp fa-5x call"></i>
        </a>
    </div>

);
export default CallButton;
