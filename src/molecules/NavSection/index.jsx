import React from 'react';
import './styles.css';

// import bootstrap;
// NOT BEING USED !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function NavSection() {
    return (
        <nav id="navbar" className="navbar navbar-expand-md bg-transparent sticky-top">
        {/* <nav id="navbar" className="navbar navbar-expand-md navbar-dark sticky-top"> */}

            <div className="container-fluid">
                {/*<a className="nabar-brand" href="#"><img src={logo} className="img-fluid"/></a>*/}
                <span className="nabar-brand text-white" href="#">ZR Premium Logo</span>
                <button className="navbar-toggler" type="button" data-togggle="collapse"
                        data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mx-lg-3">
                            <a className="nav-link navbar-collapse">
                                В начало
                            </a>
                        </li>
                        <li className="nav-item mx-lg-3">
                            <a className="nav-link navbar-collapse">
                                О компании
                            </a>
                        </li>
                        <li className="nav-item mx-lg-3">
                            <a className="nav-link navbar-collapse">
                                Вкусовая палитра
                            </a>
                        </li>
                        <li className="nav-item mx-lg-3">
                            <a className="nav-link">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavSection;
