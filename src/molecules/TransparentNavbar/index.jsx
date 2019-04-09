import React from 'react';

class TransparentNavbar extends React.Component {

  navigate= (id)=>{
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
  }

  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="">
              {/* <img src=""></img> */}
              ZR Premium
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item mr-auto">
                      <a id="linkHome" className="nav-link active"  href="#home">На главную</a>
                  </li>
                  <li className="nav-item mr-auto">
                      <a id="linkAbout" className="nav-link"  href="#about">О нас</a>
                  </li>
                  <li className="nav-item mr-auto">
                      <a id="linkContact" className="nav-link" href="#contact">Обратная связь</a>
                  </li>
              </ul>
          </div>
      </nav>
    )
  }
}



export default TransparentNavbar;
