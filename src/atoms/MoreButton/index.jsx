import React from 'react'

const MoreButton = (props) => (
    <div>
        <button className="btn btn-outline-dark btn-lg" type="button" onClick={props.action}> Подробнее </button>
    </div>
);

export default MoreButton;
