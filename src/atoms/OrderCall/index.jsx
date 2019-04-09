import React from 'react';
import './styles.css';

const OrderCall = (props) => (
    <div className="my-5">
        <button className="btn btn-outline-dark rounded-pill font-weight-bold" type="button" onClick={props.action}>
            <i class="fas fa-headset"></i>
            <span> Заказать обратный звонок</span>
        </button>
    </div>
       
);

export default OrderCall;