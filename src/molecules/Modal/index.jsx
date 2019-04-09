import React from 'react';
import './styles.css';
import img from './logo.svg'
import AgeVerificationButton from '../../atoms/AgeVerificationButton';
class Modal extends React.Component {
  updateAge = () => {
    this.props.callBackFromParent(true);
    document.getElementById('ageVerificationContainer').style.display = "none";
    localStorage.setItem('olderThan18', true);
  }
  render() {
    return (
      <div id="ageVerificationContainer">
        <div className="ageVerificationItem">
          <img className="ageVerificationLogo" src={img} alt="zr premium"></img>
          <p className="ageVerificationText">Я подтверждаю, что мне исполнилось 18 лет</p>
          <div className="row">
            <div className="col-6"><AgeVerificationButton title="Да" function={this.updateAge} /></div>
            <div className="col-6"><AgeVerificationButton title="Нет" /></div>
          </div>
        </div>
      </div>
    )
  }
}


export default Modal;
