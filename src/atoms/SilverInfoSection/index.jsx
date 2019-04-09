import React from 'react';
import silver from './silver.jpg';
import './styles.css';
const SilverInfoSection = (props) => (
    <div className="container-fluid row my-5">
        {/*<h3>Две линейки табака</h3>*/}
        <div className="col-lg-6 col-12">
            <h2 className="display-4 pb-3">
                Silver
            </h2>
            <ul className="text-left">
                <li className="lead">Средний по крепости табак, в состав которого входят табачные листы Вирджинии и Берли</li>
                <li className="lead" >Для истинных ценителей и любителей кальяна</li>
                <li className="lead">Насыщенная палитра вкусов. Вкус табака очень хорошо раскрывается, сам табак не боится перегрева</li>
                <li className="lead">Акцизный табак</li>
            </ul>
        </div>
        <div className="col-lg-6 col-12 bgBlack">
            <img src={silver} className="silverInfoImage"alt="silver tobacco"/>
        </div>
    </div>
);
export default SilverInfoSection;
