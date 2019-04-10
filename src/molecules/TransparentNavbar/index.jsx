import React from 'react';
import './styles.css';
import img from '../../img/logo.svg';
class TransparentNavbar extends React.Component {
  // futura light c - шрифт
  navigate = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-0">
        <h1 className="navbar-brand ml-2" href="">ZR Premium</h1>
  

        <button className="navbar-toggler border-0 noBorder " type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon "></span>
        </button>
        {/* text logo navbutton */}
        {/* номер */}
        <div className="container d-block d-lg-none phoneNumber py-0">
          <span className="s text-white">8 800 444 10 88</span>
        </div>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <span className="navbar-text d-none d-lg-inline text-white ml-auto phoneNumber p-0">8 800 444 10 88</span>

          <ul className="navbar-nav">
            <li className="nav-item mr-auto ml-lg-2">
              <a id="linkHome" className="nav-link active px-1" href="#home">На главную</a>
            </li>
            <li className="nav-item mr-auto">
              <a id="linkAbout" className="nav-link px-1" href="#about">О нас</a>
            </li>
            <li className="nav-item mr-auto">
              <a id="linkContact" className="nav-link px-1" href="#contact">Обратная связь</a>
            </li>
          </ul>

        </div>

      </nav>
    )
  }
}



export default TransparentNavbar;
